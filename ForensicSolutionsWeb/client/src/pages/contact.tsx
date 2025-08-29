import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { Mail, Clock, Shield, Tag, Gavel, Users, File, NotebookPen } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Forensic Solutions - Professional Consultation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Forensic Solutions for confidential consultation about your digital investigation, cybersecurity, or private investigation needs. Professional expertise available 24/7.');
    }
  }, []);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      fullName: "",
      email: "",
      service: "",
      caseDetails: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent Successfully",
        description: "We will respond within 24-48 hours with a confidential consultation.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: "Please check your information and try again. If the problem persists, email us directly.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitContactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-xl p-12">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Message Sent Successfully</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for contacting Forensic Solutions. We will respond within 24-48 hours with a confidential consultation regarding your case.
            </p>
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3 justify-center">
                <Mail className="text-primary flex-shrink-0" />
                <span>You will receive a confirmation email shortly</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Clock className="text-primary flex-shrink-0" />
                <span>Response time: 24-48 hours for standard inquiries</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Shield className="text-primary flex-shrink-0" />
                <span>All communications are strictly confidential</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
              <Mail className="text-primary mr-4" />
              Get Professional Consultation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact us for confidential discussion of your investigation, cybersecurity, or digital forensics needs. Our experts are ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Confidential Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              data-testid="input-full-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your.email@example.com" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Needed</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} value={field.value} data-testid="select-service">
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="private-investigation">Private Investigation</SelectItem>
                                <SelectItem value="data-forensics">Data Forensics</SelectItem>
                                <SelectItem value="osint-socmint">OSINT/SOCMINT</SelectItem>
                                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                                <SelectItem value="expert-witness">Expert Witness</SelectItem>
                                <SelectItem value="emergency-response">Emergency Response</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="caseDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Case Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={6}
                              placeholder="Please provide brief details about your case. All communications are strictly confidential and protected by attorney-client privilege when applicable."
                              className="resize-none"
                              {...field}
                              data-testid="textarea-case-details"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="confidential" 
                        required 
                        className="mt-1"
                        data-testid="checkbox-confidential"
                      />
                      <label htmlFor="confidential" className="text-sm text-muted-foreground leading-relaxed">
                        I acknowledge that all communications will be treated as strictly confidential and understand that Forensic Solutions maintains professional standards for client privacy protection. *
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full cta-button py-4 font-semibold text-primary-foreground"
                      disabled={submitContactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {submitContactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          <NotebookPen className="mr-2 h-4 w-4" />
                          Send Confidential Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-2xl text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <a 
                          href="mailto:info@forensicsolutions.org" 
                          className="text-primary hover:text-accent transition-colors"
                          data-testid="link-email-contact"
                        >
                          info@forensicsolutions.org
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">Primary contact for all inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="text-2xl text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Response Time</h4>
                        <p className="text-muted-foreground">24-48 hours for standard inquiries</p>
                        <p className="text-muted-foreground">Emergency response available 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Shield className="text-2xl text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Confidentiality</h4>
                        <p className="text-muted-foreground">All communications protected by strict confidentiality protocols</p>
                        <p className="text-muted-foreground text-sm">Attorney-client privilege applicable when appropriate</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Standards */}
              <Card className="bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Professional Standards</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Gavel className="text-primary flex-shrink-0" />
                      <span className="text-sm">Licensed Private Investigation Agency</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Tag className="text-primary flex-shrink-0" />
                      <span className="text-sm">Certified Computer Forensics Examiner (CCE)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="text-primary flex-shrink-0" />
                      <span className="text-sm">Member of Professional Associations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <File className="text-primary flex-shrink-0" />
                      <span className="text-sm">Fully Insured & Bonded</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-card border-primary">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Emergency Response</h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent matters requiring immediate attention, include "EMERGENCY" in your email subject line. Our emergency response team is available 24/7 for critical situations.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• Cybersecurity incidents</p>
                    <p>• Data breach response</p>
                    <p>• Evidence preservation</p>
                    <p>• Time-sensitive investigations</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Can Help</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive services cover all aspects of digital investigation and cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-6 text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Legal Support</h4>
              <p className="text-sm text-muted-foreground">Expert witness testimony and litigation support for attorneys</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Corporate Security</h4>
              <p className="text-sm text-muted-foreground">Internal investigations and cybersecurity assessments for businesses</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Tag className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Insurance Claims</h4>
              <p className="text-sm text-muted-foreground">Digital evidence analysis for insurance fraud investigations</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Personal Matters</h4>
              <p className="text-sm text-muted-foreground">Confidential investigation services for personal and family matters</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
