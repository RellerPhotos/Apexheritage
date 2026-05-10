import { Link } from "react-router-dom";
import { Shield, Globe, Users, Award, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroImage from "@/assets/hero-security.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="APEX HERITAGE SOLUTIONS Security Operations"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero !opacity-90" style={{ opacity: 0.9 }} />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-primary-foreground mb-6 max-w-4xl mx-auto">
              Global Security. Unmatched Expertise. Total Protection.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Delivering enterprise grade security, cybersecurity, and digital asset protection to governments and corporations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="min-w-[200px]">
                  Request Assessment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="lg" className="min-w-[200px]">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">10,000+</div>
                <div className="text-lg text-muted-foreground">Trained Personnel</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">10+</div>
                <div className="text-lg text-muted-foreground">Countries Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">9+</div>
                <div className="text-lg text-muted-foreground">Years Registered</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Core Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mission critical security solutions backed by national security expertise, blockchain security, and cutting edge technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-hard hover:shadow-glow transition-smooth">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Cybersecurity & Digital Assets</h3>
                  <p className="text-muted-foreground mb-4">
                    Advanced threat detection, blockchain security, secure wallets, and comprehensive digital asset protection for enterprises.
                  </p>
                  <Link to="/services#cybersecurity" className="text-accent font-medium flex items-center gap-2">
                    Learn more <ChevronRight size={16} />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="shadow-hard hover:shadow-glow transition-smooth">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Physical Security</h3>
                  <p className="text-muted-foreground mb-4">
                    Executive protection, facility security, and tactical response teams for high risk environments.
                  </p>
                  <Link to="/services#physical-security" className="text-accent font-medium flex items-center gap-2">
                    Learn more <ChevronRight size={16} />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="shadow-hard hover:shadow-glow transition-smooth">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Intelligence</h3>
                  <p className="text-muted-foreground mb-4">
                    Strategic intelligence gathering, threat analysis, and risk assessment for informed decisions.
                  </p>
                  <Link to="/services#intelligence" className="text-accent font-medium flex items-center gap-2">
                    Learn more <ChevronRight size={16} />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="shadow-hard hover:shadow-glow transition-smooth">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Crisis Response</h3>
                  <p className="text-muted-foreground mb-4">
                    24/7 rapid deployment teams for emergency situations and critical incident management.
                  </p>
                  <Link to="/services#crisis-response" className="text-accent font-medium flex items-center gap-2">
                    Learn more <ChevronRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Case Studies Preview */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Proven Results</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Delivering mission critical security solutions to governments and enterprises worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">INTERNATIONAL SECURITY</div>
                  <h3 className="text-xl font-bold mb-3">Critical Infrastructure Protection</h3>
                  <p className="text-muted-foreground mb-4">
                    Deployed comprehensive security framework for multinational energy facility. Zero security breaches over 24 month operation.
                  </p>
                  <Link to="/portfolio" className="text-accent font-medium flex items-center gap-2">
                    View case study <ChevronRight size={16} />
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">CYBERSECURITY</div>
                  <h3 className="text-xl font-bold mb-3">Enterprise Threat Neutralization</h3>
                  <p className="text-muted-foreground mb-4">
                    Identified and neutralized advanced persistent threat targeting Fortune 500 financial institution. Prevented $50M+ in losses.
                  </p>
                  <Link to="/portfolio" className="text-accent font-medium flex items-center gap-2">
                    View case study <ChevronRight size={16} />
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">CRISIS RESPONSE</div>
                  <h3 className="text-xl font-bold mb-3">Emergency Extraction Operation</h3>
                  <p className="text-muted-foreground mb-4">
                    Successfully extracted 120+ personnel from high-risk region during civil unrest. 100% safety record maintained.
                  </p>
                  <Link to="/portfolio" className="text-accent font-medium flex items-center gap-2">
                    View case study <ChevronRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/portfolio">
                <Button variant="default" size="lg">
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Trust Signals */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Choose APEX HERITAGE</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">National Security Expertise</h4>
                  <p className="text-muted-foreground">Leadership with 10+ years U.S. national security and cyber intelligence experience</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Global Reach</h4>
                  <p className="text-muted-foreground">10,000+ personnel across 10+ countries</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">24/7 Availability</h4>
                  <p className="text-muted-foreground">Round the clock operations and rapid response</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Full Compliance</h4>
                  <p className="text-muted-foreground">ISO certified, licensed, and fully insured</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Proven Track Record</h4>
                  <p className="text-muted-foreground">10+ years protecting critical assets</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Confidentiality Guaranteed</h4>
                  <p className="text-muted-foreground">NDA and secure channels available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-4">Ready to Secure Your Assets?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our security experts for a comprehensive assessment and customized protection plan.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="min-w-[250px]">
                Request Free Assessment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
