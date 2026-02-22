# 🚀 Quick Deployment Fix

Your frontend is live on GitHub Pages, but your backend needs to be deployed. Here's the **fastest way** to get it working:

## ⚡ 5-Minute Fix

### Step 1: Deploy Backend to Render (FREE)

1. **Create MongoDB Database** (2 minutes)
   - Go to https://mongodb.com/cloud/atlas/register
   - Sign up → Create FREE cluster (M0)
   - Get connection string: `mongodb+srv://user:pass@cluster.mongodb.net/smart_transit`

2. **Deploy to Render** (3 minutes)
   - Go to https://render.com → Sign up with GitHub
   - Click **New +** → **Web Service**
   - Connect your repo → Select `backend` folder
   - Settings:
     - **Build:** `npm install`
     - **Start:** `node index.js`
     - **Instance:** Free
   - **Environment Variables:**
     ```
     MONGODB_URI = <your MongoDB connection string>
     PORT = 3100
     NODE_ENV = production
     ```
   - Click **Create** → Wait 3-5 minutes

3. **Copy Your Render URL**
   - After deployment: `https://smart-transit-backend-xyz.onrender.com`

### Step 2: Configure Frontend

**Option A: Use Configuration Tool (Easiest)**
1. Open: `frontend/configure.html` in your browser
2. Paste your Render URL
3. Click **Test Connection** → **Save Configuration**
4. Refresh your GitHub Pages site → Login should work! ✅

**Option B: Update Code Directly**
1. Edit `frontend/index.html` line 1440
2. Replace with your actual Render URL:
   ```javascript
   const defaultAPI = isLocal
     ? `http://127.0.0.1:3100`
     : "https://YOUR-ACTUAL-RENDER-URL.onrender.com";
   ```
3. Commit and push to GitHub

### Step 3: Seed Test Users

```bash
cd backend
node seed_users.js
```

Default login:
- **User:** `user` / `123`
- **Admin:** `admin` / `admin123`

---

## ✅ Quick Test Checklist

1. **Backend Health Check**
   ```
   https://YOUR-BACKEND-URL.onrender.com/api/health
   ```
   Should return: `{"status":"ok","mongodb":"connected"}`

2. **Frontend Login**
   - Open your GitHub Pages URL
   - Click **Commuter Login**
   - Enter `user` / `123`
   - Should redirect to map ✅

---

## 🔧 Troubleshooting

### "Cannot reach backend"
- Check backend is running: visit `https://YOUR-URL.onrender.com`
- Render free tier sleeps after 15min → first request takes 30-60 sec
- Check Render logs: Dashboard → Your Service → **Logs** tab

### "Backend returned HTML"
- Backend URL is wrong or backend not deployed
- Use `frontend/configure.html` to set correct URL

### "MongoDB connection failed"
- MongoDB Atlas → **Network Access** → Add IP `0.0.0.0/0`
- Check connection string has correct password
- Ensure database user has read/write permissions

---

## 📁 Files Added for Deployment

✅ `backend/render.yaml` - Render deployment config  
✅ `backend/railway.toml` - Railway deployment config (alternative)  
✅ `frontend/configure.html` - Backend URL configuration tool  
✅ `DEPLOYMENT_GUIDE.md` - Full deployment documentation  
✅ `QUICK_DEPLOY.md` - This file!

---

## 💡 Console Shortcuts

Open browser console on your GitHub Pages site and run:

```javascript
// Set custom backend URL
localStorage.setItem('CUSTOM_API_URL', 'https://your-backend.onrender.com')

// Check current backend
console.log('Current API:', localStorage.getItem('CUSTOM_API_URL') || 'Default')

// Clear custom URL (use default)
localStorage.removeItem('CUSTOM_API_URL')
```

---

## 🎯 Alternative Hosts

| Platform | Free Tier | Deploy Time | URL Example |
|----------|-----------|-------------|-------------|
| **Render** | ✅ 750hr/month | 3-5 min | `smart-transit-backend.onrender.com` |
| **Railway** | ✅ $5 credit/month | 2-3 min | `backend-production.up.railway.app` |
| **Fly.io** | ✅ 3 free apps | 5 min | `smart-transit-backend.fly.dev` |

---

## 📞 Need Help?

1. Check full guide: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
2. Check backend logs on Render/Railway dashboard
3. Open browser console (F12) for detailed error messages

---

**Status:** All deployment files ready ✅  
**Next Step:** Deploy backend → Configure frontend → Test login  
**Estimated Time:** 5-10 minutes
