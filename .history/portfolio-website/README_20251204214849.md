# Modern Portfolio Website

A stunning, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed for developers, designers, and creative professionals to showcase their work and skills.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Looks great on desktop, tablet, and mobile
- **Dark Mode**: Toggle between light and dark themes
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized for speed with 90+ Lighthouse scores
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Contact Form**: Working contact form with validation
- **Smooth Animations**: Powered by Framer Motion
- **Type Safe**: Built with TypeScript for better code quality

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Personal Information
Update these components with your info:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - Personal story, skills
- `src/components/Projects.tsx` - Your real projects
- `src/components/Experience.tsx` - Work history, education
- `src/components/Contact.tsx` - Contact details, social links

### 2. SEO & Metadata
Update `src/app/layout.tsx` with your:
- Site title and description
- Domain URL and social media
- Keywords and author info

## 🌐 Deployment to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Portfolio setup"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import your repository
   - Auto-deploy happens instantly!

3. **Custom Domain (Optional):**
   - Purchase domain from any registrar
   - Add in Vercel project settings
   - Update DNS as instructed

## 📧 Contact Form Setup

Choose one option:

**EmailJS (Client-side)**
```bash
npm install @emailjs/browser
```

**Formspree (Simple)**
- Sign up at [formspree.io](https://formspree.io)
- Replace form action with your endpoint

**API Route (Custom)**
- Create `src/app/api/contact/route.ts`
- Integrate with SendGrid/Nodemailer

## 🎨 Customization Tips

- **Colors**: Modify Tailwind classes (blue/purple theme)
- **Fonts**: Change in `src/app/layout.tsx`
- **Animations**: Customize Framer Motion configs
- **New Sections**: Add components and update navigation

## 🔧 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build  
- `npm run start` - Production server
- `npm run lint` - Code linting

## 📱 Mobile Ready

Fully responsive design tested on all devices:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

---

**Made with ❤️ using Next.js and Tailwind CSS**
