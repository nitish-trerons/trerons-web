# Email Form Setup Guide

Your contact form is now fully functional with EmailJS integration! Here's how to set it up:

## 🚀 Quick Setup

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Set Up Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the authentication steps
- Copy your **Service ID**

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```html
Subject: New Contact Form Submission from {{from_name}}

Hello Trerons Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interest: {{service_interest}}

Message:
{{message}}

Best regards,
{{from_name}}
```

- Save the template and copy your **Template ID**

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

### 5. Update Configuration
Open `src/lib/emailjs-config.ts` and replace the placeholder values:

```typescript
export const emailjsConfig = {
    serviceId: 'your_actual_service_id_here',
    templateId: 'your_actual_template_id_here',
    publicKey: 'your_actual_public_key_here',
};
```

## ✨ Features

### Form Validation
- ✅ Required field validation
- ✅ Email format validation
- ✅ Minimum character requirements
- ✅ Real-time error display

### User Experience
- 🎯 Loading states during submission
- 🎉 Success messages
- ⚠️ Error handling
- 🔄 Form reset after successful submission

### Responsive Design
- 📱 Mobile-friendly layout
- 💻 Desktop optimized
- 🎨 Consistent with your brand

## 🔧 Customization

### Adding New Fields
1. Update the `contactSchema` in `Contact.tsx`
2. Add the field to the form JSX
3. Update the `templateParams` object
4. Modify your EmailJS template

### Styling Changes
- All styles use Tailwind CSS classes
- Colors match your design system
- Hover effects and animations included

### Email Template Variables
Available variables for your EmailJS template:
- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone (optional)
- `{{service_interest}}` - Selected service
- `{{message}}` - Message content
- `{{to_name}}` - Recipient name

## 🚨 Troubleshooting

### Common Issues

**"Service ID not found"**
- Verify your service ID in EmailJS dashboard
- Check if the service is active

**"Template ID not found"**
- Ensure template ID is correct
- Check if template is published

**"Public key error"**
- Verify your public key
- Check if your account is verified

**Form not submitting**
- Check browser console for errors
- Verify all required fields are filled
- Ensure EmailJS is properly initialized

### Testing
1. Fill out the form with test data
2. Submit and check your email
3. Verify all fields are received correctly
4. Test error scenarios (invalid email, empty fields)

## 📧 Alternative Email Services

If you prefer not to use EmailJS, you can integrate with:

- **Formspree** - Simple form handling
- **Netlify Forms** - Built-in form processing
- **Custom Backend** - Node.js/Express endpoint
- **AWS SES** - Enterprise email service

## 🔒 Security Notes

- EmailJS public keys are safe to expose in frontend code
- Form validation happens on both client and server side
- Rate limiting is handled by EmailJS
- No sensitive data is stored locally

## 📞 Support

If you need help:
1. Check EmailJS documentation
2. Review browser console for errors
3. Verify all configuration values
4. Test with a simple email template first

---

**Your contact form is now ready to receive messages! 🎉**
