# Decap CMS Usage Guide for Church Staff

Welcome to the Decap CMS admin panel! This guide will help you manage your church website content without needing to edit code.

## 📍 Accessing the Admin Panel

Once the site is deployed to Netlify, you can access the admin panel at:
```
https://your-site-name.netlify.app/admin
```

You'll need to log in with your email address (the site administrator will invite you).

## 🎯 Quick Start

### First Time Setup (Site Administrator Only)

1. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com) and sign up
   - Connect your GitHub repository
   - Deploy the site

2. **Enable Netlify Identity**
   - Go to your site settings in Netlify
   - Click on "Identity" in the left menu
   - Click "Enable Identity"

3. **Enable Git Gateway**
   - In Identity settings, scroll down to "Services"
   - Click "Enable Git Gateway"
   - This allows the CMS to save changes to GitHub

4. **Invite Users**
   - In Identity tab, click "Invite users"
   - Enter email addresses of staff who need access
   - They'll receive an email to set up their account

### For Content Editors

Once you receive your invitation email:
1. Click the link in the email
2. Set your password
3. Go to `your-site-name.netlify.app/admin`
4. Log in with your email and password

## 📝 Managing Content

### Adding a New Event

1. Go to `/admin` and log in
2. Click **"Events"** in the left sidebar
3. Click **"New Event"** button
4. Fill in the form:
   - **Title**: Name of the event (e.g., "Sunday Morning Service")
   - **Date**: Start date and time
   - **End Date**: (optional) When the event ends
   - **Location**: Default is church address, change if needed
   - **Description**: Full details about the event (supports rich text formatting)
   - **Image**: Click "Choose an image" to upload an event flyer or photo
   - **Featured**: Check this box to highlight the event on the homepage

5. Click **"Publish"** (not "Save as Draft")
6. Your changes will be committed to GitHub and the site will rebuild automatically (takes 2-5 minutes)

### Uploading Images

**For Events or Ministries:**
1. When editing content, click the image field
2. Click "Choose an image"
3. Either:
   - Drag and drop an image file
   - Click "Upload" and browse for a file
4. The image will be saved to `public/images/`

**Best Practices:**
- Use JPG for photos (smaller file size)
- Use PNG for graphics with text or transparency
- Recommended image sizes:
  - Event images: 1200px wide
  - Ministry photos: 800px wide
  - Hero images: 1920px wide

### Editing Ministries

1. Go to `/admin`
2. Click **"Ministries"**
3. Either:
   - Click "New Ministry" to create one
   - Click an existing ministry to edit

Fields to fill:
- **Title**: Ministry name (e.g., "Youth Ministry")
- **Leader**: Name of ministry leader (optional)
- **Contact**: Email or phone (optional)
- **Description**: About the ministry and its activities
- **Image**: Upload a photo of the ministry in action
- **Icon**: Name of icon to use (e.g., "church", "heart", "hands")
- **Order**: Number to control display order (lower = first)

### Editing Page Content

**About Page:**
1. Go to `/admin`
2. Click **"Pages"** → **"About Page"**
3. Edit mission statement, purpose, faith statement, pastor's message
4. Click **"Publish"**

**Contact Information:**
1. Go to `/admin`
2. Click **"Pages"** → **"Contact Information"**
3. Update address, phone, email, Facebook URL
4. Click **"Publish"**

### Photo Gallery

1. Go to `/admin`
2. Click **"Photo Gallery"**
3. Click **"New Photo Gallery"**
4. Fill in:
   - **Title**: Photo name or event name
   - **Image**: Upload the photo
   - **Caption**: (optional) Description
   - **Date**: When the photo was taken
5. Click **"Publish"**

The photo will appear in the gallery page automatically.

## 💡 Tips and Tricks

### Formatting Text (Markdown)

In description fields, you can use Markdown for formatting:

```markdown
# Large Heading
## Medium Heading
### Small Heading

**bold text**
*italic text*

- Bullet point 1
- Bullet point 2

1. Numbered item
2. Numbered item

[Link text](https://website.com)
```

### Draft vs. Publish

- **Save as Draft**: Saves your changes but doesn't publish them to the live site
- **Publish**: Commits changes to GitHub and triggers a site rebuild (goes live in 2-5 minutes)

### Editorial Workflow (Optional)

For review before publishing:
1. Save as Draft
2. Set status to "In Review"
3. Another editor can review
4. They click "Publish" when ready

### Checking Your Changes

After publishing:
1. Wait 2-5 minutes for Netlify to rebuild
2. Visit your live site to see the changes
3. Use your browser's refresh button (Ctrl+R or Cmd+R)

### Common Issues

**"Can't log in"**
- Make sure you're using the email that received the invitation
- Try resetting your password

**"Changes not appearing"**
- Wait a full 5 minutes for the site to rebuild
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check Netlify dashboard for build status

**"Image too large"**
- Resize images before uploading
- Recommended max size: 2MB per image
- Use tools like [TinyPNG](https://tinypng.com) to compress images

**"Can't upload image"**
- Check file format (JPG, PNG, GIF only)
- Make sure file name has no special characters
- Try reducing file size

## 🔒 Security Best Practices

- **Never share your login credentials**
- Use a strong, unique password
- Log out when finished editing
- Only invite trusted staff members
- Administrator should regularly review who has access

## 📧 Getting Help

If you have questions or run into issues:
1. Check this guide first
2. Contact the website administrator
3. Check [Decap CMS Documentation](https://decapcms.org/docs/)

## 🚀 Quick Reference

| Task | Steps |
|------|-------|
| Add Event | Events → New Event → Fill form → Publish |
| Edit Event | Events → Click event → Edit → Publish |
| Delete Event | Events → Click event → Delete entry |
| Upload Image | Click image field → Upload → Choose file |
| Edit About Page | Pages → About Page → Edit → Publish |
| Add Ministry | Ministries → New Ministry → Fill form → Publish |

## 📊 Content Update Workflow

```
1. Log in to /admin
2. Make your changes
3. Preview (if needed)
4. Click "Publish"
5. Wait 2-5 minutes
6. Check live site
7. Done! 🎉
```

## 🎓 Training Recommendations

For new users:
1. Practice adding a test event first
2. Try uploading an image
3. Edit and then delete the test content
4. Then start adding real content

Remember: You can't break anything! All changes are version controlled, so mistakes can be reversed.

---

**Happy content managing!** If you have suggestions for improving this guide, please let the administrator know.
