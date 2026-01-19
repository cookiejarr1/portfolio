import islaArenaImage from "@/app/assets/images/isla-arena.png";
import luveVenturesImage from "@/app/assets/images/luve-ventures.png";
import caapDesImage from "@/app/assets/images/caap-des.png";
import streamappImage from "@/app/assets/images/streamapp.png";
import iWasHereImage from "@/app/assets/images/i-was-here.png";
import smartPigFarm from "@/app/assets/images/smart-pig-farm.png";
import gamifiedLMS from "@/app/assets/images/gamified-lms.png";

export const projects = [
  {
    id: "isla-arena",
    title: "Isla Arena Sports Organizing",
    type: "",
    image: {
      static: islaArenaImage,
      placeholder: "https://images.unsplash.com/photo-1663970206579-c157cba7edda?q=80&w=1228&auto=format&fit=crop",
    },
    links: { live: "https://islaarena.ae" },
    description: "We are a team of sports event enthusiasts - passionate professionals dedicated to creating and promoting dynamic, engaging, and inclusive sporting experiences. With years of experience and a love for the game, we focus on every detail to ensure each event brings people together through well managed, engaging and inclusive sports events.",
    dateCreated: "2023-01-15",
    dateUpdated: "2023-09-20",
    tags: ["React", "TailwindCSS", "Vite", "GSAP", "Framer Motion", "Hostinger"],
    content: `
**Features**
- Animated fixtures planner for league management using GSAP & Framer Motion.
- Themed booking UI, color-tokenized for different sports brands.
- CI-enabled site allows instant hero image/campaign updates for marketing.

**Tech Stack**
- Frontend: **React**, **Vite**, **Tailwind CSS**
- Animation: **GSAP**, **Framer Motion**
- Email Service: **emailjs**
- Hosting: **Hostinger**
    `,
  },
  {
    id: "luve-ventures",
    title: "Luve Ventures",
    type: "",
    image: {
      static: luveVenturesImage,
      placeholder: "https://images.unsplash.com/photo-1663970206579-c157cba7edda?q=80&w=1228&auto=format&fit=crop",
    },
    links: { live: "https://luveventures.ae", github: "" },
    description: "A premier multi-disciplinary service provider, dedicated to delivering a broad range of innovative and tailored solutions. Supporting our international clientele by offering expertise in various sectors including Commercial Brokerage, Social Media Marketing, Event Management Consultancy, Management Consultancies, and Tourism and Recreation Consulting.",
    dateCreated: "2023-02-05",
    dateUpdated: "2023-10-02",
    tags: ["React", "TailwindCSS", "Vite", "email.js", "Hostinger"],
    content: `
**Features**
- Modular React sections and blazing-fast Vite development.
- Interactive lead forms powered by emailjs notifications.
- Theme support for brands using global Tailwind style tokens.

**Tech Stack**
- Frontend: **React**, **Vite**, **Tailwind CSS**
- Animation: **GSAP**, **Framer Motion**
- Email Service: **emailjs**
- Hosting: **Hostinger**
    `,
  },
  {
    id: "cms",
    title: "Headless CMS Design System",
    type: "",
    image: {
      static: null,
      placeholder: "https://images.unsplash.com/photo-1663970206579-c157cba7edda?q=80&w=1228&auto=format&fit=crop",
    },
    links: {},
    description: "Take control of your content with a clean, user-friendly toolkit and organized components. Designed to empower teams to manage and share information with clarity.",
    dateCreated: "2023-03-12",
    dateUpdated: "2023-11-12",
    tags: ["Figma", "UI/UX Design", "Design System"],
    content: `
**Features**
- Modular and responsive UI components built for CMS workflows.
- Atomic token system covering type, color, spacing, and grids.
- Figma specs and developer handoff documentation.

**Tech Stack**
- Design: **Figma**
- Documentation: **Figma** (annotations, specs)
    `,
  },
  {
    id: "lms",
    title: "Gamified LMS",
    type: "",
    image: {
      static: gamifiedLMS,
      placeholder: "https://images.unsplash.com/photo-1663970206579-c157cba7edda?q=80&w=1228&auto=format&fit=crop",
    },
    links: {},
    description: "Keep students inspired with helpful progress dashboards and interactive lessons. Flexible layouts and user-friendly tools make learning exciting and accessible.",
    dateCreated: "2023-04-02",
    dateUpdated: "2023-12-01",
    tags: ["Figma", "UI/UX Design", "Design System"],
    content: `
**Features**
- Dashboard UIs for class and cohort tracking with badge rewards.
- Drag-and-drop lesson templates for instructors.
- Interactive course pages with modular lessons, assignments, and calendar views for students and instructors.


**Tech Stack**
- Design: **Figma**
- Prototyping: **Figma** 
    `,
  },
  {
    id: "caap-des",
    title: "CAAP Data Entry System (Web Version)",
    type: "",
    image: {
      static: caapDesImage,
      placeholder: "https://images.unsplash.com/photo-1663970206579-c157cba7edda?q=80&w=1228&auto=format&fit=crop",
    },
    links: { github: "" },
    description: "Manage approvals and official forms in a single, organized space—no paperwork hassles. Track all activity and easily generate data-driven reports any time.",
    dateCreated: "2022-11-18",
    dateUpdated: "2023-09-20",
    tags: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Python", "Django"],
    content: `
**Features**
- Role-based dashboards with high-performance vanilla JS and CSS.
- Django backend for endorsement approvals and PDF output.
- Immutable PostgreSQL activity logs and CSV exports.

**Tech Stack**
- Frontend: **HTML**, **CSS**, **JavaScript**
- Backend: **Python**, **Django**
- Database: **PostgreSQL**
- Exports: **CSV**, **PDF**
    `,
  },
  {
    id: "smart-pig-farm-app",
    title: "Smart Pig Farm App",
    type: "",
    image: {
      static: smartPigFarm,
      placeholder: "https://images.unsplash.com/photo-1663970206579-c157cba7edda?q=80&w=1228&auto=format&fit=crop",
    },
    links: { github: "" },
    description: "Monitor your farm and livestock in real time from your phone or tablet. Keep animals healthy with timely alerts and simple, reliable record-keeping.",
    dateCreated: "2022-08-21",
    dateUpdated: "2023-10-05",
    tags: ["Flutter", "FastAPI", "AWS Lambda", "Python", "DynamoDB", "OpenCV", "IOT", "AI", "Arduino"],
    content: `
**Features**
- Flutter dashboard shows animal data from Arduino-powered sensors.
- Offline record-keeping for use in remote farms.
- Cloud analytics flag abnormal patterns with OpenCV.

**Tech Stack**
- Mobile: **Flutter**
- IoT: **Arduino**
- Cloud: **FastAPI**, **AWS Lambda**
- Database: **DynamoDB**
- Machine Vision: **OpenCV**
    `,
  },
  {
    id: "streamapp",
    title: "Streamapp",
    type: "",
    image: {
      static: streamappImage,
      placeholder: "https://images.unsplash.com/photo-1663970206579-c157cba7edda?q=80&w=1228&auto=format&fit=crop",
    },
    links: {},
    description: "Stream your favorite content smoothly and enjoy a personalized viewing experience on any device. Everything is designed to match your brand and keep you connected.",
    dateCreated: "2023-05-07",
    dateUpdated: "2023-12-05",
    tags: ["React Native", "Laravel", "PHP", "MySQL", "MariaDB", "Composer"],
    content: `
**Features**
- Adaptive bitrate player with offline queueing (React Native app).
- Partner white-label interface and dynamic themes.
- Catalog, analytics, and sync handled via robust backend APIs.

**Tech Stack**
- Mobile: **React Native**
- Backend: **Laravel**, **PHP**, **MySQL**
- Database: **MariaDB**
- Orchestration: **Composer**, **PHP**
    `,
  },
  {
    id: "i-was-here",
    title: "I Was Here Travel Journal",
    type: "",
    image: {
      static: iWasHereImage,
      placeholder: "https://images.unsplash.com/photo-1663970206579-c157cba7edda?q=80&w=1228&auto=format&fit=crop",
    },
    links: { live: "https://iwas-here.weebly.com" },
    description: "Capture your travels with vivid stories, photos, and memories. Make each trip unforgettable with custom designs and interactive journals to share with friends or guests.",
    dateCreated: "2021-06-10",
    dateUpdated: "2023-07-15",
    tags: ["HTML", "CSS", "JavaScript", "Weebly"],
    content: `
**Features**
- Story-driven itinerary builder with embedded media support.
- Custom HTML/CSS design exceeds Weebly's standard templates.
- Enhanced submissions with vanilla JS for collecting guest stories.

**Tech Stack**
- Platform: **Weebly**
- Frontend: **HTML**, **CSS**, **JavaScript**
    `,
  },
] as const;