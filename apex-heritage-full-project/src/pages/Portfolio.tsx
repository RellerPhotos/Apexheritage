import { Shield, Building, Globe, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      category: "International Security",
      title: "Critical Infrastructure Protection",
      client: "Confidential - Energy Sector",
      challenge: "Multinational energy facility required comprehensive physical and cyber security for critical infrastructure in a politically unstable region.",
      solution: "Deployed integrated security team of 200+ personnel with 24/7 monitoring, cyber defense systems, and tactical response capabilities.",
      results: [
        "Zero security breaches over 24 month operation",
        "Successfully defended against 15+ cyber attack attempts",
        "Maintained 99.9% operational uptime",
        "Full regulatory compliance achieved"
      ],
      tags: ["Physical Security", "Cybersecurity", "Critical Infrastructure"]
    },
    {
      id: 2,
      category: "Cybersecurity",
      title: "Enterprise Threat Neutralization",
      client: "Confidential - Fortune 500 Financial Institution",
      challenge: "Advanced persistent threat (APT) targeting financial systems with sophisticated multi-vector attack.",
      solution: "Rapid deployment of cyber incident response team, forensic analysis, and implementation of advanced threat detection systems.",
      results: [
        "Threat identified and neutralized within 48 hours",
        "Prevented estimated $50M+ in potential losses",
        "Zero data exfiltration",
        "Enhanced security posture preventing future attacks"
      ],
      tags: ["Cybersecurity", "Incident Response", "Financial Services"]
    },
    {
      id: 3,
      category: "Crisis Response",
      title: "Emergency Extraction Operation",
      client: "Confidential - International Corporation",
      challenge: "Civil unrest outbreak requiring immediate extraction of 120+ personnel from high risk urban environment.",
      solution: "24 hour emergency deployment of extraction team with coordinated air and ground transportation, security escorts, and medical support.",
      results: [
        "100% successful extraction of all personnel",
        "Zero casualties or injuries",
        "Completed within 36 hour window",
        "Maintained operational continuity"
      ],
      tags: ["Crisis Response", "Extraction", "Emergency Services"]
    },
    {
      id: 4,
      category: "Intelligence",
      title: "Strategic Due Diligence Investigation",
      client: "Confidential - Private Equity Firm",
      challenge: "High-value acquisition target required comprehensive background investigation and risk assessment across multiple jurisdictions.",
      solution: "Multi week intelligence operation utilizing OSINT, human intelligence, and financial analysis across 8 countries.",
      results: [
        "Identified critical undisclosed liabilities",
        "Prevented $200M+ problematic acquisition",
        "Comprehensive risk assessment delivered",
        "Client avoided regulatory violations"
      ],
      tags: ["Intelligence", "Due Diligence", "Risk Assessment"]
    },
    {
      id: 5,
      category: "Physical Security",
      title: "High Profile Event Security",
      client: "Confidential - International Summit",
      challenge: "Multi-day international conference with 5,000+ attendees including heads of state and corporate executives requiring comprehensive security.",
      solution: "Coordinated security operation with 300+ personnel, advanced screening systems, threat intelligence, and rapid response capabilities.",
      results: [
        "Zero security incidents over 4 day event",
        "Seamless coordination with local authorities",
        "5,000+ attendees securely managed",
        "Enhanced client reputation for future events"
      ],
      tags: ["Event Security", "Executive Protection", "Operations"]
    },
    {
      id: 6,
      category: "Consulting",
      title: "Enterprise Security Transformation",
      client: "Confidential - Global Technology Company",
      challenge: "Outdated security program failing to meet modern threat landscape and regulatory requirements.",
      solution: "Comprehensive 6 month security program redesign including policy development, technology implementation, and personnel training.",
      results: [
        "Complete security program overhaul",
        "Full regulatory compliance achieved",
        "50% reduction in security incidents",
        "Enhanced employee security awareness"
      ],
      tags: ["Consulting", "Security Strategy", "Compliance"]
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
              Case Studies & Portfolio
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Proven results protecting governments, corporations, and critical infrastructure worldwide
            </p>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Successful Operations</div>
              </div>
              <div className="text-center">
                <Building className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              {caseStudies.map((study) => (
                <Card key={study.id} className="shadow-hard hover:shadow-glow transition-smooth">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-2">{study.category}</Badge>
                      <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                      <p className="text-sm text-muted-foreground italic">{study.client}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-accent mb-2">Challenge</h4>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-accent mb-2">Solution</h4>
                        <p className="text-muted-foreground text-sm">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-accent mb-2">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Confidentiality Note */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Client Confidentiality</h3>
              <p className="text-muted-foreground">
                Due to the sensitive nature of our work, many case studies are presented with anonymized details. 
                Additional references and detailed case studies are available upon request with appropriate NDA in place. 
                We maintain the highest standards of client confidentiality and operational security.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
