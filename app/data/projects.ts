// export const projects = [
//   {
//     id: "e-commerce-platform",
//     title: "E-Commerce Platform",
//     description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
//     dateCreated: "2023-01-15",
//     dateUpdated: "2023-09-20",
//     tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
//     image: "/placeholder.png",
//     links: {
//       github: "https://github.com/example/ecommerce",
//       live: "https://example-ecommerce.com",
//     },
//     content: `
// # E-Commerce Platform

// A comprehensive e-commerce solution built with modern web technologies.

// ## Features

// - **User Authentication**: Secure login and registration with JWT
// - **Product Management**: Full CRUD operations for products
// - **Shopping Cart**: Persistent cart with local storage
// - **Payment Integration**: Stripe payment processing
// - **Admin Dashboard**: Manage orders, products, and users
// - **Real-time Updates**: WebSocket integration for live inventory

// ## Tech Stack

// \`\`\`javascript
// const techStack = {
//   frontend: ['React', 'TypeScript', 'Tailwind CSS'],
//   backend: ['Node.js', 'Express', 'MongoDB'],
//   deployment: ['AWS', 'Docker', 'Nginx']
// };
// \`\`\`

// ## Challenges & Solutions

// ### Challenge 1: Payment Processing
// Implementing secure payment processing was complex. We used Stripe's SDK and implemented proper error handling.

// ### Challenge 2: Scalability
// To handle high traffic, we implemented Redis caching and optimized database queries.

// ## Results

// - 10,000+ active users
// - 99.9% uptime
// - Average load time: 1.2s
//     `,
//   },
//   {
//     id: "social-media-dashboard",
//     title: "Social Media Analytics Dashboard",
//     description: "Real-time analytics dashboard for social media management with data visualization and reporting.",
//     dateCreated: "2023-05-10",
//     dateUpdated: "2023-11-15",
//     tags: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
//     image: "/placeholder.png",
//     links: {
//       github: "https://github.com/example/social-dashboard",
//       demo: "https://demo-social-dashboard.com",
//     },
//     content: `
// # Social Media Analytics Dashboard

// A powerful analytics tool for tracking social media performance across multiple platforms.

// ## Overview

// This dashboard aggregates data from various social media platforms and provides actionable insights through beautiful visualizations.

// ## Key Features

// - Multi-platform integration (Twitter, Instagram, Facebook)
// - Real-time data streaming
// - Custom report generation
// - Team collaboration tools
// - Export to PDF/Excel

// ## Architecture

// \`\`\`python
// # Example API endpoint
// @app.get("/analytics/{platform}")
// async def get_analytics(platform: str, start_date: str, end_date: str):
//     data = await fetch_platform_data(platform, start_date, end_date)
//     analytics = process_analytics(data)
//     return {"status": "success", "data": analytics}
// \`\`\`

// ## Visualizations

// - Line charts for trend analysis
// - Pie charts for demographic breakdown
// - Heatmaps for engagement patterns
// - Geographic distribution maps
//     `,
//   },
//   {
//     id: "ai-chatbot",
//     title: "AI-Powered Customer Support Bot",
//     description: "Intelligent chatbot using NLP for automated customer support with 24/7 availability.",
//     dateCreated: "2022-08-20",
//     dateUpdated: "2023-10-30",
//     tags: ["Python", "TensorFlow", "NLP", "React", "Docker"],
//     image: "/placeholder.png",
//     links: {
//       github: "https://github.com/example/ai-chatbot",
//     },
//     content: `
// # AI-Powered Customer Support Bot

// An intelligent chatbot that handles customer inquiries using natural language processing.

// ## Project Goals

// - Reduce customer support workload by 70%
// - Provide 24/7 instant responses
// - Learn from interactions to improve accuracy

// ## Implementation

// \`\`\`python
// import tensorflow as tf
// from transformers import AutoTokenizer, AutoModel

// class SupportBot:
//     def __init__(self):
//         self.model = AutoModel.from_pretrained('bert-base-uncased')
//         self.tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
    
//     def process_query(self, query: str):
//         inputs = self.tokenizer(query, return_tensors='pt')
//         outputs = self.model(**inputs)
//         return self.generate_response(outputs)
// \`\`\`

// ## Results

