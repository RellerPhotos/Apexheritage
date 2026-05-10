import { Shield, Users, Brain, AlertTriangle, FileSearch, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Services = () => {
  const services = [
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity",
      tagline: "Advanced Digital Threat Protection",
      description: "Protect your digital assets with enterprise grade cybersecurity solutions. Our team of experts provides comprehensive threat detection, incident response, and vulnerability management.",
      features: [
        "24/7 Security Operations Center (SOC)",
        "Advanced Threat Detection & Response",
        "Penetration Testing & Vulnerability Assessment",
        "Security Incident & Event Management (SIEM)",
        "Digital Forensics & Investigation",
        "Compliance & Risk Management"
      ]
    },
    {
      id: "physical-security",
      icon: Users,
      title: "Physical Security",
      tagline: "Comprehensive Personnel & Asset Protection",
      description: "Deploy highly trained security professionals for executive protection, facility security, and tactical response in high risk environments.",
      features: [
        "Executive & VIP Protection",
        "Facility Security & Access Control",
        "Event Security Management",
        "Tactical Response Teams",
        "Security Risk Assessments",
        "Armed & Unarmed Personnel"
      ]
    },
    {
      id: "intelligence",
      icon: Brain,
      title: "Intelligence Services",
      tagline: "Strategic Intelligence & Analysis",
      description: "Leverage our military intelligence background for comprehensive threat analysis, strategic planning, and informed decision-making.",
      features: [
        "Open Source Intelligence (OSINT)",
        "Threat Intelligence Analysis",
        "Competitive Intelligence",
        "Due Diligence Investigations",
        "Geopolitical Risk Assessment",
        "Strategic Planning Support"
      ]
    },
    {
      id: "crisis-response",
      icon: AlertTriangle,
      title: "Crisis Response",
      tagline: "Rapid Emergency & Incident Management",
      description: "24/7 rapid deployment teams ready to respond to critical incidents, emergencies, and crisis situations worldwide.",
      features: [
        "Emergency Response Teams",
        "Crisis Management Planning",
        "Evacuation & Extraction Services",
        "Incident Command Support",
        "Business Continuity Planning",
        "Post-Incident Analysis"
      ]
    },
    {
      id: "consulting",
      icon: FileSearch,
      title: "Security Consulting",
      tagline: "Expert Security Strategy & Planning",
      description: "Comprehensive security assessments and strategic planning to enhance your organization's security posture and resilience.",
      features: [
        "Security Program Development",
        "Policy & Procedure Design",
        "Regulatory Compliance Consulting",
        "Risk Assessment & Mitigation",
        "Security Training Programs",
        "Third-Party Security Audits"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-primary-foreground mb-6">
              Security Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Comprehensive security solutions backed by national security expertise and cutting edge technology
            </p>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id} 
                    id={service.id}
                    className={`scroll-mt-24 ${index % 2 === 0 ? '' : 'bg-muted -mx-4 px-4 py-12 md:-mx-8 md:px-8'}`}
                  >
                    <div className="max-w-5xl mx-auto">
                      <Card className="shadow-hard">
                        <CardContent className="p-8">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1">
                              <Icon className="h-16 w-16 text-accent mb-4" />
                              <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                              <p className="text-accent font-semibold mb-4">{service.tagline}</p>
                              <p className="text-muted-foreground mb-6">
                                {service.description}
                              </p>
                              <Link to="/contact">
                                <Button variant="default">
                                  Request Quote
                                </Button>
                              </Link>
                            </div>
                            
                            <div className="lg:col-span-2">
                              <h3 className="text-xl font-bold mb-4">Key Capabilities</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-start gap-3">
                                    <ChevronRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-4">Need a Custom Security Solution?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific security requirements and receive a tailored proposal.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="min-w-[250px]">
                Contact Security Experts
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
