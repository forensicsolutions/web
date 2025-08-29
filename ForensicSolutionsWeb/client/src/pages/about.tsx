import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, CheckCircle, Tag, Gavel, Lock, Clock, Shield, Users, Target, Zap } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Forensic Solutions - Expert Digital Investigation Team";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Forensic Solutions\' expert team of certified digital forensics professionals, private investigators, and cybersecurity specialists with over 15 years of experience.');
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
                <Award className="text-primary mr-4" />
                About Forensic Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Leading experts in digital investigation and cybersecurity with over 15 years of experience serving legal professionals, corporations, and government agencies worldwide.
              </p>
              <Link href="/contact">
                <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold" data-testid="button-contact-about">
                  Get Professional Consultation
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional digital forensics equipment and workstation"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Excellence in Digital Investigation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Forensic Solutions has been at the forefront of digital investigation and cybersecurity services, combining cutting-edge technology with proven investigative methodologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Advanced cybersecurity monitoring center"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To provide unparalleled digital investigation and cybersecurity services that protect our clients' interests through meticulous analysis, cutting-edge technology, and unwavering commitment to truth and justice.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-cases-solved">500+</div>
                  <div className="text-sm text-muted-foreground">Cases Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-years-experience">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-emergency-response">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-confidential">100%</div>
                  <div className="text-sm text-muted-foreground">Confidential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Standards & Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team maintains the highest professional standards with industry certifications and continuous training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-8 text-center">
              <Tag className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">Certified Professionals</h3>
              <p className="text-muted-foreground text-sm">
                Our team holds industry-leading certifications including CCE, CISSP, and other specialized credentials.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center">
              <Gavel className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">Court-Qualified Experts</h3>
              <p className="text-muted-foreground text-sm">
                Expert witnesses qualified to testify in federal and state courts with extensive litigation experience.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center">
              <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">Security Clearances</h3>
              <p className="text-muted-foreground text-sm">
                Team members maintain government security clearances for sensitive and classified investigations.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">Licensed & Insured</h3>
              <p className="text-muted-foreground text-sm">
                Fully licensed private investigation agency with comprehensive professional liability insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across multiple domains of digital investigation and cybersecurity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Digital Forensics</h4>
                    <p className="text-muted-foreground">Expert analysis of computers, mobile devices, and digital storage media for legal proceedings</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Private Investigation</h4>
                    <p className="text-muted-foreground">Licensed investigators specializing in corporate, insurance, and personal investigations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Cybersecurity</h4>
                    <p className="text-muted-foreground">Comprehensive security assessments, incident response, and vulnerability management</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">OSINT/SOCMINT</h4>
                    <p className="text-muted-foreground">Open source and social media intelligence gathering using advanced analytical tools</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional investigation and analysis workstation"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Accuracy & Precision</h3>
              <p className="text-muted-foreground">
                Every investigation is conducted with meticulous attention to detail and scientific rigor to ensure reliable, court-admissible results.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center">
              <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Confidentiality</h3>
              <p className="text-muted-foreground">
                Absolute discretion and confidentiality in all matters, with strict protocols to protect client information and case details.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Rapid Response</h3>
              <p className="text-muted-foreground">
                Quick mobilization for time-sensitive investigations with 24/7 emergency response capabilities when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Infrastructure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced Technology Infrastructure</h2>
              <p className="text-muted-foreground mb-8">
                Our state-of-the-art forensic laboratory and secure facilities provide the foundation for accurate, reliable digital investigations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Forensic Laboratory</h4>
                    <p className="text-muted-foreground text-sm">Climate-controlled, secure facility with specialized forensic equipment and workstations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Enterprise Security</h4>
                    <p className="text-muted-foreground text-sm">Multi-layered security infrastructure protecting client data and evidence integrity</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Certified Tools</h4>
                    <p className="text-muted-foreground text-sm">Industry-standard forensic software and hardware validated for legal proceedings</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Chain of Custody</h4>
                    <p className="text-muted-foreground text-sm">Strict evidence handling procedures ensuring legal admissibility</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Secure digital forensics laboratory with advanced equipment"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Forensic Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our combination of expertise, technology, and commitment to excellence sets us apart in the digital investigation field
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Seasoned professionals with backgrounds in law enforcement, corporate security, and digital forensics bringing decades of combined experience.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
              <p className="text-muted-foreground">
                Over 500 successfully completed cases with a reputation for thorough, accurate investigations that stand up in court.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Comprehensive Services</h3>
              <p className="text-muted-foreground">
                Full-spectrum capabilities from initial investigation through expert witness testimony, providing complete support for your case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with the Experts?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact Forensic Solutions today for professional digital investigation and cybersecurity services
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
