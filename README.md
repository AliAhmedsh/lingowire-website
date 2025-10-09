# Lingowire Landing Page

A modern, responsive landing page for Lingowire - a language learning app that focuses on real conversations and community connections.

## Features

- 🎨 Beautiful gradient design matching the mobile app's color scheme
- 📱 Fully responsive layout for all devices
- 📝 Waitlist signup form for early adopters
- 👨‍🏫 Tutor/contributor interest form
- ✨ Smooth animations and interactions
- 🚀 Built with React + Vite for optimal performance

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **EmailJS** - Form submission handling (ready for integration)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the website directory:
```bash
cd lingowire-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Form Integration

The forms are currently set up with demo functionality. To connect them to a real backend:

1. **EmailJS Integration** (Recommended for quick setup):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your public key
   - Replace `YOUR_PUBLIC_KEY` in `App.jsx` line 43
   - Create email templates for waitlist and tutor forms
   - Update the form submission handlers with your service and template IDs

2. **Custom Backend Integration**:
   - Replace the demo submission logic in `handleWaitlistSubmit` and `handleTutorSubmit` functions
   - Send form data to your API endpoints

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deployment Options

1. **Netlify** (Recommended):
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repo for automatic deployments

2. **Vercel**:
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel` in the project directory

3. **GitHub Pages**:
   - Install gh-pages: `npm install --save-dev gh-pages`
   - Add to package.json scripts: `"deploy": "npm run build && gh-pages -d dist"`
   - Run `npm run deploy`

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary Purple: `#667eea`
- Dark Purple: `#764ba2`
- Pink: `#f093fb`

### Content
All text content is directly in `App.jsx` and can be easily modified.

### Animations
Custom animations are defined in `tailwind.config.js` and can be adjusted for different effects.

## Support

For any questions or issues, contact: admin@lingowire.com
