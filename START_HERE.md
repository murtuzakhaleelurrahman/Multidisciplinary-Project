# 🚀 Smart Transit - Production Deployment Instructions

## Current Status
- ✅ Frontend deployed to GitHub Pages
- ❌ Backend NOT deployed yet (this is why login fails)
- ✅ All deployment configs added

## What You Need to Do (5-10 minutes)

### 1️⃣ Deploy Backend to Render (Recommended - FREE)

#### Create MongoDB Database
1. Go to https://mongodb.com/cloud/atlas/register
2. Create free account
3. Create FREE cluster (M0 tier - 512MB)
4. Click **Connect** → **Connect your application**
5. Copy connection string (replace `<password>` with your password):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/smart_transit
   ```

#### Deploy to Render
1. Go to https://render.com
2. Sign up with GitHub
3. **New Web Service**
   - Connect your GitHub repo
   - Set Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `node index.js`
   - Instance: Free

4. **Add Environment Variables:**
   ```
   MONGODB_URI = mongodb+srv://user:password@cluster.mongodb.net/smart_transit
   PORT = 3100
   NODE_ENV = production
   ```

5. Click **Create** and wait 3-5 minutes

6. **Copy your Render URL** (looks like: `https://smart-transit-backend-abc.onrender.com`)

---

### 2️⃣ Configure Frontend with Backend URL

**Option A: Use Configuration Tool (EASIEST)** ⭐
1. Open your GitHub Pages site
2. Go to `/configure.html` (append to your URL)
3. Paste your Render URL from Step 1
4. Click **Test Connection** → **Save Configuration**
5. Refresh main page → Login now works! ✅

**Option B: Update Code**
Edit `frontend/index.html` line 1440:
```javascript
const defaultAPI = isLocal
  ? `http://127.0.0.1:3100`
  : "https://YOUR-ACTUAL-RENDER-URL.onrender.com"; // ← Replace this
```

---

### 3️⃣ Seed Test Users

After backend is deployed and running, seed the database:

**Locally (if you run backend locally):**
```bash
cd backend
node seed_users.js
```

**On Remote (via Node console on Render):**
1. Go to Render Dashboard → Your Service
2. Click **Shell** tab
3. Run: `node seed_users.js`

**Or use default test credentials (if users table already exists):**
- Username: `user` Password: `123`
- Username: `admin` Password: `admin123`

---

### 4️⃣ Test Your Deployment

#### A. Check Backend is Running
Visit: `https://YOUR-RENDER-URL.onrender.com/api/health`

Should return:
```json
{
  "status": "ok",
  "timestamp": "2026-02-22T...",
  "mongodb": "connected",
  "uptime": 123.45
}
```

#### B. Test Login on Frontend
1. Open your GitHub Pages URL
2. Click **Commuter Login**
3. Enter: `user` / `123`
4. Should see: 🎉 Login success + redirect to map

#### C. Check Browser Console
Open DevTools (F12) → Console tab

Should show:
```
🔌 API Base: https://your-backend.onrender.com
```

---

## ⚙️ Files Added for Deployment

| File | Purpose |
|------|---------|
| `backend/render.yaml` | Render deployment config |
| `backend/railway.toml` | Railway.app deployment config |
| `backend/check-deploy.js` | Deployment readiness checker |
| `backend/verify-backend.js` | Backend health verifier |
| `frontend/configure.html` | Backend URL configuration tool |
| `QUICK_DEPLOY.md` | Quick reference guide |
| `DEPLOYMENT_GUIDE.md` | Full deployment documentation |

---

## 🔧 Verification Checklist

Before going live, verify:

- [ ] MongoDB Atlas account created
- [ ] Backend deployed to Render
- [ ] Environment variables set on Render
- [ ] Backend URL configured on frontend
- [ ] `/api/health` endpoint responds with `"mongodb": "connected"`
- [ ] Login works with test credentials
- [ ] Both commuter and admin roles work

---

## 🚨 Troubleshooting

### "Cannot reach backend" Error

**Problem:** Frontend can't connect to API  
**Check:**
1. Is Render URL correct? (Copy from Render dashboard)
2. Did you wait 5+ minutes for deployment to complete?
3. Check backend logs on Render: Dashboard → Your Service → **Logs**

**Solution:**
- Use `frontend/configure.html` to test and save correct URL
- Render free tier sleeps after 15 min → first request takes 30-60 sec

### "Backend returned HTML" Error

**Problem:** Backend endpoint not responding properly  
**Check:**
- Is MongoDB connected? (Check in Render logs)
- Are environment variables set?

