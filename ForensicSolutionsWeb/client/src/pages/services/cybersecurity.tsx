import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, CheckCircle, Lock, AlertTriangle, Search, Users, Network, Database } from "lucide-react";

export default function Cybersecurity() {
  useEffect(() => {
    document.title = "Cybersecurity Services - Forensic Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive cybersecurity solutions including security assessments, incident response, vulnerability testing, and security awareness training.');
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
                <Shield className="text-primary mr-4" />
                Cybersecurity
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity through proactive security measures and expert incident response.
              </p>
              <Link href="/contact">
                <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold" data-testid="button-contact-cybersecurity">
                  Request Security Assessment
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Cybersecurity operations center"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cybersecurity Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your organization from evolving digital threats and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Security Assessments</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive security audits and vulnerability assessments to identify and remediate potential security weaknesses.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Network security audits</li>
                <li>• Vulnerability assessments</li>
                <li>• Penetration testing</li>
                <li>• Compliance evaluations</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <AlertTriangle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
              <p className="text-muted-foreground mb-4">
                Rapid response to security breaches and cyber attacks with immediate containment and recovery procedures.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 24/7 emergency response</li>
                <li>• Breach containment</li>
                <li>• Forensic investigation</li>
                <li>• Recovery planning</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Lock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Security Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Continuous monitoring and threat detection to identify and respond to security incidents in real-time.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 24/7 SOC monitoring</li>
                <li>• Threat intelligence</li>
                <li>• Log analysis</li>
                <li>• Automated alerting</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Network className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Network Security</h3>
              <p className="text-muted-foreground mb-4">
                Design and implementation of secure network architectures with advanced threat protection and access controls.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Firewall configuration</li>
                <li>• Intrusion detection systems</li>
                <li>• VPN implementation</li>
                <li>• Network segmentation</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive data protection strategies including encryption, backup, and access controls to safeguard sensitive information.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Data encryption</li>
                <li>• Backup strategies</li>
                <li>• Access controls</li>
                <li>• Data loss prevention</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Security Training</h3>
              <p className="text-muted-foreground mb-4">
                Employee education and security awareness programs to create a security-conscious organizational culture.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Security awareness training</li>
                <li>• Phishing simulation</li>
                <li>• Policy development</li>
                <li>• Compliance training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Threat Landscape</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding and defending against today's sophisticated cyber threats requires expertise and advanced security measures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-6 text-center">
              <AlertTriangle className="h-10 w-10 text-destructive mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Ransomware</h4>
              <p className="text-sm text-muted-foreground">Malicious software that encrypts data and demands payment for recovery</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Network className="h-10 w-10 text-destructive mx-auto mb-4" />
              <h4 className="font-semibold mb-2">APT Attacks</h4>
              <p className="text-sm text-muted-foreground">Advanced persistent threats targeting sensitive data and systems</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Users className="h-10 w-10 text-destructive mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Social Engineering</h4>
              <p className="text-sm text-muted-foreground">Manipulation techniques to gain unauthorized access or information</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Database className="h-10 w-10 text-destructive mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Data Breaches</h4>
              <p className="text-sm text-muted-foreground">Unauthorized access to sensitive information and customer data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Security Framework</h2>
              <p className="text-muted-foreground mb-8">
                Our cybersecurity approach follows industry best practices and frameworks to provide multi-layered protection for your organization.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">NIST Framework</h4>
                    <p className="text-muted-foreground text-sm">Implementation following NIST Cybersecurity Framework guidelines</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Defense in Depth</h4>
                    <p className="text-muted-foreground text-sm">Multi-layered security approach with redundant protection mechanisms</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Zero Trust Architecture</h4>
                    <p className="text-muted-foreground text-sm">Never trust, always verify approach to network security</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Continuous Monitoring</h4>
                    <p className="text-muted-foreground text-sm">Real-time threat detection and response capabilities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Cybersecurity monitoring dashboard"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance & Standards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ensuring your organization meets regulatory requirements and industry standards for cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-6 text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">HIPAA</h4>
              <p className="text-sm text-muted-foreground">Healthcare information privacy and security compliance</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Lock className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">PCI DSS</h4>
              <p className="text-sm text-muted-foreground">Payment card industry data security standards</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Database className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">SOX</h4>
              <p className="text-sm text-muted-foreground">Sarbanes-Oxley Act compliance for financial reporting</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <Network className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">ISO 27001</h4>
              <p className="text-sm text-muted-foreground">International standard for information security management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Response</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Immediate response to cyber security incidents with expert containment and recovery services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 text-center">
              <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Immediate Response</h3>
              <p className="text-muted-foreground">
                Rapid incident response within hours to contain threats and minimize damage to your systems and data.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Forensic Analysis</h3>
              <p className="text-muted-foreground">
                Detailed forensic investigation to determine the scope, impact, and root cause of security incidents.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Recovery Planning</h3>
              <p className="text-muted-foreground">
                Comprehensive recovery and remediation planning to restore operations and prevent future incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Organization Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our cybersecurity experts for a comprehensive security assessment and protection strategy
          </p>
          <Link href="/contact">
            <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold text-lg" data-testid="button-contact-cybersecurity-cta">
              Request Security Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
