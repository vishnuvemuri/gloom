# GitHub Actions Keep-Alive Setup

## 🚀 How to Set Up GitHub Actions to Keep Your Backend Awake

### Step 1: Deploy Your Backend First
1. Deploy your backend to Render as a Web Service
2. Get your backend URL (e.g., `https://gloomdev-api.onrender.com`)

### Step 2: Update the Workflow Files
1. Open `.github/workflows/keep-alive.yml`
2. Replace `YOUR-BACKEND-URL` with your actual backend URL
3. Open `.github/workflows/keep-alive-backup.yml`
4. Replace `YOUR-BACKEND-URL` with your actual backend URL

### Step 3: Push to GitHub
```bash
git add .
git commit -m "Add GitHub Actions keep-alive workflows"
git push origin main
```

### Step 4: Verify the Workflows
1. Go to your GitHub repository
2. Click on "Actions" tab
3. You should see the workflows running every 5-10 minutes
4. Check the logs to ensure they're pinging your backend successfully

## ✅ What This Does:
- **Primary Workflow**: Pings your backend every 10 minutes
- **Backup Workflow**: Pings your backend every 5 minutes
- **Result**: Your backend will never sleep on Render's free tier!

## 🔧 Troubleshooting:
- If workflows fail, check your backend URL is correct
- Make sure your backend has a `/api/health` endpoint
- Check GitHub Actions logs for detailed error messages

## 💰 Cost:
- **Completely FREE** - GitHub Actions has generous free tier
- No limits on public repositories
- No credit card required
