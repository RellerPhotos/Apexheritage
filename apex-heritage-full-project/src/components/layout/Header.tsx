import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo-optimized.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Global Operations", path: "/global-operations" },
    { name: "Contact", path: "/contact" },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-background/50 backdrop-blur-sm transition-smooth group-hover:scale-105">
              <img src={logo} alt="APEX HERITAGE SOLUTIONS" className="h-full w-full object-contain opacity-90 group-hover:opacity-100 transition-smooth" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">APEX HERITAGE</span>
              <span className="text-xs font-semibold text-accent tracking-widest">SOLUTIONS</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request Assessment
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-colors hover:text-accent hover:bg-muted ${
                  isActive(link.path) ? "text-accent bg-muted" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="hero" size="lg" className="w-full">
                  Request Assessment
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
