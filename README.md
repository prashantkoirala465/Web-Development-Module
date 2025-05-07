# Web Development Portfolio - Prashant Koirala

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)

A comprehensive portfolio showcasing my web development journey from fundamental HTML concepts to sophisticated responsive design techniques. This project includes both weekly learning exercises and practical assignments that demonstrate progressive skill development.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Landing Page](#landing-page)
- [Weekly Activities](#weekly-activities) 
- [Assignments](#assignments)
- [Responsive Design](#responsive-design)
- [Installation & Setup](#installation--setup)
- [Deployment](#deployment)
- [Browser Compatibility](#browser-compatibility)
- [Future Enhancements](#future-enhancements)
- [Credits](#credits)
- [License](#license)

## Overview

This portfolio documents my progression through web development fundamentals, starting from basic HTML tags in Week 1 and advancing to responsive design techniques with Flexbox and CSS Grid in Week 4. The repository includes both structured weekly learning activities and comprehensive assignments that apply these skills in practical scenarios.

The project is unified by a professional, Apple-inspired landing page that serves as a central hub, connecting all components through an intuitive, responsive bento grid interface with smooth animations and transitions.

## Project Structure

```
web-development-module/
├── index.html               # Main landing page with bento grid showcase
├── assets/                  # Shared assets for landing page
│   ├── css/                 # CSS stylesheets
│   ├── js/                  # JavaScript files
│   ├── images/              # Images and media files
│   └── favicon.png          # Site favicon
├── Weekly Activities/       # Structured learning exercises
│   ├── Week 1/              # Basic HTML fundamentals
│   ├── Week 2/              # Introduction to internal CSS
│   ├── Week 3/              # External CSS implementation
│   └── Week 4/              # Responsive design techniques
│       ├── index.html       # Week 4 overview
│       ├── media-queries.html # Media queries examples
│       ├── flexbox.html     # Flexbox demonstrations
│       ├── grid.html        # CSS Grid layouts
│       ├── contact.html     # Responsive contact form
│       └── css/             # Shared styles for Week 4
└── Assignments/             # Practical implementation projects
    ├── ID Card/             # HTML/CSS ID card project
    │   ├── index.html       # ID card layout
    │   └── css/             # ID card styles
    └── Simple Website/      # Responsive website project
        ├── index.html       # Website home page
        └── css/             # Website stylesheets
```

## Features

### Main Landing Page
- **Modern Bento Grid Layout**: Visually engaging card-based interface showcasing projects and weekly activities
- **Custom Cursor Effects**: Interactive cursor follower with hover animations
- **Dynamic Theme Switching**: Toggle between light and dark modes with system preference detection
- **Smooth Animations**: GSAP-powered animations for enhanced user experience
- **Fully Responsive Design**: Adapts seamlessly across all device sizes
- **Accessibility Focused**: Semantic HTML structure with keyboard navigation support

### Weekly Activities
- **Week 1**: Introduction to HTML tags and document structure
- **Week 2**: Implementation of internal CSS styling techniques
- **Week 3**: External CSS organization and best practices
- **Week 4**: Comprehensive responsive design module including:
  - Media queries for different viewport sizes
  - Flexbox for one-dimensional layouts
  - CSS Grid for two-dimensional layouts
  - Responsive contact form implementation

### Assignments
- **ID Card**: 
  - Personal identification card with custom styling
  - Dynamic QR code integration
  - Social media links
  - Responsive layout that maintains proportions across devices

- **Simple Website**:
  - Responsive navigation with mobile menu
  - Hero section with call-to-action
  - Feature section highlighting key offerings
  - Embedded video with custom controls
  - Contact section and footer with social links
  - JavaScript enhancements for interactivity

## Technologies Used

### Core Technologies
- **HTML5**: Semantic markup and document structure
- **CSS3**: Modern styling techniques including:
  - Custom properties (CSS variables)
  - Flexbox layouts
  - CSS Grid systems
  - Media queries
  - Animations and transitions
- **JavaScript**: Enhanced interactivity and user experience

### Libraries & Frameworks
- **GSAP (GreenSock Animation Platform)**: Advanced animations and scroll effects
- **ScrollTrigger**: Scroll-based animations
- **Lottie**: High-quality vector animations
- **Font Awesome**: Scalable vector icons

## Landing Page

The central landing page serves as a hub connecting all projects through a modern bento grid layout. Key components include:

- **Header**: Fixed navigation with smooth scrolling links
- **Hero Section**: Animated introduction with Lottie animation
- **Projects Section**: Bento grid showcasing assignments
- **Weekly Activities**: Categorized links to all weekly materials
- **About Section**: Personal information and skills overview
- **Footer**: Site navigation and social links

### Design Philosophy

The landing page follows Apple's design aesthetics with:
- Clean typography using the Inter font family
- Ample white space for content breathing room
- Subtle shadows and smooth transitions
- Consistent color palette with accent highlighting
- Intuitive visual hierarchy and content organization

## Weekly Activities

The weekly activities section documents my progression through fundamental web development concepts:

### Week 1: HTML Fundamentals
Introduction to HTML document structure, semantic elements, text formatting, links, images, and basic page layouts.

### Week 2: Internal CSS
Implementation of styling within HTML documents using the `<style>` tag, covering selectors, color properties, text styling, box model, and basic layouts.

### Week 3: External CSS
Organization of styles into separate CSS files, demonstrating separation of concerns, CSS file linking, and reusable style patterns.

### Week 4: Responsive Design
Comprehensive responsive design techniques showcased across five interlinked pages:
- **Overview**: Introduction to responsive design principles
- **Media Queries**: Viewport-based conditional styling
- **Flexbox**: One-dimensional flexible layouts
- **CSS Grid**: Two-dimensional grid-based layouts
- **Contact Page**: Practical implementation of responsive form design

## Assignments

### ID Card Project
A digital student identification card created with HTML and CSS featuring:
- Profile information section
- Custom styling with gradients and shadows
- Responsive design that maintains card proportions
- QR code for digital verification
- Contact information with interactive icons

### Simple Website
A complete responsive website for a fictional web development learning platform named "TechLearn" featuring:
- Responsive navigation menu with mobile functionality
- Hero section with compelling call-to-action
- Feature cards highlighting key offerings
- Video tutorial section with custom playback
- About section with background information
- Contact form and detailed footer
- Interactive JavaScript enhancements

## Responsive Design

All components of this project implement responsive design principles, ensuring optimal viewing experiences across a variety of devices from mobile phones to large desktop monitors. Key responsive techniques used include:

- **Fluid Typography**: Text that scales proportionally with viewport size
- **Flexible Images**: Images that resize within their containers
- **Responsive Units**: Use of relative units (rem, em, %, vh, vw) instead of fixed pixels
- **Media Queries**: Breakpoint-based layout adjustments
- **Mobile-First Approach**: Core design for mobile with progressive enhancement for larger screens
- **Flexible Layouts**: Using Flexbox and CSS Grid for adaptive content organization

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prashantkoirala/web-development-module.git
   cd web-development-module
   ```

2. **Local Development:**
   - Open `index.html` in your browser to view the main landing page
   - Navigate through project components using the bento grid interface
   - No build process or dependencies required for basic viewing

3. **Development with Live Server (recommended):**
   - Install Visual Studio Code if not already installed
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"
   - The site will open in your default browser with live reload enabled

## Deployment

This project is optimized for deployment on Vercel, but can be hosted on any static site hosting service:

### Vercel Deployment
1. Fork or clone this repository to your GitHub account
2. Connect your GitHub account to Vercel
3. Create a new project in Vercel, importing this repository
4. Use the following settings:
   - Framework preset: `Other`
   - Build command: None (static site)
   - Output directory: `.` (root)
   - Install command: None

### Other Hosting Options
The project can also be deployed to:
- GitHub Pages
- Netlify
- AWS S3 + CloudFront
- Any standard web hosting service

## Browser Compatibility

This project has been tested and confirmed working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+
- Mobile Safari iOS 14+
- Chrome for Android 90+

## Future Enhancements

Planned improvements for future iterations:
- Integration of a static site generator for improved content management
- Addition of a blog section to document learning experiences
- Implementation of a contact form with serverless function handling
- Enhanced accessibility features with ARIA attributes
- Performance optimizations for image loading
- Progressive Web App (PWA) capabilities

## Credits

- **Fonts**: Google Fonts (Inter)
- **Icons**: Font Awesome
- **Animations**: Lottie Files
- **Images**: Unsplash
- **Animation Library**: GSAP by GreenSock

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Created with ❤️ by Prashant Koirala © 2025
