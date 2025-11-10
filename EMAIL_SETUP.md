# Email Form Setup Guide

Your contact form is now fully functional with Vercel serverless functions and SMTP! Here's how to set it up:

## 🚀 Quick Setup

### 1. Configure SMTP Credentials

You need to set up environment variables in your Vercel project:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following environment variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=recipient@example.com
```

### 2. Gmail Setup (Recommended)

If you're using Gmail:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this as your `SMTP_PASSWORD` (not your regular Gmail password)

**Gmail SMTP Settings:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
```

### 3. Other Email Providers

#### Outlook/Hotmail
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

#### Yahoo Mail
```
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
```

#### Custom SMTP Server
Use your provider's SMTP settings:
```
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587 (or 465 for SSL)
SMTP_USER=your-username
SMTP_PASSWORD=your-password
```

### 4. Environment Variables Explained

- **SMTP_HOST**: Your SMTP server address
- **SMTP_PORT**: SMTP port (usually 587 for TLS, 465 for SSL)
- **SMTP_USER**: Your email address or username
- **SMTP_PASSWORD**: Your email password or app password
- **SMTP_FROM**: Email address to send from (usually same as SMTP_USER)
- **SMTP_TO**: Email address to receive contact form submissions

## ✨ Features

### Beautiful Email Template
- 🎨 Modern, responsive HTML email design
- 📱 Mobile-friendly layout
- 🎯 Professional gradient header
- 📋 Well-organized information sections
- 💼 Branded footer

### Form Validation
- ✅ Required field validation
- ✅ Email format validation
- ✅ Minimum character requirements
- ✅ Real-time error display

### User Experience
- 🎯 Loading states during submission
- 🎉 Success messages
- ⚠️ Error handling with helpful messages
- 🔄 Form reset after successful submission

### Security
- 🔒 SMTP credentials stored securely in environment variables
- 🛡️ Server-side validation
- 🚫 No sensitive data exposed in frontend code
- ✅ Input sanitization

## 🔧 Customization

### Modifying the Email Template

The email template is located in `api/send-email.ts`. You can customize:
- Colors and gradients
- Layout and spacing
- Fonts and typography
- Additional sections

### Adding New Form Fields

1. Update the `contactSchema` in `Contact.tsx`
2. Add the field to the form JSX
3. Update the `formData` object in `onSubmit`
4. Modify the email template in `api/send-email.ts` to include the new field

### Styling Changes

- All styles use Tailwind CSS classes
- Colors match your design system
- Hover effects and animations included

## 🚨 Troubleshooting

### Common Issues

**"Email service not configured"**
- Verify all environment variables are set in Vercel
- Check that variable names match exactly (case-sensitive)
- Ensure variables are set for the correct environment (Production, Preview, Development)

**"Authentication failed"**
- For Gmail: Make sure you're using an App Password, not your regular password
- Verify your email and password are correct
- Check if 2FA is enabled (required for Gmail App Passwords)

**"Connection failed"**
- Verify SMTP_HOST and SMTP_PORT are correct
- Check if your firewall or network blocks SMTP ports
- Try port 465 with SSL instead of 587 with TLS

**"Form not submitting"**
- Check browser console for errors
- Verify all required fields are filled
- Ensure the API endpoint is accessible
- Check Vercel function logs for errors

### Testing Locally

1. Create a `.env.local` file in the root directory:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=recipient@example.com
```

2. Test the API endpoint:
```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "from_name": "Test User",
    "from_email": "test@example.com",
    "phone": "1234567890",
    "service_interest": "events",
    "message": "This is a test message"
  }'
```

### Checking Vercel Logs

1. Go to your Vercel project dashboard
2. Navigate to **Deployments** → Select a deployment → **Functions** tab
3. Click on `api/send-email` to view logs
4. Check for any error messages

## 📧 Email Template Preview

The email template includes:
- **Header**: Gradient background with title
- **Contact Information**: Name, email, phone, service interest
- **Message Section**: Formatted message content
- **Footer**: Company information and branding

## 🔒 Security Best Practices

1. **Never commit environment variables** to version control
2. **Use App Passwords** instead of regular passwords for Gmail
3. **Enable 2FA** on your email account
4. **Restrict SMTP access** if possible (IP whitelisting)
5. **Regularly rotate** your SMTP passwords
6. **Monitor** email sending activity in Vercel logs

## 📞 Support

If you need help:
1. Check Vercel function logs for detailed error messages
2. Verify all environment variables are set correctly
3. Test with a simple email template first
4. Review SMTP provider documentation for specific requirements

---

**Your contact form is now ready to receive messages! 🎉**

**Next Steps:**
1. Set up environment variables in Vercel
2. Test the form submission
3. Check your email inbox for the formatted message
4. Customize the email template if needed
