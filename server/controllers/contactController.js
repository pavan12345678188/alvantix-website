import resend from "../config/resend.js";
import { adminTemplate } from "../templates/adminTemplate.js";
import { customerTemplate } from "../templates/customerTemplate.js";

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, company, serviceInterest, message } = req.body;

    // Email to Admin
    const adminResponse = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: process.env.Reply_TO,
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
      return res.status(400).json({
        success: false,
        message: adminResponse.error.message,
      });
    }

    // Auto Reply to Customer
    const customerResponse = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      replyTO:process.env.Reply_TO,
      subject: "Thank you for contacting Alvantix",
      html: customerTemplate(name),
    });

    if (customerResponse.error) {
      console.error(customerResponse.error);
    }

    return res.status(200).json({
      success: true,
      message: "Emails sent successfully!",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
};