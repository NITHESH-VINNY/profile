# Portfolio Configuration Template

Copy and customize these values to personalize your portfolio:

## Personal Information

```javascript
// Your Details
const PERSONAL_INFO = {
  firstName: 'Nithesh',
  lastName: 'Vinny',
  title: 'Full Stack Developer',
  tagline: 'Building amazing web applications',
  email: 'nithesh@example.com',
  phone: '+1 (234) 567-890',
  location: 'San Francisco, CA, USA',
  yearsExperience: 4,
  projectsCompleted: 25,
  happyClients: 15,
}
```

## Social Links

```javascript
const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  instagram: 'https://instagram.com/yourusername',
  email: 'mailto:your.email@example.com',
}
```

## About Section

```javascript
const ABOUT_TEXT = `
I'm a passionate Full Stack Developer with 4+ years of experience building web applications. 
I specialize in creating responsive, user-friendly interfaces and robust backend solutions.

My journey in development started with a curiosity about how things work on the web. 
Since then, I've worked with startups and established companies, delivering high-quality solutions 
that solve real-world problems.

I believe in writing clean, maintainable code and staying up-to-date with the latest technologies.
`
```

## Skills Categories

```javascript
const SKILLS = {
  frontend: [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Vue.js',
    'Redux',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'Python',
    'Django',
    'RESTful APIs',
    'GraphQL',
    'WebSockets',
  ],
  database: [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Firebase',
    'Redis',
  ],
  devops: [
    'Git',
    'Docker',
    'AWS',
    'Kubernetes',
    'Jenkins',
    'CI/CD',
  ],
}
```

## Project Template

```javascript
const PROJECT_TEMPLATE = {
  title: 'Project Name',
  description: 'Brief description of what the project does and its key features',
  technologies: ['React', 'Node.js', 'MongoDB'],
  liveLink: 'https://project-demo.com',
  githubLink: 'https://github.com/username/project',
  icon: 'fas fa-laptop-code',
  // Optional: Add image path
  // image: '/images/project-name.jpg',
}
```

## Color Themes

### Dark Blue (Current Default)
```css
--primary-color: #0f172a;
--secondary-color: #1e293b;
--accent-color: #3b82f6;
--accent-light: #60a5fa;
```

### Neon Purple
```css
--primary-color: #0d0221;
--secondary-color: #1a0035;
--accent-color: #9d4edd;
--accent-light: #c77dff;
```

### Ocean Blue
```css
--primary-color: #0a0e27;
--secondary-color: #11213d;
--accent-color: #00a8e8;
--accent-light: #00d4ff;
```

### Forest Green
```css
--primary-color: #1b3c3c;
--secondary-color: #2d5a5a;
--accent-color: #2d9b8e;
--accent-light: #40d5b5;
```

### Sunset Orange
```css
--primary-color: #1a0f0a;
--secondary-color: #3d2419;
--accent-color: #ff6b35;
--accent-light: #ffa600;
```

## Font Awesome Icon Suggestions

### Technology Icons
- `fas fa-code` - General coding
- `fas fa-database` - Database
- `fas fa-server` - Backend/Server
- `fas fa-globe` - Web/Globe
- `fas fa-cube` - 3D/Modules
- `fas fa-puzzle-piece` - Components
- `fas fa-cogs` - Settings/Tools
- `fas fa-chart-bar` - Analytics

### Project Icons
- `fas fa-shopping-cart` - E-commerce
- `fas fa-tasks` - Task management
- `fas fa-comments` - Chat/Messaging
- `fas fa-cloud-sun` - Weather
- `fas fa-file-alt` - Content/Blog
- `fas fa-chart-bar` - Dashboard
- `fas fa-lock` - Security
- `fas fa-home` - Portfolio/Real estate

### Social Icons
- `fab fa-github` - GitHub
- `fab fa-linkedin` - LinkedIn
- `fab fa-twitter` - Twitter
- `fab fa-instagram` - Instagram
- `fab fa-facebook` - Facebook
- `fab fa-dribbble` - Dribbble
- `fab fa-codepen` - CodePen
- `fab fa-dev` - Dev.to

## SEO Meta Tags

```html
<!-- Update in index.html <head> -->
<meta name="description" content="Your portfolio description - 160 characters">
<meta name="keywords" content="fullstack developer, react, nodejs, web development">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name | Fullstack Developer">
<meta property="og:description" content="Your portfolio description">
<meta property="og:image" content="/og-image.png">
<meta property="og:url" content="https://yourportfolio.com">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@yourhandle">
```

## Analytics Integration

### Google Analytics
```javascript
// Add to public/index.html before closing </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Contact Form Integration

### Option 1: EmailJS (Free tier available)
```javascript
// Install: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');

const sendEmail = async (formData) => {
  try {
    await emailjs.send('service_id', 'template_id', formData);
    // Show success message
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Option 2: Formspree (Free tier available)
```javascript
const handleSubmit = async (formData) => {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

### Option 3: Custom Backend
```javascript
const API_URL = 'https://your-backend.com/api';

const sendEmail = async (formData) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return response.json();
};
```

## Animation Timing

Adjust in component JSX:
```jsx
// Add delay to staggered animations
style={{ animationDelay: `${index * 0.1}s` }}

// Fast: 0.3s
// Normal: 0.6s
// Slow: 0.8s
```

## Performance Tips

1. **Image Optimization**
   - Use WebP format where possible
   - Compress PNG/JPG before adding
   - Tools: TinyPNG, ImageOptim, Squoosh

2. **Code Splitting**
   - React.lazy() for large components
   - Dynamic imports for routes

3. **Caching**
   - Vite handles static assets
   - Add service worker for PWA

4. **Lighthouse Audit**
   - DevTools > Lighthouse
   - Target: 90+ score

## Deployment Checklist

- [ ] Update personal information
- [ ] Add all projects and descriptions
- [ ] Update social links
- [ ] Test on mobile devices
- [ ] Run npm run build
- [ ] Test production build with npm run preview
- [ ] Configure analytics
- [ ] Set up email service
- [ ] Update SEO meta tags
- [ ] Custom domain (optional)
- [ ] SSL certificate (auto with most hosts)
- [ ] Deploy to hosting platform

---

Last updated: January 2026
