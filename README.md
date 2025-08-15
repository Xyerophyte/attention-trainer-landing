# 🎯 Attention Trainer - Landing Page

A stunning, animated landing page for the Attention Trainer Chrome extension built with Next.js, TypeScript, and Framer Motion.

## ✨ Features

### 🎨 **Beautiful Design & Animations**
- Smooth scroll-triggered animations with Framer Motion
- Gradient backgrounds and floating elements
- Interactive demos and hover effects
- Mobile-first responsive design

### 🚀 **Performance Optimized**
- Next.js 14+ with App Router
- Optimized images and fonts
- SEO-friendly with comprehensive meta tags
- Fast loading with code splitting

### 🎮 **Interactive Components**
- **Hero Section**: Animated gradients with floating elements
- **Features**: Interactive demos showing extension functionality
- **Interactive Demo**: Simulated extension interface with step-by-step walkthroughs
- **Download Section**: Multiple installation options with progress indicators
- **Testimonials**: User feedback with animated statistics
- **Footer**: Comprehensive links and newsletter signup

## 🛠 Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm 8+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
attention-trainer-landing/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout with SEO
│   │   ├── page.tsx          # Main landing page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── Navbar.tsx        # Navigation with scroll effects
│   │   ├── HeroSection.tsx   # Animated hero section
│   │   ├── FeaturesSection.tsx # Features with demos
│   │   ├── InteractiveDemoSection.tsx # Extension simulation
│   │   ├── DownloadSection.tsx # Multiple download options
│   │   ├── TestimonialsSection.tsx # User testimonials
│   │   └── Footer.tsx        # Footer with links
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   └── downloads/
│       └── attention-trainer-extension.zip # Extension file (33KB)
└── package.json
```

## 🎨 Components Overview

### HeroSection
- Animated gradient background with floating elements
- Smooth parallax scrolling effects
- Call-to-action buttons with micro-interactions
- Trust indicators and statistics

### FeaturesSection  
- Four main features with interactive demos
- Live previews of extension functionality
- Scroll-triggered animations
- Gradient icons and cards

### InteractiveDemoSection
- Three demo modes: Popup, Interventions, Analytics
- Step-by-step automated demonstrations
- Play/pause controls with progress indicators
- Realistic extension interface simulation

### DownloadSection
- Multiple installation methods
- Animated download progress
- Step-by-step installation guide
- Trust badges and guarantees

## 🔧 Customization

### Colors & Branding
Update the gradient colors in component files:
```tsx
// Primary gradient
bg-gradient-to-r from-blue-600 to-purple-600

// Background gradients  
bg-gradient-to-br from-slate-50 via-white to-blue-50
```

### Extension Download
Update the download URL in `DownloadSection.tsx`:
```tsx
downloadFile('attention-trainer-extension.zip', '/downloads/attention-trainer-extension.zip')
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Import project in Vercel dashboard  
3. Deploy with zero configuration

### Build Commands
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance Features

- Optimized animations with Framer Motion
- Lazy loading for images and components
- Efficient bundle splitting
- SEO optimized with meta tags

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details.

---

**Made with ❤️ for better digital wellness**
