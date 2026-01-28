# Portfolio Setup & Customization Guide

## Quick Start

1. **Navigate to project**
   ```bash
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:5173` (or the URL shown in terminal)

## What's Included

### Components (src/components/)
- ✅ **Navbar.jsx** - Responsive navigation with mobile menu
- ✅ **Hero.jsx** - Welcome section with CTA buttons
- ✅ **About.jsx** - About you with stats
- ✅ **Skills.jsx** - Technical skills organized by category
- ✅ **Projects.jsx** - Showcase your work
- ✅ **Contact.jsx** - Contact form and info
- ✅ **Footer.jsx** - Footer with social links

### Styles (src/styles/)
- ✅ **global.css** - Global styles and variables
- ✅ Component-specific CSS files for each section

### Data (src/data/)
- ✅ **projects.js** - Project information

## Customization Guide

### 1. Update Your Name & Title
Edit **src/components/Hero.jsx** (Line ~20):
```jsx
<h1>Hi, I'm [YOUR NAME]</h1>
<p className="hero-subtitle">Full Stack Developer</p>
```

### 2. Update Social Links
**Hero.jsx** (~Line 35-45):
```jsx
<a href="https://github.com/[YOUR_GITHUB]" target="_blank">
  <i className="fab fa-github"></i>
</a>
```

### 3. Customize About Section
Edit **src/components/About.jsx** to write your story.

Update stats (~Line 35):
```jsx
<div className="stat">
  <h3>4+</h3>
  <p>Years Experience</p>
</div>
```

### 4. Add Your Skills
Edit **src/components/Skills.jsx** (~Line 10):
```jsx
const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML5', ...]
  },
  // Add more categories
]
```

### 5. Update Projects
Edit **src/data/projects.js** with your projects:
```javascript
{
  title: 'Project Name',
  description: 'Project description',
  technologies: ['React', 'Node.js', ...],
  liveLink: 'https://example.com',
  githubLink: 'https://github.com/...',
  icon: 'fas fa-...'
}
```

### 6. Update Contact Info
Edit **src/components/Contact.jsx**:
- Update email (Line ~45): `nithesh@example.com`
- Update phone (Line ~50): `+1 (234) 567-890`
- Update location (Line ~55): `San Francisco, CA, USA`
- Update social links (Line ~60+)

### 7. Update Footer
Edit **src/components/Footer.jsx** to match contact section.

## Color Customization

Edit **src/styles/global.css** (Line ~6):
```css
:root {
  --primary-color: #0f172a;      /* Dark background */
  --secondary-color: #1e293b;    /* Secondary background */
  --accent-color: #3b82f6;       /* Primary blue */
  --accent-light: #60a5fa;       /* Light blue */
  --text-color: #e2e8f0;         /* Light text */
  --text-light: #cbd5e1;         /* Lighter text */
  --border-color: #334155;       /* Borders */
  --success: #10b981;            /* Success green */
  --warning: #f59e0b;            /* Warning orange */
}
```

Popular color combinations:
- **Sunset**: Primary: #FF6B35, Accent: #FFA600
- **Ocean**: Primary: #00547E, Accent: #00A8E8
- **Forest**: Primary: #1B3C3C, Accent: #2D9B8E
- **Purple**: Primary: #2D1B4E, Accent: #7C3AED

## Adding New Sections

1. Create component: `src/components/NewSection.jsx`
2. Create styles: `src/styles/newsection.css`
3. Import in `src/App.jsx`
4. Add to return statement in App component

Example:
```jsx
import NewSection from './components/NewSection'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <NewSection />  {/* Add here */}
      {/* ... rest of components */}
    </div>
  )
}
```

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Go to netlify.com and drag 'dist' folder
```

### Option 3: GitHub Pages
1. Create repo: `username.github.io`
2. Update vite.config.js: `base: '/'`
3. Push code and enable GitHub Pages

### Option 4: Traditional Hosting
```bash
npm run build
# Upload 'dist' folder to your host
```

## Building for Production

```bash
npm run build
```

The `dist` folder contains optimized production files.

## Testing Before Deploy

```bash
npm run preview
```

This simulates production build locally.

## Useful Font Awesome Icons

Add to skill tags or project icons:
- `fas fa-code` - Code
- `fas fa-laptop-code` - Laptop with code
- `fas fa-database` - Database
- `fas fa-server` - Server
- `fas fa-cloud` - Cloud
- `fas fa-rocket` - Rocket
- `fas fa-star` - Star
- `fas fa-heart` - Heart

## Common Issues

**Q: Styles not loading?**
- Ensure CSS imports are in components
- Check for typos in file names

**Q: Mobile menu not working?**
- Check browser console for errors
- Verify hamburger state logic

**Q: Images not showing?**
- Use absolute paths from src folder
- Optimize images before adding

## Need Help?

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Font Awesome: https://fontawesome.com
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/

---

Happy customizing! 🎨✨
