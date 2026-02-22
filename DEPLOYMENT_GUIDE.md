# 🚀 Deployment Guide for Smart Transit

## Current Issue
Your frontend is deployed to GitHub Pages, but the backend needs to be deployed separately. When you try to login, it's looking for a backend at `https://bus-tracker-backend-sv2m.onrender.com` which doesn't exist yet.

## Quick Fix Options

### Option 1: Deploy Backend to Render (FREE & RECOMMENDED) ⭐

#### Step 1: Set Up MongoDB Atlas (Free Tier)
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create a free account
3. Create a **FREE M0 Cluster** (512MB)
4. Click **"Connect"** → **"Connect your application"**
5. Copy the connection string (looks like):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/smart_transit?retryWrites=true&w=majority
   ```
6. Replace `<password>` with your actual password

#### Step 2: Deploy to Render
1. Go to https://render.com and sign up (free)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name:** `smart-transit-backend`
   - **Region:** Choose closest to you
   - **Branch:** `main` (or your branch name)
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Instance Type:** `Free`

5. **Add Environment Variables:**
   - `MONGODB_URI` = Your MongoDB Atlas connection string (from Step 1)
   - `PORT` = `3100`
   - `NODE_ENV` = `production`

6. Click **"Create Web Service"**
7. Wait 3-5 minutes for deployment
8. Copy your Render URL (like `https://smart-transit-backend-abc123.onrender.com`)

#### Step 3: Update Frontend API URL
Replace line 1440 in `frontend/index.html`:

```javascript
const API_BASE = isLocal
  ? `http://127.0.0.1:3100`
  : "https://YOUR-ACTUAL-RENDER-URL.onrender.com";
```

Replace `YOUR-ACTUAL-RENDER-URL.onrender.com` with the URL from Step 2.

#### Step 4: Seed Test Users
After backend is deployed, seed the database:
```bash
cd backend
node seed_users.js
```

#### Step 5: Push to GitHub
```bash
git add .
git commit -m "Update production API URL"
git push
```

Wait 1-2 minutes for GitHub Pages to rebuild, then test!

---

### Option 2: Deploy to Railway (Alternative, Also FREE)

1. Go to https://railway.app
2. Sign up with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. Select your repository
5. Add service: **backend** folder
6. Add environment variables (same as Render)
7. Deploy!

Railway gives you a URL like `https://smart-transit-backend-production.up.railway.app`

Update line 1440 in `frontend/index.html` with this URL.

---

### Option 3: Quick Local Testing (Temporary)

If you want to test locally while backend is on your machine:

1. **Start Backend Locally:**
   ```bash
   cd backend
   npm install
   node index.js
   ```

2. **Temporarily Change Frontend to Local Mode:**

   In `frontend/index.html` line 1436, change:
   ```javascript
   const isLocal = host === "localhost" || host === "127.0.0.1" || host === "";
   ```
   
   To:
   ```javascript
   const isLocal = true; // Force local mode for testing
   ```

3. Open `frontend/index.html` directly in browser (not via GitHub Pages)

⚠️ **Don't commit this change** - revert it before pushing to GitHub!

---

## Troubleshooting

### "Backend returned HTML" Error
**Cause:** Frontend can't reach the backend API  
**Solutions:**
- Check if backend URL is correct in line 1440
- Verify backend is actually running (visit the URL directly)
- Check Render/Railway logs for errors
- Ensure MongoDB is connected

### "CORS Error" in Browser Console
**Cause:** Backend not allowing requests from GitHub Pages  
**Solution:** Backend already has `app.use(cors())` which allows all origins. If issues persist, try:

```javascript
// In backend/index.js, replace cors() with:
app.use(cors({
  origin: ['https://YOUR-GITHUB-USERNAME.github.io', 'http://localhost'],
  credentials: true
}));
```

### Backend Sleeping on Render Free Tier
**Cause:** Render free tier spins down after 15 min of inactivity  
**Solutions:**
- First request will take 30-60 seconds to wake up
- Upgrade to paid tier ($7/month) for always-on
- Use a service like UptimeRobot to ping every 14 minutes

### MongoDB Connection Failed
**Cause:** Wrong connection string or network access not configured  
**Solutions:**
- In MongoDB Atlas → **Network Access** → Add IP: `0.0.0.0/0` (allow all)
- Double-check connection string has correct password
- Ensure database user has read/write permissions

---

## Environment Variables Reference

### Backend (Render/Railway)
```bash
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/smart_transit
PORT=3100
NODE_ENV=production
```

### Frontend (GitHub Pages)
No environment variables needed! Just update line 1440 with your backend URL.

---

## Testing Your Deployment

### 1. Test Backend Directly
Visit: `https://YOUR-BACKEND-URL.onrender.com/api/health`

Should return:
```json
{
  "status": "ok",
  "mongodb": "connected"
}
```

### 2. Test Login API
```bash
curl -X POST https://YOUR-BACKEND-URL.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"123"}'
```

Should return:
```json
{
  "username": "user",
  "role": "user"
}
```

### 3. Test Frontend
1. Open your GitHub Pages URL
2. Click **"Commuter Login"**
3. Enter: `user` / `123`
4. Should redirect to main app

---

## Cost Breakdown

| Service | Free Tier | Limits |
|---------|-----------|--------|
| **GitHub Pages** | ✅ Free forever | 100GB bandwidth/month |
| **Render** | ✅ Free tier available | 750 hours/month, sleeps after 15min |
| **Railway** | ✅ $5 free credit/month | ~500 hours/month |
| **MongoDB Atlas** | ✅ Free M0 cluster | 512MB storage |

**Total Monthly Cost:** $0 🎉

---

## Recommended Production Setup

### Free (Good for Demo/Testing)
- Frontend: GitHub Pages (free)
- Backend: Render Free Tier (sleeps after 15min)
- Database: MongoDB Atlas M0 (512MB)

### Paid (Production-Ready)
- Frontend: Vercel/Netlify ($0-20/month)
- Backend: Render Standard ($7/month) or Railway Pro ($5/month) 
- Database: MongoDB Atlas M2 ($9/month)

---

## Next Steps After Deployment

1. ✅ Backend deployed to Render/Railway
2. ✅ MongoDB Atlas connected
3. ✅ Frontend updated with production API URL
4. ✅ Test users seeded (`node seed_users.js`)
5. ✅ Login working on GitHub Pages

### Optional Enhancements:
- [ ] Set up custom domain (free with GitHub Pages)
- [ ] Enable HTTPS monitoring with UptimeRobot
- [ ] Add analytics with Google Analytics
- [ ] Set up error tracking with Sentry

---

## Need Help?

### Common Commands

**Start backend locally:**
```bash
cd backend
npm install
node index.js
```

**Seed users:**
```bash
cd backend
node seed_users.js
```

**Deploy frontend to GitHub Pages:**
```bash
git add .
git commit -m "Deploy updates"
git push
```

**Check backend logs (Render):**
1. Go to Render dashboard
2. Click your service
3. Click **"Logs"** tab

---

## Default Test Credentials

After running `seed_users.js`:

| Username | Password | Role |
|----------|----------|------|
| `user` | `123` | Commuter |
| `admin` | `admin123` | Admin |

---

**Last Updated:** February 22, 2026  
**Support:** Check [SETUP_GUIDE.md](backend/SETUP_GUIDE.md) for backend setup details
