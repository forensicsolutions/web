import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, CheckCircle, Search, MapPin, Users, Eye, Shield, Database } from "lucide-react";

export default function OsintSocmint() {
  useEffect(() => {
    document.title = "OSINT/SOCMINT Investigation Services - Forensic Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional open source intelligence (OSINT) and social media intelligence (SOCMINT) services for digital investigations and threat assessment.');
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
                <Globe className="text-primary mr-4" />
                OSINT/SOCMINT
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Advanced open source and social media intelligence gathering using specialized tools and methodologies to uncover critical information from publicly available sources.
              </p>
              <Link href="/contact">
                <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold" data-testid="button-contact-osint">
                  Request Intelligence Analysis
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="OSINT analysis workstation with multiple monitors"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligence Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive open source and social media intelligence gathering to support investigations, threat assessment, and due diligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Social Media Intelligence</h3>
              <p className="text-muted-foreground mb-4">
                Deep analysis of social media platforms to uncover behavioral patterns, connections, and digital evidence.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Facebook, Twitter, Instagram analysis</li>
                <li>• LinkedIn professional networks</li>
                <li>• Dating platform investigations</li>
                <li>• Social graph mapping</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Geolocation Intelligence</h3>
              <p className="text-muted-foreground mb-4">
                Advanced geolocation techniques using metadata analysis and location correlation for timeline reconstruction.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Photo metadata analysis</li>
                <li>• Location timeline reconstruction</li>
                <li>• Geographic correlation analysis</li>
                <li>• Movement pattern identification</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Digital Footprint Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive mapping of online presence across platforms, forums, and public databases.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Username correlation</li>
                <li>• Email address investigation</li>
                <li>• Public record searches</li>
                <li>• Domain registration analysis</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Online Reputation Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Monitoring and analysis of online reputation, mentions, and digital presence across the web.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Brand mention monitoring</li>
                <li>• Reputation assessment</li>
                <li>• News and media analysis</li>
                <li>• Review platform investigation</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Threat Intelligence</h3>
              <p className="text-muted-foreground mb-4">
                Identification and analysis of potential threats, including cybersecurity risks and physical security concerns.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Threat actor identification</li>
                <li>• Dark web monitoring</li>
                <li>• Vulnerability assessment</li>
                <li>• Risk analysis reporting</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Data Mining & Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Advanced data mining techniques to extract meaningful intelligence from large datasets and public sources.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Public database searches</li>
                <li>• Court record analysis</li>
                <li>• Business intelligence gathering</li>
                <li>• Pattern recognition analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OSINT Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Systematic approach to open source intelligence gathering ensuring comprehensive and ethical investigation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">1</div>
              <h4 className="text-lg font-semibold mb-3">Planning & Direction</h4>
              <p className="text-muted-foreground text-sm">Define objectives, scope, and intelligence requirements for the investigation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">2</div>
              <h4 className="text-lg font-semibold mb-3">Collection</h4>
              <p className="text-muted-foreground text-sm">Systematic gathering of information from open sources and social media platforms</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">3</div>
              <h4 className="text-lg font-semibold mb-3">Processing & Analysis</h4>
              <p className="text-muted-foreground text-sm">Verification, correlation, and analysis of collected information for accuracy and relevance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">4</div>
              <h4 className="text-lg font-semibold mb-3">Production & Dissemination</h4>
              <p className="text-muted-foreground text-sm">Creation of intelligence reports with actionable findings and recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Techniques */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced OSINT Tools & Techniques</h2>
              <p className="text-muted-foreground mb-8">
                Utilizing cutting-edge tools and proven methodologies to extract maximum intelligence from open sources while maintaining ethical and legal compliance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Specialized Software</h4>
                    <p className="text-muted-foreground text-sm">Professional OSINT tools for data collection, analysis, and visualization</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Automated Monitoring</h4>
                    <p className="text-muted-foreground text-sm">Real-time monitoring systems for ongoing intelligence gathering</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Ethical Compliance</h4>
                    <p className="text-muted-foreground text-sm">All activities conducted within legal boundaries and ethical guidelines</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Data Verification</h4>
                    <p className="text-muted-foreground text-sm">Multi-source verification to ensure accuracy and reliability of intelligence</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="OSINT analysis workstation with data visualization"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OSINT Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Open source intelligence supports a wide range of investigation and security applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-6 text-center">
              <Search className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Due Diligence</h4>
              <p className="text-sm text-muted-foreground">Background research for business partnerships and investment decisions</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Threat Assessment</h4>
              <p className="text-sm text-muted-foreground">Identification and evaluation of potential security threats</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Personnel Screening</h4>
              <p className="text-sm text-muted-foreground">Comprehensive background checks for employment and security clearances</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Eye className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Fraud Investigation</h4>
              <p className="text-sm text-muted-foreground">Digital evidence gathering for fraud and financial crime investigations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need OSINT Intelligence Services?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our intelligence experts for professional open source and social media investigation services
          </p>
          <Link href="/contact">
            <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold text-lg" data-testid="button-contact-osint-cta">
              Request Intelligence Analysis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
