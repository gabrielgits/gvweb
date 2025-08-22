# Gabriel Vieira - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS featuring multilingual support (English/Portuguese) and email contact functionality.

## Features

- 🎨 **Modern Design**: Clean, professional design inspired by villa agency template
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🌐 **Multilingual**: Support for English (USA) and Portuguese (Portugal)
- 📧 **Contact Form**: Functional contact form with email notifications
- ⚡ **Fast**: Built with Vite for optimal performance
- 🎯 **SEO Optimized**: Meta tags and semantic HTML structure

## Tech Stack

**Frontend:**
- React 19 with TypeScript
- TailwindCSS for styling
- Vite for build tooling
- Google Fonts (Inter + Open Sans)

**Backend:**
- Node.js with Express
- Nodemailer for email functionality
- Rate limiting for security
- CORS enabled

## Project Structure

```
gvweb/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── contexts/           # React contexts
│   │   └── LanguageContext.tsx
│   ├── index.css          # Global styles
│   ├── App.tsx            # Main app component
│   └── main.tsx           # App entry point
├── server/                 # Backend API
│   ├── server.js          # Express server
│   ├── package.json       # Server dependencies
│   └── .env.example       # Environment variables template
└── public/                # Static assets
```

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 2. Configure Email (Required for contact form)

Create a `.env` file in the `server` directory:

```bash
cd server
cp .env.example .env
```

Edit the `.env` file with your email configuration:

```env
# Gmail configuration (recommended)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password  # Use App Password, not regular password

# Server configuration
PORT=3001
NODE_ENV=development
```

**Setting up Gmail App Password:**
1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use this App Password in the `.env` file

### 3. Run the Application

**Option 1: Run frontend and backend together (recommended)**
```bash
npm run dev:full
```

**Option 2: Run separately**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server:dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### 4. Build for Production

```bash
# Build frontend
npm run build

# The build files will be in the 'dist' directory
```

## Contact Form Functionality

The contact form provides:

1. **User Experience:**
   - Form validation
   - Loading states
   - Success/error messages
   - Automatic confirmation email to user

2. **Admin Notifications:**
   - Email notifications sent to gabriel.vieira24@outlook.com
   - Formatted with contact details and message
   - Timestamps for easy tracking

3. **Security Features:**
   - Rate limiting (5 emails per 15 minutes per IP)
   - Input validation
   - CORS protection

## Multilingual Support

The website supports:
- **English (USA)**: Default language
- **Portuguese (Portugal)**: Complete translation

Language switching is available via the navigation menu and persists during the session.

## Customization

### Adding New Languages
1. Add translations to `src/contexts/LanguageContext.tsx`
2. Update the language type and add to the switcher

### Modifying Content
- Personal information: Update components directly
- Projects: Modify the projects array in `Portfolio.tsx`
- Resume: Update the experience/education arrays in `Resume.tsx`

### Styling
- Colors: Modify `tailwind.config.js`
- Fonts: Update the Google Fonts import in `index.css`
- Layout: Adjust component styles using TailwindCSS classes

## Deployment

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` directory
3. Configure redirects for SPA routing

### Backend Deployment (Railway/Heroku)
1. Deploy the `server` directory
2. Set environment variables in hosting platform
3. Update frontend API URLs to production backend

## Environment Variables

**Server (.env):**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3001
NODE_ENV=production
```

## License

This project is private and proprietary to Gabriel Vieira.

## Contact

- **Email**: gabriel.vieira24@outlook.com
- **LinkedIn**: https://www.linkedin.com/in/gabrielvieira24/
- **Phone**: +1 (641) 233 9871 (USA) / +244 943 962 996 (Angola)
