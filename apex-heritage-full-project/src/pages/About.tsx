import { Shield, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import founderPhoto from "@/assets/founder-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-primary-foreground mb-6">
              About APEX HERITAGE SOLUTIONS
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Enterprise grade security and digital asset protection for businesses, governments, and institutions worldwide
            </p>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                APEX HERITAGE SOLUTIONS delivers enterprise grade security and cybersecurity solutions to governments and corporations worldwide. Founded by experienced national security and cybersecurity professionals, we bring disciplined leadership, operational excellence, and a commitment to ethics and compliance to every engagement.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With over 10,000 trained personnel operating in more than 10 countries, we provide mission critical protection, digital threat response, blockchain security, and digital asset consulting services. Our team combines decades of national security intelligence, cyber defense, and strategic security operations experience to deliver unmatched results.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether protecting critical infrastructure, responding to cyber threats, securing digital assets and blockchain systems, or providing executive protection in high risk environments, APEX HERITAGE SOLUTIONS maintains a zero compromise approach to security. We are licensed, certified, and fully compliant with international security standards.
              </p>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Enterprise grade standards in every operation, every time
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    Ethical conduct and transparency in all client relationships
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Expertise</h3>
                  <p className="text-muted-foreground">
                    Decades of combined national security, cybersecurity, and digital asset experience
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Results</h3>
                  <p className="text-muted-foreground">
                    Mission success through disciplined execution
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Leadership Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Leadership</h2>
            
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-hard">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <img 
                        src={founderPhoto} 
                        alt="Founder & CEO" 
                        className="w-full rounded-lg shadow-hard mb-4"
                      />
                      <div className="text-center">
                        <div className="text-sm text-accent font-semibold mb-1">Cybersecurity Specialist</div>
                        <div className="text-xs text-muted-foreground">Digital Asset Strategist</div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-2">Afolarin David William</h3>
                      <p className="text-accent font-semibold mb-4">Founder & CEO | Former U.S. National Security Officer | Digital Asset Strategy Advisor</p>
                      
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Afolarin David William is a cybersecurity specialist and digital asset strategist with a decade of experience in U.S. national security, where he served as a High Level Intelligence Analyst focused on cyber intelligence and infrastructure protection.
                        </p>
                        
                        <p className="text-muted-foreground">
                          He is the founder of APEX HERITAGE SOLUTIONS, a global security and cybersecurity firm operating across 10 countries with over 10,000 personnel, providing military grade protection for businesses, governments, and institutions.
                        </p>
                        
                        <p className="text-muted-foreground">
                          A recognized leader in the digital asset space, Afolarin advises on secure blockchain adoption, risk management, and regulatory compliance, helping clients safeguard their digital assets while unlocking long term value.
                        </p>
                        
                        <p className="text-muted-foreground">
                          Under his leadership, APEX HERITAGE SOLUTIONS' Digital Asset Division delivers end to end cybersecurity and risk solutions including secure wallets and exchange level protection, blockchain forensics, and compliance auditing, bridging traditional finance and the digital currency frontier with integrity, discipline, and strategic vision.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Certifications & Compliance */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Certifications & Compliance</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-background rounded-lg p-6 shadow-hard mb-3 h-32 flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent">ISO</span>
                  </div>
                  <p className="text-sm font-medium">ISO 27001 Certified</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-background rounded-lg p-6 shadow-hard mb-3 h-32 flex items-center justify-center">
                    <Shield className="h-16 w-16 text-accent" />
                  </div>
                  <p className="text-sm font-medium">Licensed Security Provider</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-background rounded-lg p-6 shadow-hard mb-3 h-32 flex items-center justify-center">
                    <Award className="h-16 w-16 text-accent" />
                  </div>
                  <p className="text-sm font-medium">GDPR Compliant</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-background rounded-lg p-6 shadow-hard mb-3 h-32 flex items-center justify-center">
                    <Users className="h-16 w-16 text-accent" />
                  </div>
                  <p className="text-sm font-medium">Fully Insured</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
