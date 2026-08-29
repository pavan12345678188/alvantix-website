import resend from "../config/resend.js";
import { adminTemplate } from "../templates/adminTemplate.js";

export const sendContactEmail = async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      serviceInterest,
      message,
    } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    // Alvantix email configuration
    const FROM_EMAIL = "contact@alvantix.in";
    const TO_EMAIL = "contact.alvantix@gmail.com";

    console.log("EMAIL CONFIG:", {
      from: FROM_EMAIL,
      to: TO_EMAIL,
    });

    // Send inquiry to Alvantix
    const adminResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `🚀 New Contact Inquiry - ${name}`,
      html: adminTemplate({
        name,
        email,
        company,
        serviceInterest,
        message,
      }),
    });

    if (adminResponse.error) {
      console.error("Resend error:", adminResponse.error);

      return res.status(400).json({
        success: false,
        message: adminResponse.error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Inquiry sent successfully!",
    });

  } catch (error) {
    console.error("Contact error:", error);
    
    return res.status(500).json({
      success: false,
      message: "Failed to send inquiry.",
    });
  }
};