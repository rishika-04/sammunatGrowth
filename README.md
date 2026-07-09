# Sammunat Growth

A modern, responsive marketing landing page for **Sammunat Growth** — a growth strategy and digital execution agency. Built with React and Vite, the site showcases the agency's services, process, and value proposition, with a conversion-focused layout designed to drive audit bookings and consultation requests.

**Live focus of the page:** communicate what the agency does, why clients should choose them, and funnel visitors toward booking a free growth audit.

## ✨ Features

- **Hero section** with a clear value proposition and primary call-to-action buttons
- **Services overview** — Product & Web Engineering, UI/UX & Brand Experience, Growth Marketing & SEO, and Analytics & Automation
- **"How We Drive Growth" process breakdown** — a 4-step Audit → Diagnose → Improve → Scale framework
- **"Why Us" section** highlighting strategy-first execution, measurable ROI, scalability, and transparent collaboration
- **Client testimonial** section
- **Free Growth Audit** call-to-action block with a stats highlight card
- **Footer** with brand info, quick links, and contact details
- **Scroll-triggered reveal animations** using the Intersection Observer API
- Fully responsive, single-page layout

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Plain CSS (`App.css`, `index.css`) |
| Linting | ESLint 9, with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` |

This is a fully static, client-side site — there is no backend, API, database, or environment configuration involved.

## 📁 Project Structure

```
sammunatGrowth/
├── public/
│   ├── hero/            # Hero section imagery
│   ├── icons/            # Social/UI icons
│   ├── images/            # General image assets
│   ├── solutions/         # Service section imagery
│   ├── steps/              # Growth process step imagery
│   ├── testimonial/       # Testimonial imagery
│   └── whyUs/              # Why Us section imagery
├── src/
│   ├── assets/            # App-level static assets
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Solutions.jsx
│   │   ├── WhyUs.jsx
│   │   ├── DriveGrowth.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FreeGrowthAudit.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Root component, composes all sections
│   ├── App.css
│   ├── index.css
│   └── main.jsx            # React entry point
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## ✅ Prerequisites

- Node.js (LTS recommended)
- npm

## ⚙️ Installation

```bash
git clone https://github.com/rishika-04/sammunatGrowth.git
cd sammunatGrowth
npm install
```

## 🔑 Environment Variables

None required. This project has no backend integration, API calls, or configuration secrets — it runs entirely as a static frontend.

## ▶️ Running the Project

**Development:**
```bash
npm run dev
```
Starts the Vite dev server with hot module reloading, typically at `http://localhost:5173`.

**Production build:**
```bash
npm run build
```
Outputs an optimized static build to the `dist/` folder.

**Preview the production build locally:**
```bash
npm run preview
```

**Linting:**
```bash
npm run lint
```

## 📖 Usage Guide

This is a single-page marketing site — there's no app state or user flow beyond scrolling and navigation:

1. Run the dev server and open it in your browser
2. Navigate via the navbar links (`Home`, `Services`, `Why Us`, `Growth Journey`) — these scroll to in-page anchor sections
3. The **"Book Free Audit"** and **"Get in Touch"** buttons link to the audit and footer sections on the same page
4. Sections animate into view on scroll via the reveal effect in `App.jsx`

## 🚀 Deployment

As a static Vite build, this project deploys cleanly to any static hosting provider (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.):

```bash
npm run build
```

Then deploy the contents of the generated `dist/` folder. No environment variables or backend services are needed for deployment.

## 🔭 Roadmap

- Wire up the "Book Free Audit" and contact form actions to an actual submission endpoint or email service (currently the audit button and social links are placeholders)
- Add real client logos/case studies to the testimonials section
- Add SEO metadata (Open Graph tags, meta description) to `index.html`
- Add analytics integration for tracking conversions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes with clear messages
4. Push and open a Pull Request against `main`

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.
