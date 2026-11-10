# Vishnu Vardhan Guptha — Portfolio

Responsive React + Vite portfolio with a minimalist / bento-inspired layout, light/dark theme toggle, project cards, education timeline, skills, experience, GitHub public profile statistics, contribution calendar and contact section.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a new public GitHub repository, for example `vishnu-vardhan-portfolio`.
2. Import the repository into Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Add a professional project domain such as `vishnu-vardhan-portfolio.vercel.app` (subject to availability).

## Before publishing — important checklist

- Replace the five CSS-generated interface illustrations in `src/App.jsx` with genuine screenshots captured from the actual projects. Current illustrations are explicitly illustrative, not screenshots.
- Add a public demo URL or a recorded walkthrough URL for Split-Even, E-Commerce, Fashion-Finds and Job Tracker. Only InstaShare's supplied deployment is currently linked. Their cards show `Demo link needed` until then.
- The contact form currently validates fields and opens a prefilled `mailto:` message. Connect Formspree or EmailJS and test real delivery before claiming the form is live.
- Confirm the Google Drive resume link is shared as `Anyone with the link — Viewer`.
- Confirm that publishing your phone number and email publicly is acceptable.
- Check the contribution chart and GitHub API stats after deployment; external GitHub services may rate-limit or change.
- Audit the Automated-Resume-Analysis repository for the exposed hardcoded database credential. Rotate it and clean the repository history before featuring that project.

## Profile assets

- `public/assets/profile.png`: user-provided portrait.
- `public/assets/Vishnu-Vardhan-Guptha-Resume.pdf`: supplied resume for direct download.

The View Resume button opens the supplied Google Drive URL. The Download Resume button downloads the bundled PDF.
