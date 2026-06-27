export const categories = [
  "All",
  "Web",
  "Mobile App",
  "AI Tools",
] as const;

export const statusStyles = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Developing: "border-blue-400/30 bg-blue-400/10 text-blue-300",
  Planned: "border-purple-400/30 bg-purple-400/10 text-purple-300",
  Concept: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
} as const;

export type ProductCategory =
  | "Web"
  | "Mobile App"
  | "AI Tools";

export type ProductStatus =
  | "Live"
  | "Developing"
  | "Planned"
  | "Concept";

export interface Product {
  title: string;
  slug: string;
  category: ProductCategory;
  status: ProductStatus;

  links: {
    website: string | null;
    playStore: string | null;
    appStore: string | null;
  };

  shortDescription: string;
  headline: string;
  description: string;

  features: string[];
  useCases: string[];
}

export const products: Product[] = [
  {
    title: "File Compression",
    slug: "file-compression",
    category: "Mobile App",
    status: "Developing",

    links: {
      website: "https://compress.purplepie.io",
      playStore: null,
      appStore: null,
    },

    shortDescription:
      "Compress images, PDFs, ZIP files, and videos directly in browser.",

    headline:
      "Fast, secure browser-based file compression without uploads.",

    description:
      "File Compression is a privacy-first utility that helps users compress images, PDFs, ZIP archives, and videos directly in their browser. Files remain on the device, improving privacy, speed, and reliability while reducing storage and upload sizes.",

    features: [
      "Image compression",
      "PDF compression",
      "ZIP file creation",
      "Video compression",
      "Drag and drop support",
      "Local browser processing",
      "No file uploads",
      "Cross-platform compatibility",
    ],

    useCases: [
      "Reduce image size",
      "Optimize website assets",
      "Compress PDFs for email",
      "Prepare files for upload",
      "Save storage space",
      "Improve page speed",
    ],
  },

  {
    title: "JSON to TOON Converter",
    slug: "json-to-toon",
    category: "Web",
    status: "Developing",

    links: {
      website: null,
      playStore: null,
      appStore: null,
    },

    shortDescription:
      "Convert JSON data into clean TOON format for AI and developers.",

    headline:
      "Transform complex JSON into a clean, token-efficient format.",

    description:
      "JSON to TOON Converter helps developers, prompt engineers, and AI builders convert deeply nested JSON structures into a cleaner TOON representation that is easier to read, process, and include in AI workflows.",

    features: [
      "JSON editor",
      "Instant conversion",
      "TOON formatting",
      "Copy output",
      "Syntax validation",
      "Developer-friendly interface",
      "Browser-based workflow",
    ],

    useCases: [
      "Prompt engineering",
      "AI context optimization",
      "API response cleanup",
      "Data transformation",
      "Developer tooling",
      "Documentation formatting",
    ],
  },

  {
    title: "AI Text to Human Text",
    slug: "ai-text-to-human-text",
    category: "AI Tools",
    status: "Planned",

    links: {
      website: null,
      playStore: null,
      appStore: null,
    },

    shortDescription:
      "Rewrite AI-generated text into natural, human-like content.",

    headline:
      "Make AI-generated writing sound natural and authentic.",

    description:
      "AI Text to Human Text helps creators, marketers, students, and professionals improve AI-generated content by rewriting it into more natural, readable, and human-sounding language while preserving meaning.",

    features: [
      "Humanization engine",
      "Tone adjustment",
      "Readability improvements",
      "Grammar enhancement",
      "Content refinement",
      "Fast processing",
    ],

    useCases: [
      "Blog writing",
      "Content marketing",
      "Professional emails",
      "Website copy",
      "Social media content",
      "AI content cleanup",
    ],
  },

  {
    title: "Shlok App",
    slug: "shlok-app",
    category: "Mobile App",
    status: "Planned",

    links: {
      website: "https://shlok.purplepie.io",
      playStore:
        "https://play.google.com/store/apps/details?id=com.purplepie.shlok",
      appStore:
        "https://apps.apple.com/app/shlok-app/id123456789",
    },

    shortDescription:
      "Read and explore Shlok, Gita, and Mahabharat content in one app.",

    headline:
      "Discover timeless Indian wisdom through a modern mobile experience.",

    description:
      "Shlok App brings together Shlok, Bhagavad Gita teachings, Mahabharat stories, and spiritual learning resources in a simple, accessible mobile experience designed for daily reading and reflection.",

    features: [
      "Daily shlok",
      "Bhagavad Gita content",
      "Mahabharat stories",
      "Bookmarks",
      "Favorites",
      "Search functionality",
      "Offline reading",
      "Personal learning journey",
    ],

    useCases: [
      "Daily spiritual reading",
      "Learning Sanskrit verses",
      "Understanding Gita teachings",
      "Cultural education",
      "Personal development",
      "Family learning",
    ],
  },

  {
    title: "Fitness GPS Tracker",
    slug: "fitness-gps-tracker",
    category: "Mobile App",
    status: "Concept",

    links: {
      website: null,
      playStore: null,
      appStore: null,
    },

    shortDescription:
      "Track running, walking, distance, speed, and fitness activities.",

    headline:
      "Simple fitness tracking powered by accurate GPS insights.",

    description:
      "Fitness GPS Tracker helps users monitor outdoor activities including running, walking, cycling, and workouts through real-time location tracking, performance metrics, and fitness analytics.",

    features: [
      "GPS route tracking",
      "Distance monitoring",
      "Speed tracking",
      "Workout history",
      "Activity analytics",
      "Goal tracking",
    ],

    useCases: [
      "Running",
      "Walking",
      "Cycling",
      "Fitness challenges",
      "Outdoor training",
      "Progress monitoring",
    ],
  },
{
  title: "MindScroll",
  slug: "mindscroll",
  category: "Mobile App",
  status: "Developing",

  links: {
    website: null,
    playStore: null,
    appStore: null,
  },

  shortDescription:
    "Reduce social media addiction with mindful scrolling and screen-time awareness.",

  headline:
    "Take back your attention without giving up the content you love.",

  description:
    "MindScroll is a digital wellbeing app that helps users build healthier social media habits. It overlays a floating widget on apps like Instagram, YouTube Shorts, and TikTok to show how much time has been spent scrolling, how many reels or shorts have been watched, and gentle reminders to take breaks. Instead of blocking entertainment, it encourages mindful usage through goals, insights, and habit tracking.",

  features: [
    "Floating widget for Instagram, YouTube Shorts, and TikTok",
    "Real-time scroll timer",
    "Reels and Shorts counter",
    "Daily screen-time analytics",
    "Custom usage limits and reminders",
    "Focus mode with break prompts",
    "Weekly habit reports",
    "Achievement badges for healthy habits",
  ],

  useCases: [
    "Reduce social media addiction",
    "Limit endless scrolling",
    "Improve focus and productivity",
    "Build healthier digital habits",
    "Track daily screen time",
    "Digital wellbeing for students and professionals",
  ],
},
 {
  title: "WaitPay",
  slug: "waitpay",
  category: "Web",
  status: "Concept",

  links: {
    website: null,
    playStore: null,
    appStore: null,
  },

  shortDescription:
    "Turn loading screens into a reward-powered advertising channel.",

  headline:
    "Earn rewards while you wait. Help AI apps monetize every loading second.",

  description:
    "WaitPay is an advertising platform that transforms application loading screens into monetizable moments. Developers integrate a lightweight SDK that displays short sponsored cards, product showcases, or brand messages while users wait for AI responses, uploads, or processing tasks. Users earn points or rewards for viewing these sponsored experiences, brands gain high-attention impressions, and developers unlock a new revenue stream without interrupting the core product experience.",

  features: [
    "SDK for web and mobile apps",
    "Sponsored loading screen cards",
    "Reward points for users",
    "Brand campaign dashboard",
    "Developer revenue sharing",
    "Targeted ad delivery",
    "Analytics and engagement metrics",
    "Custom branded loading experiences",
  ],

  useCases: [
    "AI chat applications",
    "Image generation tools",
    "Video rendering platforms",
    "File upload workflows",
    "Code generation tools",
    "Cloud dashboards",
  ],
  },
//   {
//   "title": "DevScale Labs",
//   "slug": "devscale-labs",
//   "category": "Software Development Agency",
//   "status": "Concept",

//   "links": {
//     "website": null,
//     "playStore": null,
//     "appStore": null
//   },

//   "shortDescription": "AI-powered software agency enabling junior developers to deliver senior-level solutions.",

//   "headline": "Transforming junior talent into high-performing engineering teams.",

//   "description": "DevScale Labs combines AI-assisted development, senior engineering mentorship, reusable architectures, and standardized workflows to help 1-2 year developers successfully deliver complex software projects typically handled by experienced engineering teams.",

//   "features": [
//     "AI-assisted development",
//     "Senior architect reviews",
//     "Reusable code frameworks",
//     "Project delivery management",
//     "Automated testing pipelines",
//     "Code quality monitoring",
//     "Technical mentorship",
//     "Knowledge sharing platform",
//     "Performance tracking",
//     "Client collaboration portal"
//   ],

//   "useCases": [
//     "Startup MVP development",
//     "SaaS applications",
//     "E-commerce platforms",
//     "Internal business tools",
//     "CRM systems",
//     "Mobile applications",
//     "Digital transformation projects"
//   ],

//   "targetAudience": [
//     "Startups",
//     "Small businesses",
//     "Enterprise clients",
//     "Junior developers",
//     "Software agencies"
//   ],

//   "businessModel": [
//     "Fixed-price projects",
//     "Dedicated development teams",
//     "Technical consulting",
//     "Mentorship programs",
//     "Development subscriptions"
//   ]
// },
// {
//   "fullName": "Koladiya Jainish Mukeshbhai",

//   "education": {
//     "institution": "Sarvajanik College of Engineering & Technology",
//     "degree": "Bachelor of Technology (B.Tech)",
//     "specialization": "Information Technology",
//     "graduationYear": 2025,
//     "status": "Passed Out"
//   },

//   "employment": {
//     "designation": "Software Engineer",
//     "company": "Obsio Solutions",
//     "joiningDate": "2021-04-10",
//     "lastWorkingDate": "2026-06-15",
//     "reasonForLeaving": "Career Growth",

//     "careerProgression": [
//       {
//         "title": "Software Engineer Intern",
//         "startDate": "2021-04-10",
//         "endDate": "2021-07-31",
//         "salary": null,
//         "employmentType": "Internship"
//       },
//       {
//         "title": "Software Engineer",
//         "startDate": "2021-08-01",
//         "endDate": "2026-06-15",
//         "startingCTC": "6 LPA",
//         "endingCTC": "9.5 LPA",
//         "employmentType": "Full Time",
//         "promotionDetails": {
//           "effectiveDate": "2021-08-01",
//           "offeredCTC": "6 LPA"
//         }
//       }
//     ]
//   },

//   "experienceSummary": {
//     "totalExperience": "5 Years 2 Months",
//     "primaryRole": "Software Engineer",
//     "careerStartDate": "2021-04-10",
//     "careerEndDate": "2026-06-15"
//   }
// }
];