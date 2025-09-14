# Deployment Guide - Fix 404 Errors on Refresh

## Problem
When you refresh any page except the home page (like `/about-us/overview` or `/services/funding`), you get a 404 error. This happens because the server tries to find a physical file at that path, but in a React SPA, all routes are handled by the client-side router.

## Solution
I've added configuration files for different hosting platforms to handle client-side routing properly.

## Files Added

### 1. `public/_redirects` (for Netlify)
```
/*    /index.html   200
```

### 2. `vercel.json` (for Vercel)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. `public/.htaccess` (for Apache servers)
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### 4. `nginx.conf` (for Nginx servers)
```
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 5. Updated `vite.config.js`
Added proper build configuration and server settings.

## Deployment Instructions

### For Netlify:
1. Build your project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. The `_redirects` file will automatically handle routing

### For Vercel:
1. Connect your GitHub repository to Vercel
2. The `vercel.json` file will automatically handle routing
3. Deploy with: `vercel --prod`

### For Apache (cPanel/Shared Hosting):
1. Build your project: `npm run build`
2. Upload the `dist` folder contents to your public_html directory
3. The `.htaccess` file will handle routing

### For Nginx:
1. Build your project: `npm run build`
2. Copy the `dist` folder contents to your web server directory
3. Use the provided `nginx.conf` configuration

### For Other Hosting Providers:
Most modern hosting providers support SPA routing. Check their documentation for:
- "Single Page Application" support
- "Client-side routing" configuration
- "History API fallback" settings

## Testing
After deployment:
1. Visit your website
2. Navigate to any page (e.g., `/about-us/overview`)
3. Refresh the page - it should work without 404 errors
4. Test all your routes to ensure they work properly

## Build Commands
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build locally
npm run preview
```

## Troubleshooting
If you still get 404 errors:
1. Ensure the configuration file for your hosting platform is present
2. Check that your hosting provider supports the configuration
3. Verify that the build files are in the correct directory
4. Contact your hosting provider's support for SPA routing assistance

## Notes
- The error you saw (`404: NOT_FOUND Code: NOT_FOUND ID: bom1::gbzx2-1757853902816-f0e43dc3cdea`) is typical of Vercel/Netlify when SPA routing isn't configured
- These configuration files ensure that all routes are redirected to `index.html`, allowing React Router to handle the routing
- The files are safe to include in your repository and won't affect local development
