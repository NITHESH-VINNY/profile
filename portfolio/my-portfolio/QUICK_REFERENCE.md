# Quick Reference Card

## 🚀 Getting Started

```bash
cd my-portfolio
npm install
npm run dev
```

Visit: http://localhost:5173

---

## 📝 Key Files to Edit

| File | What to Edit | Line |
|------|-------------|------|
| `src/components/Hero.jsx` | Your name & intro | ~20 |
| `src/components/About.jsx` | Your bio & stats | ~10 |
| `src/components/Skills.jsx` | Your tech skills | ~10 |
| `src/data/projects.js` | Your projects | ~1 |
| `src/components/Contact.jsx` | Contact info & socials | ~45 |
| `src/styles/global.css` | Colors & theme | ~6 |

---

## 🎨 Colors (Global CSS)

```css
--primary-color: #0f172a;      /* Dark background */
--accent-color: #3b82f6;       /* Blue highlights */
--accent-light: #60a5fa;       /* Light blue */
--text-color: #e2e8f0;         /* Main text */
--text-light: #cbd5e1;         /* Secondary text */
```

---

## 🔗 Social Links Pattern

All components use this pattern:
```jsx
<a href="https://github.com/yourusername" target="_blank">
  <i className="fab fa-github"></i>
</a>
```

Platforms:
- `fab fa-github` - GitHub
- `fab fa-linkedin` - LinkedIn
- `fab fa-twitter` - Twitter
- `fas fa-envelope` - Email

---

## 📦 Build & Deploy

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Output folder: `dist/`

---

## 🎯 Component Structure

```
App.jsx (main container)
├── Navbar.jsx (sticky navigation)
├── Hero.jsx (introduction)
├── About.jsx (background)
├── Skills.jsx (technical skills)
├── Projects.jsx (portfolio)
├── Contact.jsx (contact form)
└── Footer.jsx (footer links)
```

---

## ✨ Available Icons

### Technology
- `fas fa-code` - Code
- `fas fa-database` - Database
- `fas fa-server` - Server
- `fas fa-cogs` - Tools

### Projects
- `fas fa-shopping-cart` - E-commerce
- `fas fa-tasks` - Tasks
- `fas fa-comments` - Chat
- `fas fa-chart-bar` - Analytics

### Features
- `fas fa-star` - Star/Featured
- `fas fa-heart` - Like
- `fas fa-rocket` - Launch
- `fas fa-lock` - Secure

Full list: https://fontawesome.com/icons

---

## 🛠️ Common Customizations

### Add New Skill Category
**File**: `src/components/Skills.jsx`
```javascript
{
  category: 'Mobile',
  skills: ['React Native', 'Flutter', 'Swift']
}
```

### Add New Project
**File**: `src/data/projects.js`
```javascript
{
  title: 'My Project',
  description: 'What it does',
  technologies: ['Tech1', 'Tech2'],
  liveLink: 'https://...',
  githubLink: 'https://...',
  icon: 'fas fa-icon'
}
```

### Change Accent Color
**File**: `src/styles/global.css`
```css
--accent-color: #your-color;
--accent-light: #lighter-version;
```

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

Mobile menu auto-activates at 768px

---

## 🔄 Common Tasks

### Update Email Link
```jsx
<a href="mailto:your.email@example.com">Email Me</a>
```

### Update Phone Link
```jsx
<a href="tel:+1234567890">Call Me</a>
```

### Add External Link
```jsx
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link Text
</a>
```

### Add Local Link
```jsx
<a href="#projects">View Projects</a>
```

---

## 🎬 Animations

Auto-applied to components:
- `fade-in-up` - Fade in from bottom
- `fade-in-down` - Fade in from top
- `slide-in-left` - Slide in from left

Edit timing in global.css (@keyframes section)

---

## ❌ What NOT to Do

❌ Don't delete files without backing up
❌ Don't modify vite.config.js without reason
❌ Don't remove global.css imports
❌ Don't forget Font Awesome CDN in index.html
❌ Don't use absolute pixel widths (use %)

---

## ✅ Deployment Checklist

- [ ] `npm run build` succeeds
- [ ] `npm run preview` works
- [ ] All links are correct
- [ ] Social links point to your accounts
- [ ] Email/phone are your actual info
- [ ] Projects have real links
- [ ] Test on mobile
- [ ] Check in different browsers
- [ ] Copy `dist/` folder to host

---

## 📞 Quick Links

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Font Awesome**: https://fontawesome.com
- **Color Picker**: https://htmlcolorcodes.com
- **Can I Use**: https://caniuse.com

---

## 🐛 Debug Mode

Open browser DevTools (F12):
- **Console**: Check for errors
- **Network**: Check loading
- **Elements**: Inspect HTML
- **Styles**: Check CSS

---

## 📊 Project Stats

- **Lines of Code**: ~2,500
- **Components**: 7
- **CSS Files**: 8
- **Dependencies**: 2 (React, React-DOM)
- **Dev Dependencies**: 2 (Vite, Plugin-React)

---

## 🎓 Learning Next Steps

After customizing:
1. Learn advanced React patterns
2. Add backend API integration
3. Implement authentication
4. Add database functionality
5. Deploy to production
6. Set up CI/CD pipeline

---

## 💡 Tips & Tricks

1. **Smooth Scrolling**: Already enabled in global.css
2. **Mobile Testing**: Use DevTools device emulation
3. **Performance**: Run Lighthouse audit regularly
4. **Accessibility**: Check WCAG compliance
5. **SEO**: Update meta tags in index.html
6. **Analytics**: Add Google Analytics code
7. **Error Tracking**: Consider Sentry integration

---

## 🎉 You're All Set!

Your portfolio is ready. Time to:
1. ✏️ Customize with your info
2. 🧪 Test thoroughly
3. 🚀 Deploy to the world
4. 📢 Share with everyone!

---

**Questions?** Check README.md, SETUP.md, or CONFIG.md

**Good luck!** 🚀✨
