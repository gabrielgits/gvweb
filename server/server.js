const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://gabrielvieira.dev'],
  credentials: true
}));
app.use(express.json());

// Rate limiting
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many emails sent from this IP, please try again after 15 minutes.'
  }
});

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail', // or use your preferred email service
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });
};

// Email templates
const createUserConfirmationEmail = (name, language = 'en') => {
  const templates = {
    en: {
      subject: 'Thank you for contacting Gabriel Vieira',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #646cff;">Thank you for your message!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          <p>I appreciate your interest and look forward to connecting with you.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>Gabriel Vieira</strong><br>
          Mobile Developer & Full-Stack Engineer<br>
          <a href="mailto:gabriel.vieira24@outlook.com">gabriel.vieira24@outlook.com</a><br>
          <a href="https://www.linkedin.com/in/gabrielvieira24/">LinkedIn Profile</a></p>
        </div>
      `
    },
    pt: {
      subject: 'Obrigado por entrar em contacto com Gabriel Vieira',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #646cff;">Obrigado pela sua mensagem!</h2>
          <p>Caro(a) ${name},</p>
          <p>Obrigado por entrar em contacto através do meu website de portfólio. Recebi a sua mensagem e entrarei em contacto consigo o mais breve possível.</p>
          <p>Agradeço o seu interesse e aguardo ansiosamente por conectar consigo.</p>
          <br>
          <p>Melhores cumprimentos,</p>
          <p><strong>Gabriel Vieira</strong><br>
          Desenvolvedor Mobile & Engenheiro Full-Stack<br>
          <a href="mailto:gabriel.vieira24@outlook.com">gabriel.vieira24@outlook.com</a><br>
          <a href="https://www.linkedin.com/in/gabrielvieira24/">Perfil LinkedIn</a></p>
        </div>
      `
    }
  };
  
  return templates[language] || templates.en;
};

const createNotificationEmail = (name, email, message) => {
  return {
    subject: `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #646cff;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Message:</h3>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      </div>
    `
  };
};

// API Routes
app.post('/api/contact', emailLimiter, async (req, res) => {
  try {
    const { name, email, message, language = 'en' } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email address'
      });
    }

    const transporter = createTransporter();

    // Send confirmation email to user
    const userEmailTemplate = createUserConfirmationEmail(name, language);
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'noreply@gabrielvieira.dev',
      to: email,
      subject: userEmailTemplate.subject,
      html: userEmailTemplate.html
    });

    // Send notification email to Gabriel
    const notificationTemplate = createNotificationEmail(name, email, message);
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'noreply@gabrielvieira.dev',
      to: 'gabriel.vieira24@outlook.com',
      subject: notificationTemplate.subject,
      html: notificationTemplate.html
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      error: 'Failed to send email. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});