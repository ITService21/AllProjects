# 🧪 Testing Auto-Popup Feature

## **🔍 How to Test:**

### **1. Clear Browser Data First:**
```javascript
// Open browser console and run:
localStorage.clear();
sessionStorage.clear();
```

### **2. Test Home Page (5 seconds):**
1. **Navigate to**: `http://localhost:5173/` or `https://growstartup.in/`
2. **Wait**: 5 seconds
3. **Expected**: FormModal should appear
4. **Check Console**: Should see "🏠 Home page detected - popup will show in 5 seconds"

### **3. Test Other Pages (60 seconds):**
1. **Navigate to**: Any other page (e.g., `/services`, `/contact`)
2. **Wait**: 60 seconds
3. **Expected**: FormModal should appear
4. **Check Console**: Should see "📄 Other page detected - popup will show in 60 seconds"

### **4. Test Recurring Popups:**
1. **Close the popup** (click ×)
2. **Wait**: 60 seconds
3. **Expected**: FormModal should appear again
4. **Check Console**: Should see "⏰ Interval popup triggered"

### **5. Test "Don't Show Again":**
1. **Click "Don't show again"** button
2. **Wait**: 60+ seconds
3. **Expected**: No more popups
4. **Check Console**: Should see "❌ Popup dismissed permanently - not showing"

## **🐛 Debugging Steps:**

### **If Popup Doesn't Show:**

1. **Check Console Logs:**
   ```javascript
   // Look for these messages:
   "🏠 Home page detected - popup will show in 5 seconds"
   "📄 Other page detected - popup will show in 60 seconds"
   "🚀 Showing popup on home page"
   "🚀 Showing popup on other page"
   "⏰ Interval popup triggered"
   ```

2. **Check for Blocking Conditions:**
   ```javascript
   // Look for these messages:
   "❌ Popup dismissed permanently - not showing"
   "❌ Another modal is open - not showing popup"
   ```

3. **Check localStorage:**
   ```javascript
   // Run in console:
   console.log('popupDismissed:', localStorage.getItem('popupDismissed'));
   ```

4. **Check Modal Context:**
   ```javascript
   // Check if isAnyModalOpen is true
   console.log('Modal context state');
   ```

## **⚡ Quick Test (5 seconds):**

For faster testing, temporarily change the timers:

```javascript
// In AutoPopupModal.jsx, change:
}, 3000); // 3 seconds for home page
// to:
}, 5000); // 5 seconds for home page

}, 60000); // 60 seconds for other pages
// to:
}, 10000); // 10 seconds for other pages
```

## **🎯 Expected Behavior:**

### **Home Page (`/` or `/home`):**
- ✅ **First Visit**: Popup after 5 seconds
- ✅ **Subsequent**: Every 60 seconds
- ✅ **Console**: Shows home page detection

### **Other Pages:**
- ✅ **First Visit**: Popup after 60 seconds
- ✅ **Subsequent**: Every 60 seconds
- ✅ **Console**: Shows other page detection

### **User Actions:**
- ✅ **Close (×)**: Popup closes, will show again in 60 seconds
- ✅ **Don't Show Again**: Permanently disables popup
- ✅ **Fill Form**: Normal form submission, popup closes

## **🔧 Troubleshooting:**

### **Issue 1: No Console Logs**
- **Cause**: Component not mounting
- **Fix**: Check if AutoPopupModal is imported in App.jsx

### **Issue 2: "Popup dismissed permanently"**
- **Cause**: User clicked "Don't show again"
- **Fix**: Clear localStorage: `localStorage.clear()`

### **Issue 3: "Another modal is open"**
- **Cause**: Another modal is active
- **Fix**: Close other modals first

### **Issue 4: Popup shows but doesn't close**
- **Cause**: Modal context issue
- **Fix**: Check ModalContext implementation

## **📱 Test on Different Devices:**

### **Desktop:**
- Chrome, Firefox, Safari
- Different screen sizes

### **Mobile:**
- iOS Safari
- Android Chrome
- Different orientations

## **🚀 Production Testing:**

1. **Deploy to growstartup.in**
2. **Test on live site**
3. **Check console logs**
4. **Verify timing works correctly**

The auto-popup should now work perfectly! 🎉
