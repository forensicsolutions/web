import { Button } from "@/components/ui/button";
import { Search, HardDrive, Globe, Shield } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "private-investigation",
    icon: Search,
    title: "Private Investigation",
    description: "Comprehensive private investigation services using cutting-edge digital tools and traditional investigative techniques.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    features: [
      "Background checks and due diligence",
      "Asset searches and recovery", 
      "Insurance fraud investigation",
      "Corporate investigations"
    ],
    href: "/services/private-investigation"
  },
  {
    id: "data-forensics",
    icon: HardDrive,
    title: "Data Forensics",
    description: "Expert digital forensics and data recovery services for legal proceedings and corporate security incidents.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    features: [
      "Computer and mobile device analysis",
      "Data recovery and reconstruction",
      "Email and communication forensics",
      "Expert witness testimony"
    ],
    href: "/services/data-forensics"
  },
  {
    id: "osint-socmint",
    icon: Globe,
    title: "OSINT/SOCMINT",
    description: "Open source and social media intelligence gathering using advanced analytical tools and methodologies.",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    features: [
      "Social media investigation",
      "Online reputation analysis",
      "Threat intelligence gathering",
      "Digital footprint analysis"
    ],
    href: "/services/osint-socmint"
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    features: [
      "Security assessments and audits",
      "Incident response and remediation",
      "Vulnerability testing",
      "Security awareness training"
    ],
    href: "/services/cybersecurity"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital investigation and cybersecurity solutions backed by years of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card bg-card rounded-xl p-8 fade-in visible">
                <div className="text-center">
                  <img 
                    src={service.image}
                    alt={`${service.title} equipment`}
                    className="rounded-lg w-full h-48 object-cover mb-6"
                  />
                  <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                    {service.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button 
                      className="w-full py-3 bg-secondary hover:bg-primary transition-colors font-medium"
                      data-testid={`button-learn-more-${service.id}`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