// - 85% accuracy in query resolution
// - Average response time: 0.8 seconds
// - Customer satisfaction: 4.5/5 stars
//     `,
//   },
//   {
//     id: "task-management-app",
//     title: "Collaborative Task Management App",
//     description: "Team productivity tool with real-time collaboration, kanban boards, and time tracking.",
//     dateCreated: "2023-03-12",
//     dateUpdated: "2023-12-05",
//     tags: ["Next.js", "TypeScript", "Prisma", "tRPC", "Tailwind"],
//     image: "/placeholder.png",
//     links: {
//       github: "https://github.com/example/task-manager",
//       live: "https://example-tasks.com",
//     },
//     content: `
// # Collaborative Task Management App

// A modern task management solution for teams of all sizes.

// ## Features Overview

// ### Kanban Boards
// - Drag-and-drop interface
// - Custom columns and swimlanes
// - Card templates

// ### Time Tracking
// - Built-in timer
// - Manual time entries
// - Reports and analytics

// ### Collaboration
// - Real-time updates
// - Comments and mentions
// - File attachments

// ## Code Example

// \`\`\`typescript
// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: 'todo' | 'in-progress' | 'done';
//   assignee: User;
//   dueDate: Date;
//   tags: string[];
// }

// const updateTaskStatus = async (taskId: string, status: Task['status']) => {
//   return await prisma.task.update({
//     where: { id: taskId },
//     data: { status },
//   });
// };
// \`\`\`
//     `,
//   },
//   {
//     id: "weather-app",
//     title: "Weather Forecast Application",
//     description: "Beautiful weather app with hourly/daily forecasts, maps, and severe weather alerts.",
//     dateCreated: "2022-11-05",
//     dateUpdated: "2023-08-18",
//     tags: ["React Native", "TypeScript", "REST API", "Maps"],
//     image: "/placeholder.png",
//     links: {
//       github: "https://github.com/example/weather-app",
//       demo: "https://demo-weather.com",
//     },
//     content: `
// # Weather Forecast Application

// A beautiful and intuitive weather app for iOS and Android.

// ## Features

// - Current weather conditions
// - Hourly forecast (48 hours)
// - Daily forecast (10 days)
// - Interactive weather maps
// - Severe weather alerts
// - Location-based forecasts

// ## API Integration

// \`\`\`typescript
// const fetchWeather = async (lat: number, lon: number) => {
//   const response = await fetch(
//     \`https://api.openweathermap.org/data/2.5/weather?lat=\${lat}&lon=\${lon}&appid=\${API_KEY}\`
//   );
//   return await response.json();
// };
// \`\`\`

// ## UI/UX Highlights

// - Smooth animations
// - Dark/light mode
// - Gesture controls
// - Offline support
//     `,
//   },
//   {
//     id: "portfolio-builder",
//     title: "Portfolio Website Builder",
//     description: "No-code platform for developers to create stunning portfolio websites with templates.",
//     dateCreated: "2023-06-01",
//     dateUpdated: "2023-12-20",
//     tags: ["React", "TypeScript", "Firebase", "Tailwind", "DnD"],
//     image: "/placeholder.png",
//     links: {
//       github: "https://github.com/example/portfolio-builder",
//       live: "https://example-portfolio.com",
//     },
//     content: `
// # Portfolio Website Builder

// Create beautiful portfolio websites without writing code.

// ## Key Features

// - Drag-and-drop editor
// - Pre-built templates
// - Custom domains
// - SEO optimization
// - Analytics integration
// - Contact forms

// ## Technical Implementation

// \`\`\`typescript
// interface Template {
//   id: string;
//   title: string;
//   preview: string;
//   sections: Section[];
// }

// const renderSection = (section: Section) => {
//   return <DynamicComponent type={section.type} props={section.props} />;
// };
// \`\`\`

// ## Achievements

// - 5,000+ portfolios created
// - 50+ templates available
// - Average build time: 15 minutes
//     `,
//   },
//   {
//     id: "fitness-tracker",
//     title: "Fitness & Workout Tracker",
//     description: "Mobile app for tracking workouts, nutrition, and fitness goals with progress visualization.",
//     dateCreated: "2022-09-15",
//     dateUpdated: "2023-07-22",
//     tags: ["React Native", "Node.js", "MongoDB", "Charts"],
//     image: "/placeholder.png",
//     links: {
//       github: "https://github.com/example/fitness-tracker",
//     },
//     content: `
// # Fitness & Workout Tracker

// Track your fitness journey with detailed analytics and personalized recommendations.

// ## Features

