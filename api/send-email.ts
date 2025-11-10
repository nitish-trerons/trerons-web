import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Email template function
const getEmailTemplate = (data: {
  from_name: string;
  from_email: string;
  phone: string;
  service_interest: string;
  message: string;
}) => {
  const serviceLabels: Record<string, string> = {
    events: 'Event Services',
    'film-video': 'Film & Video Production',
    tech: 'Technology Services',
    other: 'Other'
  };

  const serviceLabel = serviceLabels[data.service_interest] || data.service_interest;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f5f5f5;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .email-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: #ffffff;
        }
        .email-header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
        }
        .email-header p {
            font-size: 16px;
            opacity: 0.95;
        }
        .email-body {
            padding: 40px 30px;
        }
        .info-section {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 30px;
        }
        .info-row {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .info-row:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }
        .info-label {
            font-weight: 600;
            color: #4a5568;
            min-width: 140px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .info-value {
            flex: 1;
            color: #2d3748;
            font-size: 15px;
            word-break: break-word;
        }
        .info-value a {
            color: #667eea;
            text-decoration: none;
        }
        .info-value a:hover {
            text-decoration: underline;
        }
        .message-section {
            background-color: #ffffff;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 25px;
            margin-top: 25px;
        }
        .message-section h2 {
            font-size: 18px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e2e8f0;
        }
        .message-content {
            color: #4a5568;
            font-size: 15px;
            line-height: 1.8;
            white-space: pre-wrap;
        }
        .email-footer {
            background-color: #f7fafc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        .email-footer p {
            color: #718096;
            font-size: 13px;
            margin-bottom: 8px;
        }
        .badge {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        @media only screen and (max-width: 600px) {
            .email-header {
                padding: 30px 20px;
            }
            .email-header h1 {
                font-size: 24px;
            }
            .email-body {
                padding: 30px 20px;
            }
            .info-section {
                padding: 20px;
            }
            .info-row {
                flex-direction: column;
            }
            .info-label {
                margin-bottom: 8px;
                min-width: auto;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>📧 New Contact Form Submission</h1>
            <p>You have received a new message from your website</p>
        </div>
        
        <div class="email-body">
            <div class="info-section">
                <div class="info-row">
                    <div class="info-label">Name</div>
                    <div class="info-value">${data.from_name}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Email</div>
                    <div class="info-value">
                        <a href="mailto:${data.from_email}">${data.from_email}</a>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-label">Phone</div>
                    <div class="info-value">${data.phone}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Service Interest</div>
                    <div class="info-value">
                        <span class="badge">${serviceLabel}</span>
                    </div>
                </div>
            </div>
            
            <div class="message-section">
                <h2>Message</h2>
                <div class="message-content">${data.message}</div>
            </div>
        </div>
        
        <div class="email-footer">
            <p><strong>Trerons</strong></p>
            <p>This email was sent from your website contact form</p>
            <p style="margin-top: 15px; font-size: 12px; color: #a0aec0;">
                Plot No.- 1882, Unit- 8, Nayapalli, Bhubaneswar, 751012
            </p>
        </div>
    </div>
</body>
</html>
  `.trim();
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { from_name, from_email, phone, service_interest, message } = req.body;

    // Validate required fields
    if (!from_name || !from_email || !service_interest || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['from_name', 'from_email', 'service_interest', 'message']
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Get SMTP credentials from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const smtpTo = process.env.SMTP_TO || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.error('Missing SMTP configuration');
      return res.status(500).json({ 
        error: 'Email service not configured. Please check environment variables.' 
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Prepare email data
    const emailData = {
      from_name: from_name.trim(),
      from_email: from_email.trim(),
      phone: phone?.trim() || 'Not provided',
      service_interest: service_interest.trim(),
      message: message.trim(),
    };

    // Send email
    const info = await transporter.sendMail({
      from: `"Trerons Contact Form" <${smtpFrom}>`,
      to: smtpTo,
      replyTo: emailData.from_email,
      subject: `New Contact Form Submission from ${emailData.from_name}`,
      html: getEmailTemplate(emailData),
      text: `
New Contact Form Submission

Name: ${emailData.from_name}
Email: ${emailData.from_email}
Phone: ${emailData.phone}
Service Interest: ${emailData.service_interest}

Message:
${emailData.message}
      `.trim(),
    });

    console.log('Email sent successfully:', info.messageId);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Return user-friendly error messages
    if (error.code === 'EAUTH') {
      return res.status(500).json({ 
        error: 'Authentication failed. Please check SMTP credentials.' 
      });
    }
    
    if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      return res.status(500).json({ 
        error: 'Connection failed. Please check SMTP server settings.' 
      });
    }

    return res.status(500).json({ 
      error: 'Failed to send email. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

