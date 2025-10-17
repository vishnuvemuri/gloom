const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: "info@gloomdev.in",
      pass: "cAEz8PiuUeim", // App password
    },
  });
};

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, company, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid email format' 
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: "info@gloomdev.in",
      to: "info@gloomdev.in",
      subject: `Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #374151;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; font-size: 12px; color: #64748b;">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} IST</p>
            <p><strong>Source:</strong> GloomDev Website Contact Form</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Contact Information:
        Name: ${name}
        Email: ${email}
        ${company ? `Company: ${company}` : ''}
        ${phone ? `Phone: ${phone}` : ''}
        ${service ? `Service Interest: ${service}` : ''}
        
        Message:
        ${message}
        
        Submitted: ${new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })} IST
        Source: GloomDev Website Contact Form
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Send error response
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
