import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import ServicesGrid from "@/components/services-grid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Microscope, SatelliteDish, Lock, CheckCircle, Tag, Gavel, Clock, Microchip, Route } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "Forensic Solutions - Professional Investigation & Cybersecurity Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional private investigation, digital forensics, OSINT/SOCMINT investigation, and cybersecurity services. Trusted expertise in data recovery and security solutions.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesGrid />
      
      {/* Detailed Services Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Private Investigation Detail */}
            <div className="grid lg:grid-cols-2 gap-12 items-center fade-in visible">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center">
                  <Microscope className="mr-3" />
                  Private Investigation Services
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our licensed private investigators combine traditional investigative methods with cutting-edge digital tools to provide comprehensive investigation services for legal professionals, corporations, and individuals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Background Verification</h4>
                      <p className="text-muted-foreground text-sm">Complete background checks for employment, relationships, and business partnerships</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Asset Investigation</h4>
                      <p className="text-muted-foreground text-sm">Locate hidden assets, property searches, and financial investigations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Corporate Security</h4>
                      <p className="text-muted-foreground text-sm">Employee misconduct, intellectual property theft, and corporate espionage investigations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Investigation surveillance equipment"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>

            {/* Data Forensics Detail */}
            <div className="grid lg:grid-cols-2 gap-12 items-center fade-in visible">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Digital forensics laboratory"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center">
                  <Microscope className="mr-3" />
                  Digital Forensics & Data Recovery
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  State-of-the-art digital forensics capabilities to recover, analyze, and preserve electronic evidence for legal proceedings and internal investigations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Mobile Device Forensics</h4>
                      <p className="text-muted-foreground text-sm">iOS and Android device analysis, deleted data recovery, and communication extraction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Computer Analysis</h4>
                      <p className="text-muted-foreground text-sm">Hard drive imaging, file system analysis, and malware detection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Network Forensics</h4>
                      <p className="text-muted-foreground text-sm">Traffic analysis, intrusion detection, and network breach investigation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in visible">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Award className="text-primary mr-3" />
              About Forensic Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading experts in digital investigation and cybersecurity with years of experience serving legal professionals, corporations, and government agencies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center fade-in visible">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional data center equipment"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Excellence in Digital Investigation</h3>
              <p className="text-muted-foreground mb-6">
                Forensic Solutions has been at the forefront of digital investigation and cybersecurity services for over a decade. Our team of certified professionals brings together expertise in law enforcement, corporate security, and digital forensics.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Cases Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Confidential</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Tag className="text-primary flex-shrink-0" />
                  <span>Certified Digital Forensics Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gavel className="text-primary flex-shrink-0" />
                  <span>Court-Qualified Expert Witnesses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="text-primary flex-shrink-0" />
                  <span>Strict Confidentiality & Chain of Custody</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary flex-shrink-0" />
                  <span>24/7 Emergency Response Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in visible">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Microchip className="text-primary mr-3" />
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge tools and technologies to deliver accurate, reliable investigation and security services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in visible">
            <div className="bg-card rounded-xl p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Digital forensics workstation"
                className="rounded-lg w-full h-32 object-cover mb-4"
              />
              <h4 className="font-semibold mb-2">Forensics Lab</h4>
              <p className="text-sm text-muted-foreground">State-of-the-art digital forensics laboratory with specialized equipment</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Server infrastructure"
                className="rounded-lg w-full h-32 object-cover mb-4"
              />
              <h4 className="font-semibold mb-2">Secure Infrastructure</h4>
              <p className="text-sm text-muted-foreground">Enterprise-grade servers and secure data processing capabilities</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Data analysis workstation"
                className="rounded-lg w-full h-32 object-cover mb-4"
              />
              <h4 className="font-semibold mb-2">Analysis Software</h4>
              <p className="text-sm text-muted-foreground">Professional-grade analysis and visualization tools</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Security monitoring center"
                className="rounded-lg w-full h-32 object-cover mb-4"
              />
              <h4 className="font-semibold mb-2">Security Operations</h4>
              <p className="text-sm text-muted-foreground">24/7 security monitoring and threat detection systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in visible">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Route className="text-primary mr-3" />
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring thorough investigation and reliable results for every case
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center fade-in visible">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">1</div>
              <h4 className="text-lg font-semibold mb-3">Initial Consultation</h4>
              <p className="text-muted-foreground text-sm">Confidential discussion of your case requirements and objectives</p>
            </div>

            <div className="text-center fade-in visible">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">2</div>
              <h4 className="text-lg font-semibold mb-3">Evidence Collection</h4>
              <p className="text-muted-foreground text-sm">Secure acquisition and preservation of digital evidence following legal protocols</p>
            </div>

            <div className="text-center fade-in visible">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">3</div>
              <h4 className="text-lg font-semibold mb-3">Analysis & Investigation</h4>
              <p className="text-muted-foreground text-sm">Thorough examination using advanced tools and methodologies</p>
            </div>

            <div className="text-center fade-in visible">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">4</div>
              <h4 className="text-lg font-semibold mb-3">Report & Testimony</h4>
              <p className="text-muted-foreground text-sm">Detailed findings report and expert witness testimony when required</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a confidential consultation about your investigation or security needs
          </p>
          <Link href="/contact">
            <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold text-lg" data-testid="button-contact-cta">
              Get Professional Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
