import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertBlogPostSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real application, you would send an email here
      console.log("New contact submission:", submission);
      
      res.json({ 
        success: true, 
        message: "Your message has been sent successfully. We will respond within 24-48 hours." 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Please check your form data and try again.",
        errors: error 
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve submissions" });
    }
  });

  // Blog routes
  app.get("/api/blog", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const category = req.query.category as string | undefined;
      const posts = await storage.getBlogPosts(limit, category);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve blog posts" });
    }
  });

  app.get("/api/blog/:id", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve blog post" });
    }
  });

  app.post("/api/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.json({ success: true, post });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Please check your blog post data and try again.",
        errors: error 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
