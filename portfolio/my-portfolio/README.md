# Fullstack Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and modern CSS. Showcasing fullstack development skills, projects, and experience.

## Features

✨ **Modern Design**
- Beautiful gradient backgrounds with animations
- Smooth scrolling and transitions
- Responsive mobile-first design
- Dark theme with blue accent colors

🎨 **Components**
- **Navbar** - Sticky navigation with mobile hamburger menu
- **Hero** - Eye-catching introduction section with CTAs
- **About** - Personal background and statistics
- **Skills** - Categorized technical skills display
- **Projects** - Featured project cards with descriptions
- **Contact** - Contact form and information
- **Footer** - Social links and quick navigation

⚡ **Performance**
- Built with Vite for fast development and optimized builds
- Smooth animations and transitions
- Optimized images and assets

📱 **Responsive**
- Mobile-first design
- Tablet and desktop optimized
- Touch-friendly interface

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with Grid and Flexbox
- **Icons**: Font Awesome
- **Fonts**: Poppins from Google Fonts

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
my-portfolio/
├── index.html                 # Entry HTML file
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Main app component
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer section
│   ├── data/
│   │   └── projects.js      # Projects data
│   └── styles/
│       ├── global.css       # Global styles
│       ├── navbar.css       # Navbar styles
│       ├── hero.css         # Hero section styles
│       ├── about.css        # About section styles
│       ├── skills.css       # Skills section styles
│       ├── projects.css     # Projects section styles
│       ├── contact.css      # Contact section styles
│       └── footer.css       # Footer styles
```

## Customization

### Update Personal Information
Edit the following files to customize content:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/data/projects.js`
- **Contact Info**: `src/components/Contact.jsx`
- **Footer**: `src/components/Footer.jsx`

### Change Colors
Modify CSS custom properties in `src/styles/global.css`:

```css
:root {
  --primary-color: #0f172a;
  --secondary-color: #1e293b;
  --accent-color: #3b82f6;
  --accent-light: #60a5fa;
  /* ... more colors ... */
}
```

### Add Social Links
Update social media links in:
- `src/components/Hero.jsx` (hero section)
- `src/components/Contact.jsx` (contact section)
- `src/components/Footer.jsx` (footer)

## Features Explained

### Navigation
- Sticky navbar that stays at top while scrolling
- Smooth scroll to sections
- Mobile hamburger menu for responsive design

### Hero Section
- Animated introduction with gradient text
- Call-to-action buttons
- Social media links
- Animated profile card

### About Section
- Personal background description
- Statistics cards (Years, Projects, Clients)
- Hover animations

### Skills Section
- Categorized skills (Frontend, Backend, Database, etc.)
- Skill tags with hover effects
- Additional expertise items

### Projects Section
- Featured project cards
- Project descriptions and technologies
- Links to live demo and GitHub code
- Hover animations

### Contact Section
- Contact form with validation
- Contact information cards
- Social media links
- Success message on submission

### Footer
- Quick links navigation
- Social media links
- Copyright information
- Current year automation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Images**: Optimize images before adding to projects
2. **API Calls**: For contact form, integrate with a backend service (e.g., EmailJS, Formspree)
3. **Deployment**: Deploy to Vercel, Netlify, or GitHub Pages

## Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default {
  base: '/my-portfolio/',
  // ... rest of config
}
```

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.

---

**Happy Coding!** 🚀

Built with ❤️ using React & Vite
