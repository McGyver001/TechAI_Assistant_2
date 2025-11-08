TechAI Assistant - Final Ready package (mobile-first)

Overview:
- Mobile-optimized React + Vite app
- Live-updating inline SVG efficiency sparkline (no external chart libs)
- Login screen, action cards, performance view, chat, admin demo
- assets/ford-logo.png placeholder included

How to deploy:
1. Create a new GitHub repo and upload the contents of this folder (all files & folders) to the repo root.
2. In Vercel, import the repo. Use:
   - Framework: Vite
   - Build command: npm run build
   - Output dir: dist
Notes: This package avoids extra chart deps by using an inline SVG sparkline to ensure clean builds on Vercel.
