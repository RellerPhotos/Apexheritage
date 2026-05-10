import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  inquiryType?: string;
  message: string;
}

// Server-side validation using zod-like validation logic
function validateContactForm(data: unknown): { valid: boolean; errors: string[]; sanitized?: ContactFormRequest } {
  const errors: string[] = [];
  
  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid request body'] };
  }
  
  const body = data as Record<string, unknown>;
  
  // Required field validation
  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  
  // Optional fields with sanitization
  const company = typeof body.company === 'string' ? body.company.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const country = typeof body.country === 'string' ? body.country.trim() : '';
  const inquiryType = typeof body.inquiryType === 'string' ? body.inquiryType.trim() : '';
  
  // Required field checks
  if (!fullName) {
    errors.push('Full name is required');
  } else if (fullName.length > 100) {
    errors.push('Full name must be less than 100 characters');
  }
  
  if (!email) {
    errors.push('Email is required');
  } else if (email.length > 255) {
    errors.push('Email must be less than 255 characters');
  } else {
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }
  }
  
  if (!message) {
    errors.push('Message is required');
  } else if (message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }
  
  // Optional field length validation
  if (company.length > 100) {
    errors.push('Company must be less than 100 characters');
  }
  
  if (phone.length > 20) {
    errors.push('Phone must be less than 20 characters');
  }
  
  if (country.length > 100) {
    errors.push('Country must be less than 100 characters');
  }
  
  // Inquiry type validation (enum-like)
  const validInquiryTypes = ['partnership', 'contract', 'assessment', 'media', 'other', ''];
  if (inquiryType && !validInquiryTypes.includes(inquiryType)) {
    errors.push('Invalid inquiry type');
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  return {
    valid: true,
    errors: [],
    sanitized: {
      fullName,
      company: company || undefined,
      email,
      phone: phone || undefined,
      country: country || undefined,
      inquiryType: inquiryType || undefined,
      message,
    },
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
  
  try {
    const body = await req.json();
    
    // Server-side validation
    const validation = validateContactForm(body);
    
    if (!validation.valid) {
      console.log("Validation failed:", validation.errors);
      return new Response(
        JSON.stringify({ error: "Validation failed", details: validation.errors }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    
    const data = validation.sanitized!;
    
    // Log the validated submission (in production, this would be stored in a database)
    console.log("Contact form submission received:", {
      fullName: data.fullName,
      company: data.company,
      email: data.email,
      phone: data.phone,
      country: data.country,
      inquiryType: data.inquiryType,
      messageLength: data.message.length,
      timestamp: new Date().toISOString(),
    });
    
    // Success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your inquiry has been received. Our team will respond within 24 hours." 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
    
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
