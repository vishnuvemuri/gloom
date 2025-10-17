const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Test email configuration
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

// Test email sending endpoint
app.post('/api/test-email', async (req, res) => {
  try {
    console.log('Received test email request:', req.body);
    
    const { name, email, message } = req.body;

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

    console.log('Creating transporter...');
    // Create transporter
    const transporter = createTransporter();

    console.log('Verifying transporter...');
    // Verify transporter
    await transporter.verify();

    console.log('Creating email...');
    // Email content
    const mailOptions = {
      from: "info@gloomdev.in",
      to: "info@gloomdev.in",
      subject: `TEST - Contact Form Submission from ${name}`,
      text: `
        TEST EMAIL - Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        This is a test email from localhost.
      `
    };

    console.log('Sending email...');
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    // Send success response
    res.status(200).json({ 
      success: true, 
      message: 'Test email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Send error response
    res.status(500).json({ 
      success: false, 
      error: `Failed to send email: ${error.message}` 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
