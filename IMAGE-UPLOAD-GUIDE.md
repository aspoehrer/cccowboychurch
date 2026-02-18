# Church Photos Upload Guide

This guide will help you add the 13 church photos to the website. The website has been updated with all the necessary image placeholders and styling - you just need to add the actual image files.

## Quick Start

All you need to do is add your image files to the correct folders with the exact file names listed below. The website will automatically display them once the files are present.

## Where to Add Images

All images should be placed in `/public/images/` in the appropriate subdirectory:

### 1. Homepage Hero Image

**Location:** `/public/images/hero/`

- **hero-welcome.jpg** - Large hero image showing church building exterior with Pastor Mark and Mary Grimes
  - This will display at the top of the homepage with the text overlay "We would love to see you! Sundays 10am, Wednesdays 7pm"
  - Recommended size: 2000px wide × 1200px high
  - Format: JPG

### 2. Ministry Photos

**Location:** `/public/images/ministries/`

- **arena-team.jpg** - Arena action photo for Arena Team Ministry
  - Recommended size: 1200px wide × 800px high
  
- **food-drive.jpg** - Food Drive pallets of food boxes
  - Recommended size: 1200px wide × 800px high
  
- **lambs-center.jpg** - Children's Ministry sign (Rose Training Center)
  - Recommended size: 1200px wide × 800px high
  
- **thurman-family.jpg** - Josh & Toni Thurman photo (Children's Ministry leaders)
  - Recommended size: 1200px wide × 800px high
  
- **motorcycle-ministry.jpg** - Motorcycle Ministry Jesus Saves vests
  - Recommended size: 1200px wide × 800px high
  
- **rejoice-recovery.jpg** - Rejoice in Recovery graphic
  - Recommended size: 1200px wide × 800px high

### 3. Event Photos

**Location:** `/public/images/events/`

- **love-revival-2025.jpg** - Love Revival promo graphic
  - Recommended size: 1200px wide × 800px high
  
- **buckle-series.jpg** - Buckle Series schedule graphic
  - Recommended size: 1200px wide × 800px high

### 4. About/Pastor Photos

**Location:** `/public/images/about/`

- **pastor-mark-preaching.jpg** - Pastor Mark Grimes preaching
  - Used on both Homepage and About page
  - Recommended size: 800px wide × 1000px high (portrait orientation)
  
- **bible-heart.jpg** - Bible with heart-shaped pages
  - Used in Statement of Faith section on About page
  - Recommended size: 1200px wide × 800px high

### 5. Service Photos

**Location:** `/public/images/services/`

- **wednesday-night-service.jpg** - Wednesday Night "Got my Bible!" photo
  - Recommended size: 1200px wide × 600px high

## How to Upload Images

### Method 1: Using Git (Recommended)

1. Clone or pull the latest changes from your repository
2. Add your image files to the appropriate folders as listed above
3. Commit and push your changes:
   ```bash
   git add public/images/
   git commit -m "Add church photos"
   git push
   ```

### Method 2: Direct Upload (if using Netlify or similar)

1. Access your hosting provider's file manager
2. Navigate to the `/public/images/` directory
3. Upload files to the appropriate subdirectories

### Method 3: Using GitHub Web Interface

1. Go to your GitHub repository
2. Navigate to `public/images/`
3. Click "Add file" → "Upload files"
4. Drag and drop your images into the correct folders
5. Commit the changes

## Image Optimization Tips

Before uploading, optimize your images for the web:

1. **Resize images** to the recommended dimensions listed above
2. **Compress images** using tools like:
   - [TinyPNG](https://tinypng.com/) (online)
   - [ImageOptim](https://imageoptim.com/) (Mac)
   - [JPEG Optimizer](https://jpeg-optimizer.com/) (online)
3. **Target file size:** Aim for 200-500KB per image (smaller is better for faster loading)
4. **Format:** Use JPG for photos, PNG for graphics with transparency

## Verification Checklist

After uploading your images, verify them on your website:

- [ ] Homepage hero image displays correctly
- [ ] Pastor Mark's photo shows on homepage
- [ ] Wednesday night service photo appears in service times section
- [ ] All 6 ministry photos display on ministries page
- [ ] Both event graphics show on events page  
- [ ] Pastor photo displays on about page
- [ ] Bible heart image shows in beliefs section
- [ ] All images look good on mobile devices
- [ ] Images load quickly (check file sizes)

## Troubleshooting

### Image not displaying?

1. **Check the filename** - Must match exactly (case-sensitive):
   - Correct: `hero-welcome.jpg`
   - Wrong: `Hero-Welcome.jpg` or `hero-welcome.jpeg`

2. **Check the location** - Image must be in the correct subdirectory:
   - Correct: `/public/images/hero/hero-welcome.jpg`
   - Wrong: `/public/images/hero-welcome.jpg`

3. **Check the format** - Should be `.jpg` not `.jpeg` or `.png` (unless specified)

4. **Clear browser cache** - Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

5. **Check file permissions** - Ensure images are readable (644 permissions on Unix systems)

### Image looks stretched or distorted?

- Use the recommended dimensions listed in this guide
- The website uses `object-fit: cover` to crop images to fit - ensure your subject is centered

### Image file too large?

- Compress your images before uploading (see optimization tips above)
- Aim for under 500KB per image

## Current Status

✅ Image directory structure created  
✅ All page layouts updated with image placeholders  
✅ Responsive styling implemented  
✅ Alt text added for accessibility  
✅ Lazy loading enabled (except hero image)  

⏳ **Next Step:** Add the actual image files to the directories listed above

## Need Help?

If you encounter any issues:

1. Check that filenames match exactly (including .jpg extension)
2. Verify images are in the correct subdirectories
3. Try clearing your browser cache
4. Check the browser console for any errors (F12 → Console tab)

## File Structure Reference

```
public/
  images/
    ├── hero/
    │   └── hero-welcome.jpg
    ├── ministries/
    │   ├── arena-team.jpg
    │   ├── food-drive.jpg
    │   ├── lambs-center.jpg
    │   ├── thurman-family.jpg
    │   ├── motorcycle-ministry.jpg
    │   └── rejoice-recovery.jpg
    ├── events/
    │   ├── love-revival-2025.jpg
    │   └── buckle-series.jpg
    ├── about/
    │   ├── pastor-mark-preaching.jpg
    │   └── bible-heart.jpg
    └── services/
        └── wednesday-night-service.jpg
```

---

**Questions?** Refer to the HOW-TO-UPDATE.md file for general website updates, or consult the PROJECT-SUMMARY.md for overall project information.
