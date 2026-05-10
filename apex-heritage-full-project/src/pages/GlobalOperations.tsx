import { MapPin, Users, Shield, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const GlobalOperations = () => {
  const regions = [
    {
      name: "North America",
      countries: ["United States", "Canada"],
      personnel: "3,500+",
      headquarters: "Washington, D.C., USA"
    },
    {
      name: "Europe",
      countries: ["United Kingdom", "Germany", "France"],
      personnel: "2,200+",
      headquarters: "London, UK"
    },
    {
      name: "Middle East",
      countries: ["United Arab Emirates", "Saudi Arabia"],
      personnel: "2,000+",
      headquarters: "Dubai, UAE"
    },
    {
      name: "Asia Pacific",
      countries: ["Singapore", "Japan"],
      personnel: "1,800+",
      headquarters: "Singapore"
    },
    {
      name: "Africa",
      countries: ["South Africa"],
      personnel: "500+",
      headquarters: "Johannesburg, SA"
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
              Global Operations
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              10,000+ personnel across 10+ countries delivering 24/7 security solutions worldwide
            </p>
          </div>
        </section>
        
        {/* Global Stats */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Globe className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Personnel</div>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Operations</div>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Regional HQs</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* World Map Visualization */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Our Global Footprint</h2>
            
            {/* Interactive Map Placeholder */}
            <div className="max-w-6xl mx-auto mb-12">
              <Card className="shadow-hard">
                <CardContent className="p-8">
                  <div className="bg-muted rounded-lg flex items-center justify-center" style={{ minHeight: '500px' }}>
                    <div className="text-center">
                      <Globe className="h-24 w-24 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Global Operations Map</h3>
                      <p className="text-muted-foreground max-w-md">
                        Interactive map visualization showing our presence across 10+ countries with real-time operational status
                      </p>
                      <p className="text-sm text-accent mt-4">
                        Full interactive map available in production deployment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Regional Operations */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Regional Operations</h2>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region, idx) => (
                <Card key={idx} className="shadow-hard hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <MapPin className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-3">{region.name}</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Countries</div>
                        <div className="text-sm font-medium">
                          {region.countries.join(", ")}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Personnel</div>
                        <div className="text-2xl font-bold text-accent">{region.personnel}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Regional HQ</div>
                        <div className="text-sm font-medium">{region.headquarters}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center">Global Capabilities</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Rapid Deployment</h3>
                    <p className="text-muted-foreground">
                      Global response teams can be deployed to any location within 24 to 48 hours. 
                      Pre positioned assets and local partnerships enable immediate crisis response.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">24/7 Operations Centers</h3>
                    <p className="text-muted-foreground">
                      Five regional operations centers providing round the clock monitoring, 
                      coordination, and support for all global operations and client engagements.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      In-country personnel with deep local knowledge, language capabilities, 
                      and established relationships with regional authorities and stakeholders.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Integrated Technology</h3>
                    <p className="text-muted-foreground">
                      Unified technology platform connecting all regional operations with 
                      real time communication, threat intelligence sharing, and resource coordination.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Compliance */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Licensed & Compliant</h3>
              <p className="text-muted-foreground">
                All operations are fully licensed and compliant with local regulations and international 
                security standards. We maintain comprehensive insurance coverage and adhere to the highest 
                ethical and professional standards in every jurisdiction where we operate.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GlobalOperations;