**Solution:**
```
1. Go to Render Dashboard
2. Your Service → Settings
3. Check MONGODB_URI is set and valid
4. Check MongoDB Atlas network access allows 0.0.0.0/0
```

### "MongoDB connection failed"

**Problem:** Can't connect to MongoDB Atlas  
**Check:**
1. Connection string correct? (with real password)
2. Username/password correct?
3. IP whitelist configured?

**Solution:**
```
MongoDB Atlas → Network Access → Add IP: 0.0.0.0/0
(allows connections from anywhere - use more restrictive IP in production)
```

### Login Works Locally but Not on GitHub Pages

**Problem:** Localhost backend works, but production doesn't  
**Solution:**
```javascript
// In browser console, check current API:
console.log(localStorage.getItem('CUSTOM_API_URL'))

// If empty, use configure.html to set it
// Or run in console:
localStorage.setItem('CUSTOM_API_URL', 'https://your-render-url.onrender.com')
location.reload()
```

---

## 📱 Alternative Hosting Options

| Platform | Free Tier | Pros | Cons |
|----------|-----------|------|------|
| **Render** | 750 hrs/month | Easy YAML config | Sleeps after 15 min |
| **Railway** | $5 credit/month | Fast deploys | Limited free tier |
| **Fly.io** | 3 free apps | Always-on | More setup |
| **Heroku** | ❌ Free tier removed | Was easy | $7/month minimum |

---

## 📊 Expected Performance

| Metric | Free Tier | Notes |
|--------|-----------|-------|
| **Cold Start** | 30-60 sec | Render wakes up after 15 min idle |
| **Response Time** | 200-500 ms | Network + processing |
| **Database** | 512 MB | MongoDB Atlas M0 |
| **Bandwidth** | Unlimited | No rate limiting |
| **Concurrent Users** | ~10-20 | Free tier limitation |

---

## 🔒 Security Notes

### Current Demo Setup
- Login credentials stored in-memory (not hashed)
- No JWT tokens
- No HTTPS enforcement
- Suitable for **demo/learning only**

### For Production Deployment
Add these security features:

1. **Password Hashing**
   ```bash
   npm install bcryptjs
   ```

2. **JWT Authentication**
   ```bash
   npm install jsonwebtoken
   ```

3. **HTTPS Only**
   - Render automatically uses HTTPS
   - Add `FORCE_HTTPS` middleware

4. **Rate Limiting**
   ```bash
   npm install express-rate-limit
   ```

5. **Input Validation**
   ```bash
   npm install joi
   ```

---

## 📞 Need More Help?

1. **Quick Start:** See `QUICK_DEPLOY.md`
2. **Full Guide:** See `DEPLOYMENT_GUIDE.md`
3. **Backend Setup:** See `backend/SETUP_GUIDE.md`
4. **Code Seeding:** See `backend/SEEDER_GUIDE.md`

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ `https://YOUR-RENDER-URL.onrender.com/api/health` returns JSON
2. ✅ `frontend/configure.html` shows "Test Connection: Success"
3. ✅ Login form accepts credentials without network errors
4. ✅ Map and location tracking appears after login
5. ✅ Real buses appear on map with live updates

---

## 🎉 What's Included

Your app has these production features:

- ✅ Real-time bus tracking (Leaflet maps)
- ✅ Route planning (Leaflet Routing Machine)
- ✅ Admin analytics dashboard (Chart.js)
- ✅ Digital wallet with QR codes
- ✅ Geofencing (campus zone detection)
- ✅ PWA support (offline capability)
- ✅ Role-based access control
- ✅ Live traffic heatmap
- ✅ ETA calculations
- ✅ Mobile responsive design

---

## 🚀 Final Steps

```bash
# 1. Check backend is deployment-ready
cd backend
node check-deploy.js

# 2. After deploying to Render, verify it
node verify-backend.js https://your-render-url.onrender.com

# 3. Seed test users
node seed_users.js

# 4. Update frontend config (use configure.html)

# 5. Commit and push
git add .
git commit -m "Deploy: Add backend configuration tools"
git push

# 6. Test frontend login
# Visit your GitHub Pages URL and click "Commuter Login"
```

---

## 📅 Timeline

| Step | Time | Status |
|------|------|--------|
| Create MongoDB Atlas | 2 min | ⏳ To Do |
| Deploy to Render | 3-5 min | ⏳ To Do |
| Configure frontend | 2 min | ⏳ To Do |
| Test login | 2 min | ⏳ To Do |
| **Total** | **8-10 min** | ⏳ Ready to Start |

---

**Last Updated:** February 22, 2026  
**Version:** Production Ready v1.1  
**Status:** Ready for Deployment ✅

Start with the **5-minute quick fix** at the top of this file!
