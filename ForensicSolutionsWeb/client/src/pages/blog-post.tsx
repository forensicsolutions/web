import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, ArrowLeft, Clock } from "lucide-react";
import type { BlogPost } from "@shared/schema";

const categories = {
  'cybersecurity': 'Cybersecurity',
  'osint': 'OSINT',
  'data-forensics': 'Data Forensics',
  'investigations': 'Investigations',
  'industry-news': 'Industry News',
};

export default function BlogPostPage() {
  const [match, params] = useRoute("/blog/:id");
  const postId = params?.id;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog', postId],
    queryFn: async () => {
      if (!postId) throw new Error('No post ID provided');
      const response = await fetch(`/api/blog/${postId}`);
      if (!response.ok) throw new Error('Failed to fetch blog post');
      return response.json();
    },
    enabled: !!postId,
  });

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Forensic Solutions Blog`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }
    }
  }, [post]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'cybersecurity': 'bg-red-500/10 text-red-500 border-red-500/20',
      'osint': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      'data-forensics': 'bg-green-500/10 text-green-500 border-green-500/20',
      'investigations': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      'industry-news': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  };

  if (!match) {
    return <div>Page not found</div>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-muted rounded mb-6"></div>
            <div className="h-6 bg-muted rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog">
            <Button data-testid="button-back-to-blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog-list">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge 
              variant="outline" 
              className={getCategoryColor(post.category)}
              data-testid={`badge-category-${post.category}`}
            >
              {categories[post.category as keyof typeof categories] || post.category}
            </Badge>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(post.publishedAt)}
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              {estimateReadingTime(post.content)} min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag, index) => (
                <div key={index} className="flex items-center text-sm text-muted-foreground">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <div 
            className="text-foreground leading-relaxed whitespace-pre-wrap"
            data-testid="article-content"
          >
            {post.content}
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <p>Published by <span className="font-medium">Forensic Solutions</span></p>
              <p>Last updated: {formatDate(post.updatedAt)}</p>
            </div>
            
            <Link href="/blog">
              <Button variant="outline" data-testid="button-more-articles">
                More Articles
              </Button>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}