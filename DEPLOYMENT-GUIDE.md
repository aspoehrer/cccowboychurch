# Quick Deployment Guide

This guide will help you get your church website live on the internet quickly.

## Option 1: Deploy to Netlify (Recommended for Beginners)

Netlify offers free hosting with automatic builds from GitHub.

### Steps:

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready to deploy"
   git push
   ```

2. **Sign up for Netlify**
   - Go to https://netlify.com
   - Click "Sign up"
   - Choose "Sign up with GitHub"

3. **Deploy your site**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository (`cccowboychurch`)
   - Netlify will auto-detect the settings
   - Click "Deploy site"

4. **Wait 2-3 minutes** - Your site will be live!

5. **Get your URL**
   - Netlify will give you a URL like: `random-name-123.netlify.app`
   - You can change this to a custom domain in settings

### Updating Your Live Site (Netlify)

Whenever you push changes to GitHub, Netlify automatically rebuilds and updates your site!

```bash
# Make your changes, then:
git add .
git commit -m "Updated content"
git push
# Wait 2-3 minutes, changes are live!
```

---

## Option 2: Deploy to Vercel

Vercel is another excellent free hosting option.

### Steps:

1. **Push your code to GitHub**

2. **Sign up for Vercel**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"

3. **Deploy your site**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel auto-detects Astro
   - Click "Deploy"

4. **Wait 2-3 minutes** - Your site will be live!

### Updating Your Live Site (Vercel)

Like Netlify, Vercel automatically rebuilds when you push to GitHub!

---

## Custom Domain Setup

Both Netlify and Vercel support custom domains (like `yourchurch.com`).

### General Steps:

1. **Buy a domain** from:
   - Namecheap
   - Google Domains
   - GoDaddy
   - etc.

2. **In Netlify/Vercel:**
   - Go to Site Settings → Domain Management
   - Add your custom domain
   - Follow the DNS instructions provided

3. **Update DNS settings** at your domain registrar
   - Add the DNS records provided by Netlify/Vercel
   - Wait 24-48 hours for DNS to propagate

4. **Done!** Your site will be accessible at your custom domain

---

## Local Development & Testing

Before deploying, always test locally:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:4321

# Make changes and see them live!
```

### Build & Preview Production Version

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Environment Variables (If Needed)

If you need to use API keys or secrets:

1. **For local development:** Create a `.env` file (already in .gitignore)
2. **For Netlify:** Go to Site Settings → Environment Variables
3. **For Vercel:** Go to Project Settings → Environment Variables

**Never commit secrets to Git!**

---

## Troubleshooting

### Build Fails

- Check the build logs in Netlify/Vercel dashboard
- Make sure `npm run build` works locally first
- Verify all files are committed to Git

### Site Not Updating

- Wait 2-3 minutes after pushing
- Check deployment status in dashboard
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### 404 Errors

- All routes should work automatically with the included configs
- Check that `netlify.toml` or `vercel.json` is in your repository

---

## Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **Astro Docs**: https://docs.astro.build

---

## Next Steps After Deployment

1. **Customize your content** - See [HOW-TO-UPDATE.md](./HOW-TO-UPDATE.md)
2. **Add your church photos** to `public/gallery/`
3. **Update contact information** in `src/config.ts`
4. **Add events** to `src/content/events/events.yaml`
5. **Test all pages** on mobile and desktop

Congratulations! Your church website is now live! 🎉
