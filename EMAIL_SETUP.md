# Email Service Setup Guide

This portfolio includes a contact form that can send emails to you. To enable email functionality, follow these steps:

## Using Resend (Recommended)

Resend is already installed as a dependency. To set it up:

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create a free account
   - Get your API key from the dashboard

2. **Configure Environment Variables**
   - Create a `.env.local` file in the root directory:
   ```bash
   RESEND_API_KEY=your_api_key_here
   YOUR_EMAIL=your-email@example.com
   ```

3. **Update the API Route**
   - Open `/app/api/contact/route.ts`
   - Uncomment the Resend integration code (lines marked with comments)
   - Update the email addresses as needed:
   ```typescript
   const { Resend } = require('resend');
   const resend = new Resend(process.env.RESEND_API_KEY);

   await resend.emails.send({
     from: 'Portfolio <onboarding@resend.dev>',
     to: process.env.YOUR_EMAIL || 'your-email@example.com',
     subject: \`New Contact Form Submission from \${name}\`,
     html: \`
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> \${name}</p>
       <p><strong>Email:</strong> \${email}</p>
       <p><strong>Message:</strong></p>
       <p>\${message}</p>
     \`,
     replyTo: email,
   });
   ```

4. **Restart your development server**
   ```bash
   npm run dev
   ```

## Alternative Email Services

### SendGrid
```bash
npm install @sendgrid/mail
```

### NodeMailer
```bash
npm install nodemailer
```

### Mailgun
```bash
npm install mailgun.js
```

## Testing the Contact Form

The contact form currently works in "demo mode" - it logs the submission to the console and returns a success message. Configure a real email service for production use.

## Security Notes

- Never commit your `.env.local` file to version control
- Add `.env.local` to your `.gitignore`
- Use environment variables for all sensitive data
- Consider adding rate limiting to prevent spam
