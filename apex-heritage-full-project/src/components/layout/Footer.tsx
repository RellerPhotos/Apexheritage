import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo-optimized.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="APEX HERITAGE SOLUTIONS" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">APEX HERITAGE</span>
                <span className="text-xs font-semibold text-accent tracking-widest">SOLUTIONS</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Global Security. Unmatched Expertise. Total Protection.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/global-operations" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Global Operations</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#cybersecurity" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services#physical-security" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Physical Security</Link></li>
              <li><Link to="/services#intelligence" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Intelligence</Link></li>
              <li><Link to="/services#consulting" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Consulting</Link></li>
              <li><Link to="/services#crisis-response" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Crisis Response</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>apexheritagesolutions@cyber-wizard.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>202 343 4453</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Global Headquarters<br/>Washington, D.C., USA</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2026 APEX HERITAGE SOLUTIONS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/compliance" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
