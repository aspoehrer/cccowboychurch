// Site Configuration
// This file contains all the main settings for your church website.
// Edit the values below to customize your site.

export const siteConfig = {
  // Basic Site Information
  siteName: "Caney Creek Cowboy Church",
  siteTagline: "Where Faith Meets the Frontier",
  
  // Contact Information - EDIT THESE WITH YOUR CHURCH'S INFO
  contact: {
    phone: "(936) 231-1172",
    email: "markgrimesministries@gmail.com",
    address: {
      street: "17703 Nonesuch Rd",
      city: "Conroe",
      state: "TX",
      zip: "77306"
    }
  },

  // Service Times - EDIT THESE WITH YOUR ACTUAL SERVICE TIMES
  serviceTimes: [
    {
      day: "Sunday",
      time: "8:00 AM",
      type: "Breakfast",
      description: "Start your Sunday with breakfast and fellowship"
    },
    {
      day: "Sunday",
      time: "8:30 AM",
      type: "First Worship Service",
      description: "Early morning worship service"
    },
    {
      day: "Sunday",
      time: "8:45 AM",
      type: "Sunday School",
      description: "Multiple Bible study classes for all ages"
    },
    {
      day: "Sunday",
      time: "10:00 AM",
      type: "Second Worship Service",
      description: "Main worship service - Lambs Center open 8:30 AM - 11:00 AM"
    },
    {
      day: "Wednesday",
      time: "7:00 PM",
      type: "Service",
      description: "Mid-week worship and Bible study"
    },
    {
      day: "Friday",
      time: "7:00 PM",
      type: "Rejoice in Recovery",
      description: "Healing from addiction, hurts, and life's struggles"
    }
  ],

  // Social Media Links - EDIT OR ADD YOUR SOCIAL MEDIA LINKS
  social: {
    facebook: "https://www.facebook.com/CaneyCreekCowboyChurch",
    instagram: "",
    youtube: "",
    // Add more social links as needed
  },

  // Giving Options - EDIT THESE WITH YOUR PAYMENT LINKS
  giving: {
    methods: [
      {
        name: "Square",
        enabled: true,
        link: "https://square.link/u/yourchurch", // Replace with your Square link
        description: "Give securely via credit/debit card"
      },
      {
        name: "PayPal",
        enabled: true,
        link: "https://paypal.me/yourchurch", // Replace with your PayPal link
        description: "Give via PayPal"
      },
      {
        name: "Venmo",
        enabled: true,
        username: "@yourchurch", // Replace with your Venmo username
        qrCode: "/images/venmo-qr.png", // Add your Venmo QR code image
        description: "Scan QR code or send to @yourchurch"
      },
      {
        name: "Cash App",
        enabled: true,
        username: "$yourchurch", // Replace with your Cash App username
        qrCode: "/images/cashapp-qr.png", // Add your Cash App QR code image
        description: "Scan QR code or send to $yourchurch"
      }
    ],
    mailInAddress: {
      name: "Caney Creek Cowboy Church",
      street: "17703 Nonesuch Rd",
      city: "Conroe",
      state: "TX",
      zip: "77306"
    }
  },

  // Live Stream Settings - PASTE YOUR STREAM EMBED CODES HERE
  liveStream: {
    // Sunday Service Stream
    sunday: {
      enabled: true,
      platform: "YouTube", // YouTube, Facebook, Vimeo, etc.
      embedCode: `<!-- PASTE YOUR YOUTUBE EMBED CODE HERE -->
<!-- Example: <iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...></iframe> -->`,
      streamTime: "Sunday at 10:00 AM"
    },
    // Wednesday Service Stream
    wednesday: {
      enabled: true,
      platform: "YouTube",
      embedCode: `<!-- PASTE YOUR YOUTUBE EMBED CODE HERE -->`,
      streamTime: "Wednesday at 7:00 PM"
    }
  },

  // Map Embed - REPLACE WITH YOUR GOOGLE MAPS EMBED CODE
  mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6969842389386!2d-95.4833!3d30.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEwJzU5LjkiTiA5NcKwMjgnNTkuOSJX!5e0!3m2!1sen!2sus!4v1234567890" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<!-- Note: To get your actual embed code: Go to Google Maps > Search for '17703 Nonesuch Rd, Conroe, TX 77306' > Click Share > Embed a map > Copy HTML -->`,

  // SEO Settings
  seo: {
    description: "Welcome to Caney Creek Cowboy Church - a community of faith with a western heritage. Join us for Sunday worship and Wednesday Bible study.",
    keywords: "cowboy church, christian church, worship, bible study, western church"
  }
};
