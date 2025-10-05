# 🚀 Deployment Guide for SMTP Configuration

## Environment Variables Setup

Your application now uses environment variables for SMTP configuration. In production, you need to set these variables on your hosting platform.

### Required Environment Variables:

```bash
VITE_SMTP_HOST=smtp.gmail.com
VITE_SMTP_PORT=465
VITE_SMTP_SECURE=true
VITE_SMTP_USER=info@growstartup.in
VITE_SMTP_PASS=xifqiymbqdawyyao
VITE_SMTP_TO=info@growstartup.in
```

## 📋 Deployment Steps by Platform:

### For Vercel:
1. Go to your project on Vercel Dashboard
2. Go to Settings → Environment Variables
3. Add each variable (name and value)
4. Make sure to select "Production" environment
5. Redeploy your application

### For Netlify:
1. Go to Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add each variable
4. Trigger a new deployment

### For VPS/Custom Server:
1. Create `.env` file on your server:
   ```bash
   nano /path/to/your/app/.env
   ```
2. Paste the environment variables
3. Rebuild your application:
   ```bash
   npm run build
   ```
4. Restart your application

### For Docker:
Add to your `docker-compose.yml`:
```yaml
environment:
  - VITE_SMTP_HOST=smtp.gmail.com
  - VITE_SMTP_PORT=465
  - VITE_SMTP_SECURE=true
  - VITE_SMTP_USER=info@growstartup.in
  - VITE_SMTP_PASS=xifqiymbqdawyyao
  - VITE_SMTP_TO=info@growstartup.in
```

## ⚠️ Important Notes:

1. **Vite Environment Variables**: Vite requires `VITE_` prefix for client-side variables
2. **Build Time**: Environment variables are embedded at build time, so you must rebuild after changing them
3. **Security**: Never commit `.env` file to Git (it's already in `.gitignore`)
4. **Fallback Values**: The app has fallback values, but they should match production values

## 🔍 Troubleshooting:

If emails aren't sending in production:
1. Check if environment variables are set correctly
2. Rebuild the application
3. Check browser console for SMTP config (temporarily add `console.log(SMTP_CONFIG)`)
4. Verify Gmail settings allow less secure apps or use App Password

## 📧 Gmail App Password Setup:
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to "App passwords"
4. Generate a new app password for "Mail"
5. Use this password in `VITE_SMTP_PASS`
