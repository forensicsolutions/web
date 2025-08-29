import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Calendar, Tag, Filter, ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

const categories = [
  { value: "", label: "All Categories" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "osint", label: "OSINT" },
  { value: "data-forensics", label: "Data Forensics" },
  { value: "investigations", label: "Investigations" },
  { value: "industry-news", label: "Industry News" },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    document.title = "Blog - Forensic Solutions | Latest in Digital Investigation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stay updated with the latest cybersecurity news, OSINT strategies, data forensics techniques, and digital investigation insights from our expert team.');
    }
  }, []);

  const { data: blogPosts = [], isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog', selectedCategory],
    queryFn: async () => {
      const url = selectedCategory 
        ? `/api/blog?category=${selectedCategory}`
        : '/api/blog';
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      return response.json();
    },
  });

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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
              <BookOpen className="text-primary mr-4" />
              Expert Insights & Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest cybersecurity trends, OSINT techniques, data forensics strategies, and digital investigation insights from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Latest Articles</h2>
              <p className="text-muted-foreground">
                {blogPosts.length} {blogPosts.length === 1 ? 'article' : 'articles'} available
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48" data-testid="select-category-filter">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="bg-card">
                  <CardContent className="p-6">
                    <div className="animate-pulse">
                      <div className="h-4 bg-muted rounded mb-4"></div>
                      <div className="h-6 bg-muted rounded mb-4"></div>
                      <div className="h-20 bg-muted rounded mb-4"></div>
                      <div className="h-4 bg-muted rounded w-1/2"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Failed to load blog posts. Please try again later.</p>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!isLoading && !error && blogPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant="outline" 
                        className={getCategoryColor(post.category)}
                        data-testid={`badge-${post.category}`}
                      >
                        {categories.find(c => c.value === post.category)?.label || post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <div key={index} className="flex items-center text-xs text-muted-foreground">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </div>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-muted-foreground">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    
                    <Link href={`/blog/${post.id}`}>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between group"
                        data-testid={`button-read-more-${post.id}`}
                      >
                        Read Full Article
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && blogPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Articles Found</h3>
              <p className="text-muted-foreground mb-6">
                {selectedCategory 
                  ? `No articles found in the ${categories.find(c => c.value === selectedCategory)?.label} category.`
                  : "No blog articles have been published yet."
                }
              </p>
              {selectedCategory && (
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory("")}
                  data-testid="button-clear-filter"
                >
                  View All Articles
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}