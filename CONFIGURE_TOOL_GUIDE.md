# How to Use Backend Configuration Tool

## 🎯 The Problem
Your frontend is deployed on GitHub Pages, but your backend needs to be deployed separately. They need to talk to each other!

## ✅ The Solution: Configuration Tool

We've added a beautiful configuration tool that lets you point your frontend to your backend **without touching any code**.

---

## 📍 Where to Find It

After you deploy your frontend to GitHub Pages, visit:

```
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/frontend/configure.html
```

Example:
```
https://john-doe.github.io/smart-transit/frontend/configure.html
```

---

## 🔧 How to Use It

### Step 1: Deploy Backend First
- Follow [QUICK_DEPLOY.md](QUICK_DEPLOY.md) or [START_HERE.md](START_HERE.md)
- You'll get a backend URL like: `https://smart-transit-backend-xyz.onrender.com`

### Step 2: Open Configuration Tool
Visit the URL above → You'll see a nice form

### Step 3: Paste Backend URL
![Screenshot: empty form with input field]
- Copy your Render URL
- Paste into "Backend API URL" field
- Example: `https://smart-transit-backend-abc123.onrender.com`

### Step 4: Test Connection (Optional)
Click the green **"🔌 Test Connection"** button
- If working: Shows "Backend is online! MongoDB: connected" ✅
- If not working: Shows error (check your URL or Render logs)

### Step 5: Save Configuration
Click **"💾 Save Configuration"**
- URL is saved to browser's local storage
- Your app will remember this setting

---

## 📝 What Gets Saved?

Your backend URL is saved in browser storage:
```javascript
localStorage.getItem('CUSTOM_API_URL')
// Returns: "https://your-backend.onrender.com"
```

Every time you visit your app:
1. It checks if custom URL is saved
2. If yes → uses that URL
3. If no → uses default URL
4. Your app now knows where to find the API!

---

## 🧪 Testing After Configuration

### Quick Login Test
1. **Close** configuration tool (or go back)
2. Click **"Commuter Login"**
3. Enter: `user` / `123`
4. Should redirect to map ✅

### Check Backend Connection (in Console)
Open browser DevTools (F12) → Console tab

Should show:
```
🔌 API Base: https://your-backend.onrender.com
```

---

## 🔄 Changing Backend URL

### If You Need to Switch Backends
Example: Testing on localhost vs production

1. Open configuration tool again
2. Change URL to new backend
3. Click "Save Configuration"
4. The app will use the new URL on next refresh

### Clear & Use Defaults
Click **"🗑️ Clear"** button:
- Removes saved URL
- App returns to default behavior
- Local: http://127.0.0.1:3100
- Production: https://bus-tracker-backend-sv2m.onrender.com

---

## 💡 Advanced: Manual Configuration

If you prefer not to use the tool, you can set it via browser console:

### Set Custom Backend
```javascript
localStorage.setItem('CUSTOM_API_URL', 'https://your-backend.onrender.com')
location.reload()
```

### Check Current URL
```javascript
console.log(localStorage.getItem('CUSTOM_API_URL') || 'Using default')
```

### Clear Custom URL
```javascript
localStorage.removeItem('CUSTOM_API_URL')
location.reload()
```

---

## 🐛 Troubleshooting

### "Cannot reach backend" Error
**Solution:**
1. Open configuration tool
2. Click **"Test Connection"**
3. Check your URL is correct
4. Wait 1-2 minutes (Render Free tier wakes up slowly)

### Backend URL Won't Save
**Solution:**
1. Check browser allows localStorage (not in private/incognito mode)
2. Try clearing browser cache
3. Try a different browser

### Still Using Old URL After Saving
**Solution:**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Check DevTools → Application → Local Storage

### Form Won't Submit
**Solution:**
1. Check URL format starts with `https://` or `http://`
2. No trailing slashes
3. Try removing special characters from URL

---

## ⚙️ How It Works Behind the Scenes

```javascript
// In frontend/index.html, line 1440+

// 1. Check if custom URL is saved
const customAPI = localStorage.getItem('CUSTOM_API_URL');

// 2. Use custom if available, otherwise use default
const API_BASE = customAPI || defaultAPI;

// 3. When logging in, use this URL
fetch(`${API_BASE}/api/auth/login`, {
  method: 'POST',
  body: JSON.stringify({ username, password })
})
```

So the configuration tool just:
- Saves your choice to `localStorage`
- App picks it up automatically
- No code changes needed!

---

## 🎓 Example Workflow

### Scenario: You deployed backend to Render

```
1. Get Render URL from dashboard:
   https://smart-transit-backend-abc123.onrender.com

2. Open configuration tool:
   https://yourname.github.io/smart-transit/frontend/configure.html

3. Paste URL and click "Save Configuration"
   ✅ Saved to localStorage

4. Refresh main app:
   https://yourname.github.io/smart-transit/frontend/

5. Click "Commuter Login" 
   ✅ Connects to your Render backend automatically!
```

---

## 🌐 For Multiple Environments

You can use different backend URLs for testing:

```javascript
// Production backend
localStorage.setItem('CUSTOM_API_URL', 'https://prod-backend.onrender.com')

// Testing backend (before switching)
localStorage.setItem('CUSTOM_API_URL', 'https://test-backend.onrender.com')

// Local backend
localStorage.setItem('CUSTOM_API_URL', 'http://127.0.0.1:3100')
```

Just use the configuration tool to switch between them!

---

## ✨ Features

| Feature | Works? | Notes |
|---------|--------|-------|
| Save URL | ✅ | Stores in localStorage |
| Test Connection | ✅ | Checks /api/health endpoint |
| Clear Config | ✅ | Resets to defaults |
| URL Validation | ✅ | Checks format is valid |
| Persistent | ✅ | Saves across browser sessions |
| Private Mode | ⚠️ | localStorage disabled - won't persist |
| Mobile | ✅ | Works on phone browsers |

---

## 📱 Mobile Usage

The configuration tool is responsive and works on phones:

1. Open on mobile browser
2. Fill in backend URL
3. Click "Test Connection" to verify
4. Save configuration
5. Open main app → everything works!

---

## 🔒 Security Notes

**What's NOT saved:**
- Passwords (only demo login with hardcoded creds)
- API keys
- sensitive data

**What IS saved:**
- Your backend URL (public knowledge anyway)

**Best Practice for Production:**
- Use environment variables on server
- Don't expose backend URL in public repositories
- Use proper authentication (JWT tokens, etc.)

---

## 📚 Related Files

- `START_HERE.md` - Main deployment guide
- `QUICK_DEPLOY.md` - 5-minute setup
- `DEPLOYMENT_GUIDE.md` - Complete reference
- `frontend/index.html` - See localStorage usage around line 1440-1449

---

## 💬 Questions?

Check these files for help:
1. Configuration not working? → See "Troubleshooting" above
2. Backend won't deploy? → See [START_HERE.md](START_HERE.md)
3. General deployment issues? → See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

**Made with ❤️ for easy deployment!**

Last Updated: February 22, 2026
