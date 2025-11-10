# Environment Variables Setup Guide

## 📋 Required Environment Variables

Add these environment variables in your **Vercel Project Settings**:

### SMTP Configuration

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=recipient@example.com
```

## 🚀 How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** (gear icon)
3. Navigate to **Environment Variables** in the left sidebar
4. Click **Add New** for each variable
5. Enter the variable name and value
6. Select the environments (Production, Preview, Development)
7. Click **Save**
8. **Redeploy** your application for changes to take effect

## 📧 Gmail Setup (Recommended)

If using Gmail, follow these steps:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate App Password**:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this as your `SMTP_PASSWORD`

**Gmail Environment Variables:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx  (16-char app password)
SMTP_FROM=your-email@gmail.com
SMTP_TO=recipient@example.com
```

## 📧 Other Email Providers

### Outlook/Hotmail
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM=your-email@outlook.com
SMTP_TO=recipient@example.com
```

### Yahoo Mail
```
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@yahoo.com
SMTP_TO=recipient@example.com
```

### Custom SMTP Server
```
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587  (or 465 for SSL)
SMTP_USER=your-username
SMTP_PASSWORD=your-password
SMTP_FROM=your-email@domain.com
SMTP_TO=recipient@example.com
```

## 💻 Local Development Setup

For local development, create a `.env.local` file in the root directory:

```bash
# Copy this template to .env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=recipient@example.com
```

**Note:** `.env.local` is already in `.gitignore` and won't be committed to git.

## ✅ Verification

After setting up environment variables:

1. **Redeploy** your Vercel project
2. Test the contact form on your website
3. Check your email inbox for the formatted message
4. Check Vercel function logs if there are any issues:
   - Go to **Deployments** → Select deployment → **Functions** tab
   - Click on `api/send-email` to view logs

## 🔒 Security Notes

- ✅ Never commit `.env` or `.env.local` files to git
- ✅ Use App Passwords instead of regular passwords for Gmail
- ✅ Enable 2FA on your email account
- ✅ Regularly rotate your SMTP passwords
- ✅ Only add environment variables in Vercel dashboard, not in code

---

**Your email service is now configured! 🎉**

