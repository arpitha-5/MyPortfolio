# 🚀 Portfolio Contact Form Backend Setup

This guide will help you set up the Node.js backend for your portfolio contact form with Resend email functionality.

## 📋 Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Resend Account** for sending emails - [Sign up here](https://resend.com/)

## ⚙️ Setup Instructions

### 1. **Install Dependencies**

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- `express` - Web server framework
- `resend` - Email sending library
- `body-parser` - Parse request bodies
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables management

### 2. **Create Environment File**

The `.env` file should contain:

```env
# Resend Email Configuration
RESEND_API_KEY=your_resend_api_key_here

# Server Configuration
PORT=5001
```

### 3. **Setup Resend API Key**

1. **Sign up for Resend**: Go to [resend.com](https://resend.com/) and create an account
2. **Get your API Key**: Go to your dashboard and create an API key
3. **Add to .env**: Replace `your_resend_api_key_here` with your actual API key
4. **Verify Domain** (Optional but recommended): Add your sending domain to improve deliverability

### 4. **Test the Server**

Start the development server:

```bash
npm start
```

You should see:
```
🚀 Server running on http://localhost:5001
📧 Contact form API available at http://localhost:5001/api/contact
🏠 Portfolio available at http://localhost:5001
```

### 5. **Test Email Functionality**

Run the email test:

```bash
node test-email.js
```

You should see:
```
🧪 Testing Resend email configuration...
✅ Resend: Test email sent successfully!
📊 Test Results: 1/1 configuration successful
🎉 All tests passed! Your email configuration is ready.
```

Open your browser and navigate to: `http://localhost:5001`

Your portfolio should load and the contact form should now:
- ✅ Send emails to your inbox via Resend
- ✅ Send confirmation emails to users
- ✅ Show success/error notifications
- ✅ Include beautiful HTML email templates

## 🐛 Troubleshooting

### Common Issues:

**❌ "Missing RESEND_API_KEY in .env file"**
- Make sure your `.env` file exists and contains `RESEND_API_KEY=your_key_here`
- Check that the API key is correct (starts with `re_`)
- Ensure the `.env` file is in the same directory as `server.js`

**❌ "Failed to send message"**
- Verify your Resend API key is valid
- Check your internet connection
- Make sure your Resend account has credits (free tier available)
- Try regenerating the App Password

**❌ "Module not found"**
- Run `npm install` to install dependencies
- Make sure you're in the correct directory

**❌ "Port already in use"**
- Change PORT in `.env` to a different number (e.g., 3000, 8000)
- Or kill the process using that port

### Health Check

Test if the server is working:
```bash
curl http://localhost:5001/api/health
```

Should return:
```json
{
  "status": "OK", 
  "message": "Contact form server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 📁 File Structure

```
your-portfolio/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (keep secret!)
├── .env.example          # Example environment file
├── portfolio.html        # Your portfolio HTML file
├── simple-main.js        # Updated JavaScript with API integration
└── SETUP_INSTRUCTIONS.md # This file
```

## 🚀 Production Deployment

For production deployment on services like **Heroku**, **Vercel**, or **Railway**:

1. **Environment Variables**: Set `RESEND_API_KEY` in your hosting service's environment variables section
2. **Port Configuration**: The server will automatically use `process.env.PORT` for deployment
3. **HTTPS**: Your hosting service should provide HTTPS automatically

## 📧 Email Templates

The server includes beautiful HTML email templates:

- **📬 Owner Email**: Professional notification with contact details and reply button
- **✅ Confirmation Email**: Thank you message to users with your branding and social links

## 💡 Tips

- **Keep `.env` secret**: Never commit it to version control
- **Test locally first**: Make sure everything works before deploying
- **Monitor emails**: Check your inbox and spam folder
- **API Key Security**: Your Resend API key should be kept secure

## 🆘 Need Help?

If you encounter issues:

1. Check the console for error messages
2. Verify your Resend API key is valid
3. Test with the `node test-email.js` command
4. Check your Resend dashboard for any issues

---

**🎉 That's it!** Your portfolio contact form should now be fully functional with Resend email capabilities!