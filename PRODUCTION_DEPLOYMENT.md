# Production Deployment Guide

## 🚀 Deploying Your Portfolio with EmailJS

Your contact form will work in production once you add environment variables to your hosting platform.

## 📋 Environment Variables Needed:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 🌐 Hosting Platform Setup:

### **Vercel (Recommended for Next.js)**

1. **Deploy to Vercel:**

   ```bash
   npm install -g vercel
   vercel
   ```

2. **Add Environment Variables:**

   - Go to your Vercel dashboard
   - Select your project
   - Go to "Settings" → "Environment Variables"
   - Add each variable:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

3. **Redeploy:**
   - Go to "Deployments"
   - Click "Redeploy" on your latest deployment

### **Netlify**

1. **Deploy to Netlify:**

   ```bash
   npm run build
   # Upload the .next folder to Netlify
   ```

2. **Add Environment Variables:**

   - Go to Netlify dashboard
   - Select your site
   - Go to "Site settings" → "Environment variables"
   - Add each variable with your EmailJS credentials

3. **Redeploy:**
   - Trigger a new deployment

### **Railway**

1. **Deploy to Railway:**

   - Connect your GitHub repo
   - Railway will auto-deploy

2. **Add Environment Variables:**
   - Go to your Railway project
   - Click "Variables" tab
   - Add your EmailJS environment variables

### **DigitalOcean App Platform**

1. **Deploy to DigitalOcean:**

   - Connect your GitHub repo
   - Select Next.js as framework

2. **Add Environment Variables:**
   - Go to your app settings
   - Click "Environment Variables"
   - Add your EmailJS credentials

## ✅ Testing in Production:

1. **Visit your deployed site**
2. **Go to the contact page**
3. **Fill out the contact form**
4. **Click "Send Message"**
5. **Check your email inbox**

## 🔧 Troubleshooting:

### **Form Not Working:**

- ✅ Check environment variables are set correctly
- ✅ Verify EmailJS credentials are valid
- ✅ Check browser console for errors
- ✅ Ensure EmailJS service is active

### **Emails Not Received:**

- ✅ Check spam folder
- ✅ Verify EmailJS template is correct
- ✅ Check EmailJS dashboard for delivery status
- ✅ Test with different email addresses

## 🎯 Best Practices:

- 🔒 **Never commit** `.env.local` to git
- 🔄 **Use different** EmailJS accounts for dev/production
- 📊 **Monitor** EmailJS usage (200 emails/month free)
- 🧪 **Test thoroughly** before going live

## 📞 Support:

- **EmailJS Support**: [support@emailjs.com](mailto:support@emailjs.com)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Netlify Support**: [netlify.com/support](https://netlify.com/support)

Your contact form will work perfectly in production once you add the environment variables!
