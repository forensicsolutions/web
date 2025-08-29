import { Button } from "@/components/ui/button";
import { Phone, Info } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="hero-overlay absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in visible">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="text-primary">Digital Investigation</span> & Cybersecurity
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert forensic analysis, OSINT investigations, and cybersecurity solutions for legal professionals, corporations, and individuals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="cta-button px-8 py-4 text-primary-foreground font-semibold" data-testid="button-get-consultation">
                <Phone className="mr-2 h-4 w-4" />
                Get Consultation
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline" 
                className="px-8 py-4 border-border text-foreground hover:bg-secondary transition-colors"
                data-testid="button-learn-more"
              >
                <Info className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
