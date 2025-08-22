# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Frontend & Backend Development:**
- `npm run dev:full` - Run both frontend (Vite) and backend (Express) concurrently
- `npm run dev` - Frontend only (http://localhost:5173)
- `npm run server:dev` - Backend only with nodemon (http://localhost:3001)
- `npm run server:start` - Backend production mode

**Build & Quality:**
- `npm run build` - TypeScript compile + Vite production build
- `npm run lint` - ESLint check
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a full-stack portfolio website with frontend/backend separation:

**Frontend (React + TypeScript + TailwindCSS):**
- Single-page application with scroll-based navigation
- All components wrapped in `LanguageProvider` for i18n
- Components follow a section-based layout: Hero → About → Portfolio → Resume → Contact
- Styling uses TailwindCSS with custom theme colors (`accent` = #646cff)

**Backend (Node.js + Express):**
- Standalone API server in `/server` directory
- Single endpoint: `POST /api/contact` for email functionality
- Uses nodemailer with Gmail SMTP, rate limiting, and CORS

**Internationalization System:**
- Context-based with `LanguageContext` providing `t()` function
- Supports English ('en') and Portuguese ('pt')
- All translations stored in large nested object in `LanguageContext.tsx`
- Language switcher in navigation toggles between languages

## Key Architecture Patterns

**Translation Usage:**
```tsx
const { t, language } = useLanguage();
// Use t('key.subkey') for all text content
```

**Email Flow:**
- Frontend posts to `/api/contact` with form data + language
- Backend sends two emails: user confirmation + admin notification
- Email templates are language-aware and HTML-formatted
- Requires `.env` configuration in `/server` directory

**Component Structure:**
- Each section component is self-contained with its translations
- Navigation handles smooth scrolling to section IDs
- Contact form manages submission state (idle/loading/success/error)

## Environment Configuration

Backend requires `/server/.env` file:
```env
EMAIL_USER=gmail-address
EMAIL_PASS=gmail-app-password
PORT=3001
NODE_ENV=development
```

## Contact Form Integration

The Contact component makes API calls to the backend and expects:
- Success: User gets confirmation email, admin gets notification at gabriel.vieira24@outlook.com
- Error handling with user-friendly messages
- Rate limiting: 5 emails per 15 minutes per IP

When modifying contact functionality, remember the dual-email system and language-aware templates.