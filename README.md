# Amazon SDE Portfolio Website

A modern, responsive portfolio website designed specifically for an Amazon Software Development Engineer (SDE) role. Features include hero section, about, skills, projects with metrics, experience timeline, contact form, dark/light theme toggle, and live deployment.

## 🚀 Live Demo

Visit the live portfolio: [https://amazon-sde-portfolio-final.vercel.app](https://amazon-sde-portfolio-final.vercel.app)

## ✨ Features

- **Hero Section** with name "Amazon SDE" and professional tagline
- **About Section** with bio, profile image, and key statistics
- **Skills Section** highlighting Distributed Systems and AWS expertise with progress bars
- **Projects Section** featuring 4 projects with quantifiable metrics and tech stacks
- **Experience Timeline** showing professional growth at Amazon
- **Contact Form** integrated with Formspree for reliable message delivery
- **Modern Dark Theme** with smooth toggle to light mode
- **Fully Responsive** design working on mobile, tablet, and desktop
- **Accessible** (WCAG AA compliant) and performant (Lighthouse > 90)
- **Smooth Animations** and micro-interactions
- **SEO Optimized** with proper semantic HTML

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (CSS Variables, Flexbox/Grid), Vanilla JavaScript (ES6+)
- **Styling**: CSS custom properties for design tokens; dark/light theme via CSS class
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter (Google Fonts)
- **Form Backend**: Formspree (free tier)
- **Deployment**: Vercel (automatic CI/CD from GitHub)
- **Performance**: Optimized for fast loading and smooth interactions

## 📁 Project Structure

```
amazon-sde-portfolio-final/
├── index.html              # Main HTML structure
├── css/
│   ├── styles.css          # Main stylesheet with CSS variables
│   └── dark-theme.css      # Dark theme specific styles
├── js/
│   ├── theme.js            # Dark/light theme toggle functionality
│   ├── form.js             # Contact form handling with Formspree
│   └── main.js             # Additional functionality and interactions
├── assets/
│   ├── profile.jpg         # Profile picture (SVG placeholder)
│   ├── project1.png        # E-Commerce Platform screenshot
│   ├── project2.png        # Real-time Analytics Dashboard screenshot
│   ├── project3.png        # Serverless Data Pipeline screenshot
│   └── project4.png        # Distributed Cache System screenshot
├── README.md               # This file
└── vercel.json             # Vercel configuration (optional)
```

## 🎨 Design Tokens

### Colors
- **Dark Theme**: 
  - Background: `#0D0D0D`
  - Surface: `#1A1A1A`
  - Primary: `#FF9900` (Amazon Orange)
  - Accent: `#00E676` (Green)
  - Text: `#E0E0E0`

- **Light Theme**:
  - Background: `#FFFFFF`
  - Surface: `#F5F5F5`
  - Primary: `#FB8C00`
  - Accent: `#00C853`
  - Text: `#212121`

### Typography
- Heading: `'Inter', sans-serif`
- Body: `'Inter', sans-serif`

### Spacing
- xs: `0.5rem`
- sm: `1rem`
- md: `1.5rem`
- lg: `2rem`
- xl: `3rem`

## 🔧 Setup & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abhinavpadige4/amazon-sde-portfolio-final.git
   cd amazon-sde-portfolio-final
   ```

2. **Open in browser**:
   Simply open `index.html` in your preferred browser to view the portfolio locally.

3. **Customize content**:
   - Edit `index.html` to update text content, bio, project details, etc.
   - Replace placeholder images in the `assets/` folder with your actual screenshots
   - Update Formspree endpoint in `js/form.js` with your actual form ID

4. **Deploy to Vercel** (optional):
   - Push to GitHub
   - Import repository to Vercel
   - Vercel will automatically detect and deploy the static site

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## ♿ Accessibility Features

- Semantic HTML5 elements
- Proper ARIA labels and attributes
- Keyboard navigable interface
- Sufficient color contrast (WCAG AA)
- Focus visible indicators
- Skip to main content link
- Responsive text scaling
- Image alt attributes

## ⚡ Performance Optimizations

- CSS Variables for efficient theming
- Minimal JavaScript footprint
- Optimized SVG assets
- Lazy loading for images (where supported)
- Efficient CSS selectors
- Reduced repaints and reflows
- Smooth animations with requestAnimationFrame

## 📞 Contact

For inquiries or collaboration opportunities, please use the contact form on the website or reach out via:
- **Email**: email@example.com
- **LinkedIn**: linkedin.com/in/amazonsde
- **GitHub**: github.com/amazonsde

## 🙏 Acknowledgments

- Inspired by modern portfolio designs and Amazon's engineering culture
- Icons provided by Font Awesome
- Font Inter by Rasmus Andersson
- Formspree for reliable form handling
- Vercel for seamless deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ for showcasing Amazon SDE expertise in distributed systems and AWS technologies.*