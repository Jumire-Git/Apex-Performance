# ELEVATE Performance Medicine

A premium, modern wellness & performance medicine website built with React, Vite, and advanced optimization techniques.

## 🎯 Overview

ELEVATE Performance Medicine is a concierge longevity and performance medicine practice website designed for high-achievers. The site positions the practice as a premium, science-driven alternative to traditional medicine—focused on proactive health optimization rather than reactive treatment.

## ✨ Key Features

- **Premium Design** - Gold/dark theme with smooth animations and modern typography
- **AI-Powered Chatbot** - Instant customer support with 4 quick-action buttons and intelligent Q&A
- **Comprehensive FAQ** - 12 answers addressing common objections and building trust
- **Mobile Responsive** - Optimized for all devices (680px, 900px breakpoints)
- **SEO Optimized** - Meta tags, sitemap.xml, robots.txt, preconnect directives
- **Performance Enhanced** - Image lazy loading, GZIP compression, code splitting, minification
- **Two-Layer Testimonials Carousel** - Animated scrolling showcasing patient success stories
- **Scroll-to-Top Navigation** - Seamless page transitions with automatic scroll reset

## 🏗️ Tech Stack

- **Frontend**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Routing**: React Router 7.16.0
- **Icons**: Lucide React 1.17.0
- **Styling**: Custom CSS with CSS variables
- **Hosting**: Optimized for Vercel, Netlify, AWS

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx        # Navigation header with mobile menu
│   │   ├── Header.css
│   │   ├── Footer.jsx        # Footer with links and CTA
│   │   └── Footer.css
│   ├── Chatbot.jsx           # AI-powered chat widget
│   ├── Chatbot.css
│   └── ScrollToTop.jsx       # Auto-scroll on route change
├── pages/
│   ├── Home.jsx              # Landing page with hero, services, testimonials
│   ├── Home.css
│   ├── Services.jsx          # Services detail page
│   ├── Services.css
│   ├── About.jsx             # Company mission and values
│   ├── About.css
│   ├── Contact.jsx           # Contact form and booking
│   ├── Contact.css
│   ├── FAQ.jsx               # 12 Q&A with accordion UI
│   └── FAQ.css
├── styles/
│   ├── global.css            # Global styles and layout
│   ├── variables.css         # CSS variables (colors, spacing)
│   └── index.css
├── App.jsx                   # Main app router
└── main.jsx                  # Entry point
public/
├── sitemap.xml               # SEO sitemap for search engines
└── robots.txt                # Crawler instructions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/wellness-brand.git
cd wellness-brand

# Install dependencies
npm install

# Start development server
npm run dev
```

Server runs on `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Colors
- **Primary Gold**: `#D4B48A` (premium accent)
- **Dark Background**: `#0A0E27` (dark theme)
- **Text**: `#E8E8E8` (light text on dark)
- **Border**: `#2A2F45` (subtle dividers)

### Typography
- **Headings**: Custom serif fonts with gold accents
- **Body**: Clean sans-serif for readability
- **Hierarchy**: Clear size and weight differentiation

### Spacing
- Uses CSS variables for consistent 8px spacing system
- Responsive padding/margin adjustments at breakpoints

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 900px - 1199px
- **Mobile**: 680px - 899px
- **Small Mobile**: < 680px

## 🤖 Chatbot Features

The AI chatbot provides instant support with:

- **Quick Actions** - Popular questions: "What is ELEVATE?", "Services & Treatments", "Book Appointment", "Contact Info"
- **Smart Responses** - Formatted answers with bullet points, contact info, and CTAs
- **Persistent Buttons** - Quick actions always visible for continuous engagement
- **Message Formatting** - Line breaks and emojis for better readability

### Chatbot Knowledge Base
- Services overview
- Appointment booking
- Location & hours
- Pricing information
- Team credentials
- Concierge benefits
- Contact methods
- Company mission

## 📊 SEO Optimizations

- ✅ Comprehensive meta tags (title, description, keywords, author)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ XML sitemap (4 main pages)
- ✅ robots.txt with crawler rules
- ✅ Preconnect/DNS prefetch for external resources
- ✅ Image lazy loading with `loading="lazy"` and `decoding="async"`
- ✅ Mobile responsive design
- ✅ Fast load times (GZIP, code splitting, minification)

## ⚡ Performance Features

- **Image Optimization**
  - Lazy loading on all images
  - Async decoding for faster rendering
  - Optimized image formats

- **Code Splitting**
  - Vendor chunks separated (React, React Router, Lucide)
  - Route-based code splitting via React Router

- **Caching Strategy**
  - `.htaccess` with browser caching rules
  - 1-year cache for images/fonts
  - 1-month cache for CSS/JS
  - 2-day cache for HTML

- **Compression**
  - GZIP compression for all text assets
  - Minification via esbuild
  - Console.log removal in production

## 📈 Conversion Features

- **Clear CTAs** - "Book Now", "Schedule Consultation" buttons throughout
- **Social Proof** - Animated testimonials carousel
- **Trust Signals** - FAQ section addressing objections
- **Quick Actions** - Chatbot with instant answers
- **Contact Integration** - Easy access to email, phone, booking

## 🔧 Configuration Files

### `vite.config.js`
- Build optimization settings
- Code splitting strategy
- Dependency pre-bundling
- esbuild minification

### `package.json`
- Project metadata
- Dependencies and versions
- NPM scripts (dev, build, preview)

### `eslint.config.js`
- Code quality rules
- React best practices
- Consistent code style

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag dist/ folder to Netlify
```

### Environment Variables
No environment variables required for basic deployment. Optional for future integrations:
- Google Analytics ID
- Calendly/scheduling integration
- Email service API keys

## 📝 Pages Included

### Home (`/`)
- Hero section with headline and CTA
- Services showcase (7 treatments)
- Why choose ELEVATE section
- Animated testimonials carousel
- Community stats
- Final CTA

### Services (`/services`)
- All 7 services with descriptions:
  - Advanced Bloodwork Analysis
  - IV Therapy & Nutrient Optimization
  - Peptide Treatments
  - Hormone Optimization
  - Sauna Therapy & Recovery
  - Personalized Protocols
  - Longevity Programs

### About (`/about`)
- Company mission and story
- Core values
- Team structure
- Founding statement

### FAQ (`/faq`)
- 12 comprehensive Q&As
- Accordion UI with expand/collapse
- Popular question buttons
- Email and booking CTAs

### Contact (`/contact`)
- Contact form
- Direct email link
- Phone number
- Office location
- Business hours

## 🎯 Future Enhancements

- [ ] Individual service detail pages
- [ ] Team member bios with photos
- [ ] Blog/Resources section
- [ ] Patient testimonial videos
- [ ] Live chat integration (Intercom/Drift)
- [ ] Appointment booking calendar (Calendly/Acuity)
- [ ] Newsletter signup with lead magnet
- [ ] Email automation sequence
- [ ] Before/after gallery
- [ ] Performance metrics dashboard

## 📧 Contact & Support

For questions or support:
- Email: optimize@apexperformance.com
- Phone: (305) 555-0100
- Location: Miami, Florida

## 📄 License

This project is proprietary and confidential.

## 🙏 Credits

Built with:
- React & Vite for fast development
- Lucide React for beautiful icons
- Custom CSS for unique design
- Love for premium wellness experiences

---

**Ready to elevate your health? Book a consultation today.** 🚀
