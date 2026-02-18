# Caney Creek Cowboy Church Website

A modern, easy-to-maintain church website built with Astro. This website includes all the essential pages for a church: Home, About, Ministries, Events, Gallery, Giving, Live Stream, and Contact.

## ✨ Features

- **Fast & Modern**: Built with Astro for blazing-fast performance
- **Easy Content Management**: Update events, photos, and settings without coding
- **Responsive Design**: Looks great on desktop, tablet, and mobile
- **Western Theme**: Custom cowboy-themed styling that's professional yet welcoming
- **Auto-Populating Gallery**: Just drop images in a folder, they automatically appear
- **Simple Event Management**: Copy-paste template to add events
- **Multiple Giving Options**: Support for Square, PayPal, Venmo, Cash App, and more
- **Live Stream Ready**: Easy embed for YouTube/Facebook streams
- **SEO Optimized**: Built-in SEO best practices

## 📁 Project Structure

```
/
├── public/
│   ├── gallery/          # Drop photos here for auto gallery
│   ├── images/           # Static images
│   └── favicon.svg       # Site icon
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/          # Content data
│   │   └── events/
│   │       └── events.yaml  # Event listings (easy to edit!)
│   ├── layouts/
│   │   └── Layout.astro  # Main page layout
│   ├── pages/            # Website pages
│   │   ├── index.astro   # Homepage
│   │   ├── about.astro
│   │   ├── ministries.astro
│   │   ├── events.astro
│   │   ├── gallery.astro
│   │   ├── giving.astro
│   │   ├── livestream.astro
│   │   └── contact.astro
│   ├── styles/
│   │   └── global.css    # Global styles
│   └── config.ts         # Main configuration file (EDIT THIS!)
├── HOW-TO-UPDATE.md      # Step-by-step update guide for non-technical users
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

1. **Clone this repository** (if you haven't already)
   ```bash
   git clone https://github.com/aspoehrer/cccowboychurch.git
   cd cccowboychurch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:4321`

### Making It Your Own

Before deploying, customize the site with your church's information:

1. **Edit `src/config.ts`** - Update all the placeholder content:
   - Church name and tagline
   - Contact information (phone, email, address)
   - Service times
   - Social media links
   - Giving payment links
   - Live stream embed codes

2. **Add your events** - Edit `src/content/events/events.yaml`

3. **Add photos** - Drop images into `public/gallery/`

4. **Customize content** - Edit the page files in `src/pages/` if needed

See **[HOW-TO-UPDATE.md](./HOW-TO-UPDATE.md)** for detailed, non-technical instructions.

## 🛠️ Available Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                             |
| `npm run dev`          | Start local dev server at `localhost:4321`       |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 📦 Deployment

This site is ready to deploy to popular hosting platforms:

### Deploy to Netlify

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Customized church website"
   git push
   ```

2. **Sign up for Netlify** (free): https://netlify.com

3. **Connect your repository:**
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Done!** Your site will be live in 2-3 minutes

### Deploy to Vercel

1. **Push your code to GitHub**

2. **Sign up for Vercel** (free): https://vercel.com

3. **Import your repository:**
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Vercel auto-detects Astro settings
   - Click "Deploy"

4. **Done!** Your site will be live in 2-3 minutes

### Deploy to Other Platforms

This site can also be deployed to:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting service

See [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/) for platform-specific instructions.

## 📝 Content Management Guide

For detailed instructions on updating content (for non-technical users), see:
- **[HOW-TO-UPDATE.md](./HOW-TO-UPDATE.md)** - Complete guide for church staff

### Quick Updates:

**Add an Event:**
1. Open `src/content/events/events.yaml`
2. Copy the template at the top
3. Paste and fill in your event details
4. Save and rebuild

**Add Gallery Photos:**
1. Add image files to `public/gallery/`
2. Rebuild the site
3. Photos automatically appear!

**Update Contact Info:**
1. Open `src/config.ts`
2. Find the `contact:` section
3. Replace with your information
4. Save and rebuild

## 🎨 Customization

### Colors & Theme

Edit colors in `src/styles/global.css`:

```css
:root {
  --color-primary: #8B4513; /* Saddle Brown */
  --color-secondary: #D2691E; /* Burnt Sienna */
  --color-accent: #DAA520; /* Goldenrod */
  /* ... more colors */
}
```

### Typography

Change fonts in `src/styles/global.css`:

```css
:root {
  --font-heading: 'Georgia', 'Times New Roman', serif;
  --font-body: 'Arial', 'Helvetica', sans-serif;
}
```

## 🤝 Support

- **Content Updates**: See [HOW-TO-UPDATE.md](./HOW-TO-UPDATE.md)
- **Technical Issues**: Check [Astro Documentation](https://docs.astro.build)
- **Deployment Help**: See deployment platform docs (Netlify/Vercel)

## 📄 License

ISC

## 🙏 Credits

Built with:
- [Astro](https://astro.build/) - Static site framework
- [js-yaml](https://github.com/nodeca/js-yaml) - YAML parsing for events

---

**Ready to get started?** Follow the [Quick Start](#-quick-start) guide above!

**Need help updating content?** See [HOW-TO-UPDATE.md](./HOW-TO-UPDATE.md)!