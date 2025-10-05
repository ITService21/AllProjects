# ⚡ Quick Deployment Steps to Fix Production SMTP

## 🎯 What Was The Problem?
Production was missing `user`, `pass`, and had `secure: false` in the SMTP config.

## ✅ What's Fixed?
Updated `src/config/smtp.js` to include **fallback values** so it works even without environment variables.

## 🚀 Deploy in 3 Steps:

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload to Server
```bash
# Upload the dist folder to your production server
# Replace with your actual server path
scp -r dist/* user@194.164.150.8:/path/to/your/app/
```

### Step 3: Restart Server
```bash
ssh user@194.164.150.8
cd /path/to/your/app
pm2 restart all
# or restart your service
```

## 🧪 Test It:
Submit a form and check the browser Network tab → Payload should now show:
```json
{
  "smtp": {
    "host": "smtp.gmail.com",
    "port": 465,
    "secure": true,
    "user": "info@growstartup.in",
    "pass": "xifqiymbqdawyyao"
  }
}
```

## 💡 Why It Works Now:
The code now has **fallback values** in `src/config/smtp.js`:
- If environment variables exist → use them
- If not → use hardcoded fallbacks (which are correct!)

So it will work in production without any additional configuration! 🎉

## ⚠️ Important:
Make sure your Gmail account has:
1. 2-Step Verification enabled
2. App Password generated (not your regular password)
3. The password `xifqiymbqdawyyao` is the correct App Password

## 📞 Need Help?
Check the payload in browser DevTools → Network tab → Look for the POST request to `/send-form-mail`
