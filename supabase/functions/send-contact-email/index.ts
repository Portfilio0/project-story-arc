import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email:", { name, email });

    // Send email to the portfolio owner (only to verified address during testing)
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["work.usamahafeez@gmail.com"], // Only verified address for testing
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Note: Contact form message from ${email}</em></p>
      `,
    });

    console.log("Portfolio owner email response:", emailResponse);

    if (emailResponse.error) {
      console.error("Failed to send email to portfolio owner:", emailResponse.error);
      throw new Error(`Failed to send notification email: ${emailResponse.error.message}`);
    }

    // Send confirmation email to the sender (only if it's the verified address)
    if (email === "work.usamahafeez@gmail.com") {
      const confirmationResponse = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for your message!",
        html: `
          <h2>Thank you for contacting me, ${name}!</h2>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p>Best regards,<br>Portfolio</p>
        `,
      });

      console.log("Confirmation email response:", confirmationResponse);

      if (confirmationResponse.error) {
        console.error("Failed to send confirmation email:", confirmationResponse.error);
        // Don't throw here - notification email succeeded
      }
    } else {
      console.log("Skipping confirmation email - address not verified for testing");
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);