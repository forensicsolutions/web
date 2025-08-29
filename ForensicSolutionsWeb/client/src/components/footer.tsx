import { Link } from "wouter";
import { Shield, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <span className="text-xl font-bold">Forensic Solutions</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional investigation and cybersecurity services you can trust. Protecting what matters most through expert digital forensics and security solutions.
            </p>
            <a 
              href="mailto:info@forensicsolutions.org" 
              className="text-primary hover:text-accent transition-colors inline-flex items-center"
              data-testid="link-email-footer"
            >
              <Mail className="h-4 w-4 mr-2" />
              info@forensicsolutions.org
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <div className="space-y-2">
              <Link href="/services/private-investigation" data-testid="link-footer-private-investigation">
                <div className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">
                  Private Investigation
                </div>
              </Link>
              <Link href="/services/data-forensics" data-testid="link-footer-data-forensics">
                <div className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">
                  Digital Forensics
                </div>
              </Link>
              <Link href="/services/osint-socmint" data-testid="link-footer-osint">
                <div className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">
                  OSINT/SOCMINT
                </div>
              </Link>
              <Link href="/services/cybersecurity" data-testid="link-footer-cybersecurity">
                <div className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">
                  Cybersecurity
                </div>
              </Link>
              <div className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">
                Expert Witness
              </div>
              <div className="text-muted-foreground text-sm hover:text-foreground transition-colors cursor-pointer">
                Emergency Response
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Professional Standards</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Licensed & Certified Professionals</p>
              <p>Strict Confidentiality Protocols</p>
              <p>Chain of Custody Compliance</p>
              <p>Court-Qualified Expert Witnesses</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Forensic Solutions. All rights reserved. Professional investigation and cybersecurity services.
          </p>
        </div>
      </div>
    </footer>
  );
}
