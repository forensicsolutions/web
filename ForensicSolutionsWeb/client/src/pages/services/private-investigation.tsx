import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { KeyRound, CheckCircle, Shield, Search, FileText, Building, Eye, Users } from "lucide-react";

export default function PrivateInvestigation() {
  useEffect(() => {
    document.title = "Private Investigation Services - Forensic Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional private investigation services including background checks, asset searches, corporate investigations, and surveillance. Licensed investigators with digital expertise.');
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
                <KeyRound className="text-primary mr-4" />
                Private Investigation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional private investigation services combining traditional investigative methods with cutting-edge digital tools for comprehensive case resolution.
              </p>
              <Link href="/contact">
                <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold" data-testid="button-contact-investigation">
                  Request Consultation
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional investigation equipment"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Investigation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive private investigation solutions tailored to meet your specific needs with complete confidentiality and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Background Investigations</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive background checks for employment, relationships, business partnerships, and legal proceedings.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Criminal history verification</li>
                <li>• Employment and education verification</li>
                <li>• Financial background checks</li>
                <li>• Character references and interviews</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Building className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Asset Investigations</h3>
              <p className="text-muted-foreground mb-4">
                Locate hidden assets, conduct property searches, and perform financial investigations for legal and business purposes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real estate holdings</li>
                <li>• Bank account searches</li>
                <li>• Business ownership investigations</li>
                <li>• Hidden asset recovery</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Surveillance Services</h3>
              <p className="text-muted-foreground mb-4">
                Professional surveillance operations using advanced equipment and techniques while maintaining strict legal compliance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mobile surveillance</li>
                <li>• Static observation</li>
                <li>• Video and photographic evidence</li>
                <li>• Activity documentation</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Corporate Investigations</h3>
              <p className="text-muted-foreground mb-4">
                Protect your business with corporate security investigations including employee misconduct and intellectual property theft.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Employee misconduct investigations</li>
                <li>• Intellectual property theft</li>
                <li>• Corporate espionage</li>
                <li>• Due diligence investigations</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Insurance Investigations</h3>
              <p className="text-muted-foreground mb-4">
                Specialized insurance fraud investigations to protect against fraudulent claims and verify legitimate cases.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Workers' compensation fraud</li>
                <li>• Disability claim verification</li>
                <li>• Property damage investigations</li>
                <li>• Personal injury claims</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Family Investigations</h3>
              <p className="text-muted-foreground mb-4">
                Sensitive family matters handled with discretion including child custody, infidelity, and missing persons cases.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Child custody investigations</li>
                <li>• Infidelity investigations</li>
                <li>• Missing persons</li>
                <li>• Elder abuse investigations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Investigation Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring thorough investigation and reliable results for every case
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">1</div>
              <h4 className="text-lg font-semibold mb-3">Initial Consultation</h4>
              <p className="text-muted-foreground text-sm">Confidential discussion of your case requirements, objectives, and timeline</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">2</div>
              <h4 className="text-lg font-semibold mb-3">Case Planning</h4>
              <p className="text-muted-foreground text-sm">Development of investigation strategy and methodology tailored to your specific needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">3</div>
              <h4 className="text-lg font-semibold mb-3">Investigation Execution</h4>
              <p className="text-muted-foreground text-sm">Professional investigation using both traditional and digital investigative techniques</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">4</div>
              <h4 className="text-lg font-semibold mb-3">Detailed Reporting</h4>
              <p className="text-muted-foreground text-sm">Comprehensive report with findings, evidence, and recommendations for next steps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Investigation Services?</h2>
              <p className="text-muted-foreground mb-8">
                Our team of licensed private investigators brings decades of combined experience from law enforcement, corporate security, and legal backgrounds.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Licensed & Insured</h4>
                    <p className="text-muted-foreground text-sm">Fully licensed private investigation agency with comprehensive insurance coverage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Digital Expertise</h4>
                    <p className="text-muted-foreground text-sm">Combining traditional investigation with advanced digital forensics capabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Legal Compliance</h4>
                    <p className="text-muted-foreground text-sm">All investigations conducted within legal boundaries with admissible evidence collection</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Confidential Service</h4>
                    <p className="text-muted-foreground text-sm">Strict confidentiality protocols protecting client privacy and case information</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional investigation tools and equipment"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Investigation Services?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a confidential consultation about your investigation needs
          </p>
          <Link href="/contact">
            <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold text-lg" data-testid="button-contact-investigation-cta">
              Get Confidential Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
