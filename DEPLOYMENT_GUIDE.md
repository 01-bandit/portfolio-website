# Portfolio Website Deployment Guide

## Quick Deployment to Vercel (Recommended - FREE)

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd c:\Users\hamma\Desktop\Extras\PortfolioWebsite
   vercel
   ```

3. **Follow prompts:**
   - Login with GitHub/Email
   - Select project settings (accept defaults)
   - Your site will be live in seconds!

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git remote add origin https://github.com/01-bandit/portfolio-website.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your `portfolio-website` repository
   - Click "Deploy"
   - Done! Auto-deploys on every push

---

## Alternative: Netlify (Also FREE)

### Via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Via Netlify Dashboard:
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder (after running `npm run build`)
3. Or connect GitHub repo for automatic deployments

---

## Before Deployment Checklist

✅ **Test locally:** Visit http://localhost:5173/ and test all features
✅ **Build for production:** Run `npm run build` to ensure no errors
✅ **Check responsive design:** Test on mobile viewport
✅ **Update personal info:** Verify all links and contact details
✅ **Review content:** Check for typos in About section

---

## Custom Domain (Optional)

Both Vercel and Netlify provide free subdomain:
- Vercel: `your-portfolio.vercel.app`
- Netlify: `your-portfolio.netlify.app`

You can add a custom domain later if needed.

---

## Interview Talking Points

"I deployed this portfolio on [Vercel/Netlify] which provides:
- Free hosting with HTTPS
- Automatic deployments from GitHub
- Global CDN for fast loading
- Serverless functions support (for future features)
- Perfect for React/Vite applications"

Good luck with your interview tomorrow! 🚀