// ### Workout Logging
// - Exercise library (500+ exercises)
// - Custom workout plans
// - Set tracking
// - Rest timers

// ### Nutrition Tracking
// - Calorie counter
// - Macro tracking
// - Meal planning
// - Barcode scanner

// ### Progress Analytics
// - Weight tracking
// - Body measurements
// - Progress photos
// - Performance charts

// ## Sample Code

// \`\`\`javascript
// const calculateCalories = (weight, height, age, gender, activityLevel) => {
//   let bmr;
//   if (gender === 'male') {
//     bmr = 10 * weight + 6.25 * height - 5 * age + 5;
//   } else {
//     bmr = 10 * weight + 6.25 * height - 5 * age - 161;
//   }
//   return bmr * activityLevel;
// };
// \`\`\`
//     `,
//   },
//   {
//     id: "blog-platform",
//     title: "Modern Blogging Platform",
//     description: "Full-featured blogging platform with markdown editor, comments, and SEO optimization.",
//     dateCreated: "2023-02-28",
//     dateUpdated: "2023-11-10",
//     tags: ["Next.js", "MDX", "PostgreSQL", "Vercel", "SEO"],
//     image: "/placeholder.png",
//     links: {
//       github: "https://github.com/example/blog-platform",
//       live: "https://example-blog.com",
//     },
//     content: `
// # Modern Blogging Platform

// A developer-friendly blogging platform with powerful features.

// ## Features

// - Markdown/MDX editor
// - Syntax highlighting
// - Image optimization
// - SEO tools
// - Comment system
// - Newsletter integration
// - Analytics

// ## Editor Features

// \`\`\`typescript
// import { MDXRemote } from 'next-mdx-remote';

// const BlogPost = ({ mdxSource }) => {
//   return (
//     <article>
//       <MDXRemote {...mdxSource} components={customComponents} />
//     </article>
//   );
// };
// \`\`\`

// ## Performance

// - Lighthouse score: 98/100
// - First Contentful Paint: 0.8s
// - Time to Interactive: 1.2s
//     `,
//   },
// ];

export const projects = [
  {
    id: "isla-arena",
    title: "Isla Arena Sports Organizing",
    type: "",
    link: "islaarena.ae",
    description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    dateCreated: "2023-01-15",
    dateUpdated: "2023-09-20",
    tags: ["React", "TailwindCSS", "Vite", "Email.js", "Hostinger"],
  },
  {
    id: "luve-ventures",
    title: "Luve Ventures",
    type: "",
    link: "luveventures.ae",
    description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    dateCreated: "2023-01-15",
    dateUpdated: "2023-09-20",
    tags: ["React", "TailwindCSS", "Vite", "Email.js", "Hostinger"],
  },
  {
    id: "cms",
    title: "CMS",
    type: "",
    link: "#",
    description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    dateCreated: "2023-01-15",
    dateUpdated: "2023-09-20",
    tags: ["Figma", "UI/UX Design", "Design System"],
  },
  {
    id: "lms",
    title: "LMS",
    type: "",
    link: "#",
    description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    dateCreated: "2023-01-15",
    dateUpdated: "2023-09-20",
    tags: ["Figma", "UI/UX Design", "Design System"],
  },
  {
    id: "caap-des",
    title: "CAAP DES",
    type: "",
    link: "#",
    description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    dateCreated: "2023-01-15",
    dateUpdated: "2023-09-20",
    tags: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Python", "Django"],
  },
  {
    id: "smart-pig-farm-app",
    title: "Smart Pig Farm App",
    type: "",
    link: "#",
    description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    dateCreated: "2023-01-15",
    dateUpdated: "2023-09-20",
    tags: ["Flutter", "FastAPI", "AWS Lambda", "AWS DynamoDB", "Python", "OpenCV", "IOT", "AI", "Arduino"],
  },
  {
    id: "streamapp",
    title: "Streamapp",
    type: "",
    link: "#",
    description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    dateCreated: "2023-01-15",
    dateUpdated: "2023-09-20",
    tags: ["React Native", "Laravel", "MariaDB", "Composer", "FastAPI", "REST API"],
  },
  {
    id: "i-was-here",
    title: "I was here",
    type: "",
    link: "iwas-here.weebly.com",
    description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    dateCreated: "2023-01-15",
    dateUpdated: "2023-09-20",
    tags: ["HTML", "CSS", "JavaScript", "Weebly"],
  },
]