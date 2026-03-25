# HERO.IO — Productive Apps Showcase

HERO.IO is a responsive React application for discovering apps, viewing detailed ratings analytics, and managing personal installations with localStorage persistence.

## App Features

- Responsive layout for mobile, tablet, and desktop.
- Home page with banner, stats section, and top apps grid.
- All Apps page with live case-insensitive search and loading state.
- App Details page with install action, toast feedback, and Recharts review chart.
- My Installation page with localStorage-backed installed app list.
- Uninstall feature with toast notification.
- Sort installed apps by downloads (`High-Low` and `Low-High`).
- Custom error page for invalid routes.
- SPA deployment fallback via `public/_redirects`.

## Technologies

- React 19
- Vite
- React Router DOM
- Tailwind CSS + DaisyUI
- React Icons
- Recharts
- React Hot Toast

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```
