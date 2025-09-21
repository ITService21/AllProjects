# 🚀 Deployment API Fix - HTTPS/HTTP Issue

## **🔍 Problem Identified:**
Your API calls work locally but fail on `growstartup.in` due to **Mixed Content** security restrictions.

### **Root Cause:**
- **Local**: `http://localhost:5173` → `http://194.164.150.8:5000` ✅ (Both HTTP)
- **Production**: `https://growstartup.in` → `http://194.164.150.8:5000` ❌ (HTTPS → HTTP blocked)

## **✅ Solution Implemented:**

### **1. Created Centralized API Configuration**
**File**: `src/config/api.js`
```javascript
const getApiBaseUrl = () => {
    const isProduction = window.location.hostname === 'growstartup.in' || 
                        window.location.hostname === 'www.growstartup.in';
    
    if (isProduction) {
        return 'https://194.164.150.8:5000';  // HTTPS for production
    }
    
    return 'http://194.164.150.8:5000';       // HTTP for development
};
```

### **2. Updated All Components:**
- ✅ `FormModal.jsx`
- ✅ `PartnerModal.jsx` 
- ✅ `Contact.jsx` (both versions)
- ✅ `Footer.jsx`
- ✅ `ServiceModal.jsx`

### **3. Dynamic Protocol Detection:**
- **Development**: Uses HTTP
- **Production**: Uses HTTPS
- **Automatic**: No manual configuration needed

## **🔧 Additional Solutions:**

### **Option A: API Server HTTPS Setup (Recommended)**
If your API server supports HTTPS, the fix above will work immediately.

### **Option B: CORS Configuration**
If HTTPS isn't available, configure your API server to allow CORS from your domain:

```javascript
// Add to your API server
app.use(cors({
    origin: [
        'https://growstartup.in',
        'https://www.growstartup.in',
        'http://localhost:5173'
    ],
    credentials: true
}));
```

### **Option C: Proxy Solution**
Add a proxy in your hosting platform (Vercel/Netlify):

**vercel.json:**
```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "http://194.164.150.8:5000/:path*"
    }
  ]
}
```

### **Option D: Environment Variables**
Create different API URLs for different environments:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://194.164.150.8:5000';
```

## **🧪 Testing Steps:**

### **1. Local Testing:**
```bash
npm run dev
# Should work with HTTP
```

### **2. Production Testing:**
1. Deploy to `growstartup.in`
2. Test form submissions
3. Check browser console for errors
4. Verify API calls use HTTPS

### **3. Debug Information:**
Add this to any component to debug:
```javascript
console.log('API URL:', API_ENDPOINTS.SEND_FORM_MAIL);
console.log('Current hostname:', window.location.hostname);
```

## **🚨 Common Issues & Fixes:**

### **Issue 1: "Mixed Content" Error**
- **Cause**: HTTPS site calling HTTP API
- **Fix**: Use HTTPS API or proxy

### **Issue 2: CORS Error**
- **Cause**: API server doesn't allow your domain
- **Fix**: Configure CORS on API server

### **Issue 3: SSL Certificate Error**
- **Cause**: Invalid SSL certificate on API server
- **Fix**: Use valid SSL certificate or proxy

### **Issue 4: Network Timeout**
- **Cause**: API server not accessible from production
- **Fix**: Check firewall/network configuration

## **📊 Expected Results:**

### **Before Fix:**
- ❌ Forms work locally
- ❌ Forms fail on production
- ❌ Mixed content errors
- ❌ CORS errors

### **After Fix:**
- ✅ Forms work locally
- ✅ Forms work on production
- ✅ No mixed content errors
- ✅ No CORS errors

## **🔍 Debugging Commands:**

### **Check API Accessibility:**
```bash
# Test from production server
curl -X POST https://194.164.150.8:5000/send-form-mail \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

### **Check SSL Certificate:**
```bash
openssl s_client -connect 194.164.150.8:5000 -servername 194.164.150.8
```

## **🎯 Next Steps:**

1. **Deploy** the updated code to `growstartup.in`
2. **Test** form submissions on production
3. **Monitor** browser console for errors
4. **Verify** API calls are using HTTPS
5. **Contact** API server admin if HTTPS isn't available

## **💡 Alternative Solutions:**

If the API server doesn't support HTTPS:

1. **Use a proxy service** (Cloudflare, etc.)
2. **Set up a reverse proxy** on your hosting platform
3. **Use a different API endpoint** that supports HTTPS
4. **Implement server-side form handling**

The fix should resolve your deployment issue! 🚀
