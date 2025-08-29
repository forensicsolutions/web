import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { HardDrive, CheckCircle, Smartphone, Monitor, Database, Network, FileSearch, Shield } from "lucide-react";

export default function DataForensics() {
  useEffect(() => {
    document.title = "Digital Forensics & Data Recovery - Forensic Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert digital forensics and data recovery services for legal proceedings. Computer analysis, mobile device forensics, and expert witness testimony.');
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
                <HardDrive className="text-primary mr-4" />
                Digital Forensics
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                State-of-the-art digital forensics capabilities to recover, analyze, and preserve electronic evidence for legal proceedings and internal investigations.
              </p>
              <Link href="/contact">
                <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold" data-testid="button-contact-forensics">
                  Request Analysis
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Digital forensics laboratory equipment"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Forensics Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital evidence analysis using advanced forensic tools and methodologies to support legal proceedings and corporate investigations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8">
              <Monitor className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Computer Forensics</h3>
              <p className="text-muted-foreground mb-4">
                Complete analysis of desktop and laptop computers including hard drive imaging, file recovery, and system examination.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Hard drive imaging and analysis</li>
                <li>• Deleted file recovery</li>
                <li>• System log examination</li>
                <li>• Malware detection and analysis</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Smartphone className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Mobile Device Forensics</h3>
              <p className="text-muted-foreground mb-4">
                Expert analysis of iOS and Android devices including data extraction, communication recovery, and location analysis.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• iOS and Android analysis</li>
                <li>• Text message recovery</li>
                <li>• Call log examination</li>
                <li>• App data extraction</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Network className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Network Forensics</h3>
              <p className="text-muted-foreground mb-4">
                Analysis of network traffic, intrusion detection, and breach investigation to identify security incidents.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Network traffic analysis</li>
                <li>• Intrusion detection</li>
                <li>• Log file examination</li>
                <li>• Breach timeline reconstruction</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Data Recovery</h3>
              <p className="text-muted-foreground mb-4">
                Advanced data recovery techniques for damaged, corrupted, or intentionally destroyed digital storage devices.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Damaged drive recovery</li>
                <li>• RAID array reconstruction</li>
                <li>• Database recovery</li>
                <li>• Cloud data acquisition</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <FileSearch className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Email Forensics</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive email analysis including header examination, metadata extraction, and communication timeline reconstruction.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Email header analysis</li>
                <li>• Metadata extraction</li>
                <li>• Deleted email recovery</li>
                <li>• Communication patterns</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Expert Witness</h3>
              <p className="text-muted-foreground mb-4">
                Court-qualified expert witness testimony providing clear explanation of digital evidence and forensic findings.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Expert testimony</li>
                <li>• Evidence presentation</li>
                <li>• Technical consultation</li>
                <li>• Report preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Forensic Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Following industry-standard procedures to ensure evidence integrity and legal admissibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">1</div>
              <h4 className="text-lg font-semibold mb-3">Acquisition</h4>
              <p className="text-muted-foreground text-sm">Secure acquisition of digital evidence using forensically sound methods and tools</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">2</div>
              <h4 className="text-lg font-semibold mb-3">Preservation</h4>
              <p className="text-muted-foreground text-sm">Maintaining chain of custody and evidence integrity throughout the analysis process</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">3</div>
              <h4 className="text-lg font-semibold mb-3">Analysis</h4>
              <p className="text-muted-foreground text-sm">Comprehensive examination using advanced forensic tools and techniques</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">4</div>
              <h4 className="text-lg font-semibold mb-3">Reporting</h4>
              <p className="text-muted-foreground text-sm">Detailed forensic report with findings, methodology, and expert conclusions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced Forensic Technology</h2>
              <p className="text-muted-foreground mb-8">
                Our forensic laboratory is equipped with industry-leading tools and technology to handle the most complex digital investigations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Certified Tools</h4>
                    <p className="text-muted-foreground text-sm">Industry-standard forensic software validated for legal proceedings</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Secure Environment</h4>
                    <p className="text-muted-foreground text-sm">Physically secure laboratory with controlled access and environmental monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Chain of Custody</h4>
                    <p className="text-muted-foreground text-sm">Strict evidence handling procedures ensuring legal admissibility</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Expert Certification</h4>
                    <p className="text-muted-foreground text-sm">Certified Computer Forensics Examiner (CCE) and other professional credentials</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Advanced digital forensics laboratory"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legal Support */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal Support & Expert Testimony</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Court-qualified experts providing comprehensive support for legal proceedings with clear, understandable testimony
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 text-center">
              <FileSearch className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Detailed Reports</h3>
              <p className="text-muted-foreground">
                Comprehensive forensic reports with technical findings presented in clear, understandable language for legal teams and juries.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Expert Testimony</h3>
              <p className="text-muted-foreground">
                Court-qualified expert witnesses providing clear explanation of digital evidence and forensic methodologies to legal proceedings.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Legal Compliance</h3>
              <p className="text-muted-foreground">
                All procedures follow legal standards ensuring evidence admissibility and compliance with court requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Digital Forensics Services?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our forensic experts today for professional digital evidence analysis and recovery services
          </p>
          <Link href="/contact">
            <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold text-lg" data-testid="button-contact-forensics-cta">
              Request Forensic Analysis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
