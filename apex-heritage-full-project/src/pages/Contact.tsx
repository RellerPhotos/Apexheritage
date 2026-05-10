import { useState } from "react";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    inquiryType: "",
    message: ""
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client-side validation (server validates too)
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: formData
      });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Message received",
        description: data?.message || "Thank you for contacting us. Our team will respond within 24 hours."
      });
      
      // Reset form
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        inquiryType: "",
        message: ""
      });
    } catch (error: unknown) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Submission failed",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Secure your organization with enterprise grade protection. Request a consultation with our security experts.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">apexheritagesolutions@cyber-wizard.com</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Secure line</h4>
                  <p className="text-sm text-muted-foreground">202 343 4453</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Headquarters</h4>
                  <p className="text-sm text-muted-foreground">Washington, D.C., USA</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-hard">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Request a Security Assessment</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and our team will contact you within 24 hours to discuss your security needs.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          required
                          maxLength={100}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          maxLength={100}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          maxLength={255}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          maxLength={20}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleChange("country", e.target.value)}
                          maxLength={100}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="inquiryType">Type of Inquiry</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleChange("inquiryType", value)}>
                          <SelectTrigger id="inquiryType">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="assessment">Security Assessment</SelectItem>
                            <SelectItem value="media">Media</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        maxLength={1000}
                        rows={6}
                        placeholder="Please describe your security requirements..."
                      />
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg flex gap-3">
                      <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <strong>Secure Channel:</strong> For sensitive inquiries requiring encryption, 
                        please indicate in your message and we will provide secure communication channels. 
                        NDA available upon request.
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                      Your information will be stored securely and used only for responding to your inquiry.
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-8 text-center text-sm text-muted-foreground">
                <p>
                  <strong>Response Time:</strong> Our team typically responds within 24 hours during business days.
                </p>
                <p className="mt-2">
                  <strong>Emergency Contact:</strong> For urgent security matters, please call 202 343 4453
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
