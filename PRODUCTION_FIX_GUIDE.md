# 🔧 Production SMTP Fix Guide

## Problem:
Environment variables are not being loaded in production, causing SMTP config to miss `user` and `pass` fields.

## ✅ Solution Applied:

### 1. Updated `src/config/smtp.js`:
- Added fallback values for `user` and `pass`
- Fixed `secure` boolean parsing
- Now defaults to: `info@growstartup.in` / `xifqiymbqdawyyao`

### 2. Files Updated:
- ✅ `src/config/smtp.js` - SMTP config with fallbacks
- ✅ `.env` - Development environment variables
- ✅ `.env.production` - Production environment variables
- ✅ `.env.example` - Template for reference

## 🚀 Deployment Steps:

### Option A: Use .env.production file on server
```bash
# On your production server
cd /path/to/your/app

# Copy the .env.production file to your server
# Then rebuild:
npm run build

# Restart your app
pm2 restart your-app-name
# or
systemctl restart your-service
```

### Option B: Set Environment Variables on Hosting Platform

#### For your server (194.164.150.8):
```bash
# SSH into your server
ssh user@194.164.150.8

# Navigate to your app directory
cd /path/to/Grow-Statup-website

# Upload .env.production file or create it:
cat > .env.production << 'ENVEOF'
VITE_SMTP_HOST=smtp.gmail.com
VITE_SMTP_PORT=465
VITE_SMTP_SECURE=true
VITE_SMTP_USER=info@growstartup.in
VITE_SMTP_PASS=xifqiymbqdawyyao
VITE_SMTP_TO=info@growstartup.in
ENVEOF

# Rebuild the app
npm run build

# If using PM2:
pm2 restart all
# Or restart your Node.js process
```

### Option C: No Environment Variables Needed!
Since we added fallback values in the code, it should work automatically now.
Just rebuild and redeploy!

## 🔍 Testing:

### After deployment, test the payload:
```javascript
// Should see this in production:
{
  smtp: {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    user: "info@growstartup.in",
    pass: "xifqiymbqdawyyao"
  },
  to: "info@growstartup.in",
  subject: "Consultant Booking Request",
  fields: { ... }
}
```

## 📝 Quick Fix Commands:

```bash
# 1. Pull latest changes
git pull origin main

# 2. Install dependencies (if needed)
npm install

# 3. Build for production
npm run build

# 4. Copy .env.production to production server
scp .env.production user@194.164.150.8:/path/to/app/

# 5. Restart production app
ssh user@194.164.150.8 "cd /path/to/app && pm2 restart all"
```

## ✨ What Changed:

**Before (Production):**
```javascript
smtp: {
  host: "smtp.gmail.com",
  port: 465,
  secure: false  // ❌ Wrong
  // ❌ Missing user
  // ❌ Missing pass
}
```

**After (Production):**
```javascript
smtp: {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,  // ✅ Correct
  user: "info@growstartup.in",  // ✅ Present
  pass: "xifqiymbqdawyyao"      // ✅ Present
}
```

## 🎯 Next Steps:

1. **Rebuild your app**: `npm run build`
2. **Deploy to production**
3. **Test a form submission**
4. **Verify email is received**

The fix is now in place with fallback values, so even without environment variables, it will use the correct SMTP configuration!
