# 🍪 Portfolio Website

A modern, fully-featured portfolio website built with Next.js, TypeScript, and NextUI. Showcases projects, skills, and provides a contact form for inquiries.

## ✨ Features

### 🏠 Landing Page
- **Hero Section**: Eye-catching introduction with profile image and call-to-action buttons
- **Tech Skills**: Visual showcase of technical abilities with icon grid
- **Projects Showcase**: Grid layout with filterable projects by year and month
- **Contact Preview**: Quick contact section with social links

### 📁 Projects Page
- **Project Grid**: Responsive grid displaying all projects with thumbnails
- **Advanced Filtering**: Filter projects by year and month
- **Project Cards**: Each card shows title, description, tags, and last update date
- **Detailed Project Views**: Individual pages for each project with markdown support

### 📝 Project Detail Pages
- **Markdown Content**: Full markdown support with syntax highlighting
- **Code Blocks**: Syntax-highlighted code examples
- **Project Metadata**: Tags, dates, links (GitHub, live demo)
- **Responsive Layout**: Beautiful layout optimized for all screen sizes

### 📧 Contact Page
- **Contact Form**: Name, email, and message fields with validation
- **Email Integration**: Ready-to-configure email service (Resend)
- **Profile Section**: Personal information and social links
- **Services List**: Showcase of what you can help with

### 🎨 Additional Features
- **Dark/Light Mode**: Theme switcher with persistent preference
- **Responsive Navigation**: Desktop and mobile-friendly navigation
- **NextUI Components**: Beautiful, accessible UI components
- **Tailwind CSS**: Utility-first styling for rapid development
- **TypeScript**: Type-safe code throughout the application

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
my-portfolio/
├── app/
│   ├── components/
│   │   ├── icons/              # Icon components
│   │   └── sections/           # Page sections (Header, Footer, etc.)
│   ├── data/
│   │   └── projects.ts         # Project data with metadata
│   ├── api/
│   │   └── contact/            # Contact form API endpoint
│   ├── projects/
│   │   ├── page.tsx            # Projects listing page
│   │   └── [id]/page.tsx       # Individual project page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── EMAIL_SETUP.md              # Email service setup guide
└── README.md                   # This file
```

## 🛠️ Technologies Used

- **Framework**: [Next.js 13](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [NextUI](https://nextui.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Markdown**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **Syntax Highlighting**: [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
- **Email**: [Resend](https://resend.com/) (configurable)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

## 📝 Customization Guide

### 1. Update Personal Information

Edit `/app/components/sections/About.tsx`:
```typescript
<div className="font-bold text-foreground/100 text-4xl">YOUR NAME</div>
<div className="text-medium text-foreground/80">Your Title</div>
```

### 2. Add Your Projects

Edit `/app/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: "unique-project-id",
    title: "Your Project Title",
    description: "Brief description",
    dateCreated: "2024-01-15",
    dateUpdated: "2024-03-20",
    tags: ["React", "TypeScript", "etc"],
    image: "/path-to-image.png",
    links: {
      github: "https://github.com/...",
      live: "https://...",
    },
    content: `Your markdown content here...`,
  },
  // Add more projects...
];
```

### 3. Configure Email Service

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions on setting up email functionality with Resend or other services.

### 4. Update Skills

Edit `/app/components/icons/SkillsIcon.tsx` to add/modify your skills and their icons.

### 5. Customize Theme Colors

Edit `/tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  foreground: "#your-color",
  background: "#your-color",
  primary: {
    DEFAULT: "#your-color",
  },
  // ... more colors
}
```

### 6. Add Your Images

Place your images in the `/public` folder:
- `/public/profile.jpg` - Your profile photo
- `/public/logo.png` - Your logo
- Project images for each project

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📧 Email Setup

The contact form is ready to use but requires email service configuration. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for:
- Resend setup (recommended)
- Alternative email services
- Environment variable configuration
- Security best practices

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (if using email service)
5. Deploy!

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any Node.js hosting provider

## 🎨 Screenshots

### Landing Page
- Hero section with profile and CTA buttons
- Skills grid with technology icons
- Projects showcase with filters
- Contact preview

### Projects Page
- Filterable project grid
- Detailed project cards with tags
- Responsive layout

### Project Detail Page
- Markdown content rendering
- Syntax-highlighted code blocks
- Project metadata and links

### Contact Page
- Working contact form
- Profile information
- Social media links

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to open an issue or reach out!

---

Built with ❤️ using Next.js and NextUI
