# HOW TO UPDATE YOUR CHURCH WEBSITE

This guide explains how to update your Caney Creek Cowboy Church website. **No coding experience required!** Just follow these step-by-step instructions.

---

## Table of Contents

1. [Adding/Editing Events](#adding-and-editing-events)
2. [Uploading Photos to Gallery](#uploading-photos-to-gallery)
3. [Updating Giving Options](#updating-giving-options)
4. [Embedding Live Streams](#embedding-live-streams)
5. [Editing Service Times](#editing-service-times)
6. [Updating Contact Information](#updating-contact-information)
7. [Adding a Map](#adding-a-map)
8. [Rebuilding the Website](#rebuilding-the-website)

---

## Adding and Editing Events

### Where to Find the Events File
The events file is located at: `src/content/events/events.yaml`

### How to Add a New Event

1. **Open the events file** (`src/content/events/events.yaml`)

2. **Copy the template** at the top of the file (between the dashed lines)

3. **Paste it at the bottom** of the events list

4. **Fill in your event details:**
   ```yaml
   - title: "Your Event Name"
     date: "2024-12-25"
     time: "6:00 PM"
     location: "Fellowship Hall"
     description: "A brief description of your event"
     contact: "email@church.com"
     image: "/images/event-photo.jpg"  # Optional
   ```

5. **Important formatting rules:**
   - Date MUST be in format: `YYYY-MM-DD` (e.g., 2024-12-25)
   - Keep the spacing and indentation exactly as shown
   - Each event starts with a dash (`-`)
   - Keep quotes around text values

### Example: Adding a Potluck Dinner

```yaml
- title: "Church-Wide Potluck"
  date: "2025-01-20"
  time: "12:00 PM"
  location: "Fellowship Hall"
  description: "Bring your favorite dish and join us for fellowship!"
  contact: "office@church.com"
```

### How to Edit an Existing Event

1. Find the event in the `events.yaml` file
2. Change the information you want to update
3. Save the file
4. Rebuild the website (see [Rebuilding](#rebuilding-the-website))

### How to Remove an Event

1. Find the event in the `events.yaml` file
2. Delete all lines for that event (from the `-` to the last line of that event)
3. Save the file
4. Rebuild the website

---

## Uploading Photos to Gallery

The gallery is **automatic** - just add photos to a folder!

### Steps to Add Photos

1. **Locate the gallery folder:** `public/gallery/`

2. **Add your image files** to this folder
   - Supported formats: JPG, JPEG, PNG, GIF, WebP
   - Recommended size: 1200px x 900px or similar
   - Keep file sizes under 2MB for fast loading

3. **Name your files descriptively** (optional but helpful)
   - Good: `christmas-service-2024.jpg`
   - Okay: `IMG_1234.jpg`

4. **Rebuild the website** (see [Rebuilding](#rebuilding-the-website))

5. **Photos will automatically appear** on the Gallery page!

### Tips for Better Photos
- Use landscape (horizontal) orientation when possible
- Ensure good lighting and clarity
- Resize large images before uploading (use a free tool like https://tinypng.com)
- Give photos descriptive names for better organization

### Removing Photos

1. Go to `public/gallery/` folder
2. Delete the image file you want to remove
3. Rebuild the website

---

## Updating Giving Options

### Where to Find Giving Settings
File location: `src/config.ts`

Look for the `giving:` section in this file.

### How to Update Payment Links

1. **Open `src/config.ts`**

2. **Find the giving methods section** (around line 50)

3. **Update the links for each method:**

```typescript
giving: {
  methods: [
    {
      name: "Square",
      enabled: true,  // Set to false to hide this option
      link: "https://square.link/u/YOURLINK",  // ← Replace with your link
      description: "Give securely via credit/debit card"
    },
    {
      name: "PayPal",
      enabled: true,
      link: "https://paypal.me/YOURLINK",  // ← Replace with your link
      description: "Give via PayPal"
    },
    // ... more options
  ]
}
```

### Adding a QR Code for Venmo/Cash App

1. **Get your QR code:**
   - Open Venmo or Cash App
   - Find your QR code in the app
   - Save the image to your computer

2. **Upload the QR code:**
   - Save it to `public/images/` folder
   - Name it something like `venmo-qr.png`

3. **Update the config:**
```typescript
{
  name: "Venmo",
  enabled: true,
  username: "@yourchurch",  // Your Venmo username
  qrCode: "/images/venmo-qr.png",  // Path to your QR code
  description: "Scan QR code or send to @yourchurch"
}
```

### Hiding a Payment Method

Change `enabled: true` to `enabled: false`:

```typescript
{
  name: "Cash App",
  enabled: false,  // ← This method won't show on the site
  // ... rest of settings
}
```

---

## Embedding Live Streams

### Where to Update Stream Embeds
File location: `src/config.ts`

Look for the `liveStream:` section.

### Getting Your YouTube Embed Code

1. **Go to your YouTube video or live stream**

2. **Click the "Share" button** below the video

3. **Click "Embed"**

4. **Copy the entire `<iframe>` code** that appears

5. **Paste it into the config file**

### Example: Adding Sunday Service Stream

1. **Open `src/config.ts`**

2. **Find the `liveStream.sunday` section**

3. **Replace the placeholder with your embed code:**

```typescript
sunday: {
  enabled: true,
  platform: "YouTube",
  embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  streamTime: "Sunday at 10:00 AM"
}
```

### For Facebook Live

1. **Go to your Facebook video**
2. **Click the three dots (...)** in the top right
3. **Select "Embed"**
4. **Copy the code** and paste it into `embedCode:`

### Disabling a Stream

Set `enabled: false`:

```typescript
wednesday: {
  enabled: false,  // This stream won't appear on the site
  // ... rest of settings
}
```

---

## Editing Service Times

### Where to Find Service Times
File location: `src/config.ts`

Look for the `serviceTimes:` section.

### How to Update Service Times

1. **Open `src/config.ts`**

2. **Find the serviceTimes array:**

```typescript
serviceTimes: [
  {
    day: "Sunday",
    time: "10:00 AM",  // ← Change this
    type: "Worship Service",  // ← Or this
    description: "Join us for worship, fellowship, and the Word"
  },
  // Add more services here
]
```

3. **Change the times or add new services**

### Adding a New Service

Copy one of the existing service blocks and add it to the list:

```typescript
serviceTimes: [
  {
    day: "Sunday",
    time: "10:00 AM",
    type: "Worship Service",
    description: "Join us for worship, fellowship, and the Word"
  },
  {
    day: "Sunday",  // ← New service
    time: "6:00 PM",
    type: "Evening Service",
    description: "Evening worship and prayer"
  }
]
```

---

## Updating Contact Information

### Where to Find Contact Settings
File location: `src/config.ts`

Look for the `contact:` section at the top.

### What You Can Update

```typescript
contact: {
  phone: "(555) 123-4567",  // ← Your church phone
  email: "info@yourchurch.com",  // ← Your church email
  address: {
    street: "1234 Ranch Road",  // ← Your street address
    city: "Your City",  // ← Your city
    state: "TX",  // ← Your state
    zip: "12345"  // ← Your ZIP code
  }
}
```

### Steps to Update

1. Open `src/config.ts`
2. Find the `contact:` section
3. Replace the placeholder text with your actual information
4. Save the file
5. Rebuild the website

---

## Adding a Map

### Getting Your Google Maps Embed Code

1. **Go to Google Maps** (https://www.google.com/maps)

2. **Search for your church address**

3. **Click the "Share" button** (left sidebar)

4. **Click the "Embed a map" tab**

5. **Select your preferred size** (Medium is recommended)

6. **Click "COPY HTML"**

### Adding the Map to Your Website

1. **Open `src/config.ts`**

2. **Find the `mapEmbed:` section** (near the bottom)

3. **Paste your embed code:**

```typescript
mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
```

4. **Save the file**

5. **Rebuild the website**

---

## Rebuilding the Website

**After making ANY changes, you MUST rebuild the website for them to appear online.**

### If You're Using a Local Development Environment

Open your terminal/command prompt and run:

```bash
npm run build
```

### If You're Using Netlify or Vercel

1. **Save your changes**
2. **Commit them to Git:**
   ```bash
   git add .
   git commit -m "Updated church website content"
   git push
   ```
3. **Your site will automatically rebuild!** (Usually takes 2-5 minutes)

### Checking Your Changes Locally (Before Publishing)

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open your browser to: `http://localhost:4321`

3. Check that your changes look correct

4. If everything looks good, rebuild and publish!

---

## Troubleshooting

### My Events Aren't Showing Up

- Check that the date format is correct: `YYYY-MM-DD`
- Make sure there are no extra spaces or missing quotes
- Verify the file is saved
- Rebuild the website

### My Gallery Photos Aren't Appearing

- Check that images are in `public/gallery/` folder
- Verify file extensions are: `.jpg`, `.jpeg`, `.png`, `.gif`, or `.webp`
- Make sure file names don't have spaces (use dashes instead)
- Rebuild the website

### My Live Stream Isn't Showing

- Verify you pasted the ENTIRE `<iframe>` code
- Check that `enabled: true` is set
- Make sure you saved the `config.ts` file
- Rebuild the website

### Changes Aren't Appearing on the Live Site

- Make sure you saved all files
- Rebuild the website (`npm run build`)
- If using Netlify/Vercel, push your changes to Git
- Wait 2-5 minutes for deployment
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## Need More Help?

If you're stuck or need assistance:

1. Check the README.md file for technical setup information
2. Contact your website administrator
3. Email your web hosting support team

---

## Quick Reference: File Locations

| What to Update | File Location |
|---------------|---------------|
| Events | `src/content/events/events.yaml` |
| Gallery Photos | `public/gallery/` |
| Giving Options | `src/config.ts` (giving section) |
| Live Streams | `src/config.ts` (liveStream section) |
| Service Times | `src/config.ts` (serviceTimes section) |
| Contact Info | `src/config.ts` (contact section) |
| Map | `src/config.ts` (mapEmbed section) |

---

**Remember:** Always save your files and rebuild the website after making changes!

**Pro Tip:** Make changes in small batches and check them before making more changes. This makes it easier to find and fix any mistakes.
