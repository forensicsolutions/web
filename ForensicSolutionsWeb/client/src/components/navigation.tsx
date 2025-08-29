import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceItems = [
    { href: "/services/private-investigation", label: "Private Investigation" },
    { href: "/services/data-forensics", label: "Data Forensics" },
    { href: "/services/osint-socmint", label: "OSINT/SOCMINT" },
    { href: "/services/cybersecurity", label: "Cybersecurity" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <span className="text-xl font-bold">Forensic Solutions</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-${item.label.toLowerCase()}`}>
                <span className={`nav-link ${location === item.href ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="relative group">
              <span className="nav-link text-foreground hover:text-primary cursor-pointer">Services</span>
              <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card border border-border rounded-lg shadow-lg">
                <div className="py-2">
                  {serviceItems.map((item) => (
                    <Link key={item.href} href={item.href} data-testid={`link-service-${item.label.toLowerCase().replace(/\//g, '-')}`}>
                      <div className="block px-4 py-2 text-sm text-card-foreground hover:bg-secondary hover:text-primary transition-colors">
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.label.toLowerCase()}`}>
                    <span 
                      className={`block px-3 py-2 text-lg ${location === item.href ? 'text-primary' : 'text-foreground'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-border">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">Services</div>
                  {serviceItems.map((item) => (
                    <Link key={item.href} href={item.href} data-testid={`link-mobile-service-${item.label.toLowerCase().replace(/\//g, '-')}`}>
                      <span 
                        className="block px-3 py-2 text-card-foreground hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
