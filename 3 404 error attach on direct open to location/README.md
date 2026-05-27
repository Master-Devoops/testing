# 3 404 Error Attach on Direct Open to Location

This folder extends the auth UI flow and adds a 404 fallback page.

## What happens in this folder

- Adds multiple pages: Website landing, Login, Register, Forgot Password, Dashboard.
- Adds a catch-all route (`*`) that shows a custom `NotFound` page.
- Improves navigation flow when users open invalid URLs directly.
- Keeps this stage frontend-only (no API integration yet).

## Routes

- `/` -> Website
- `/login` -> Login
- `/register` -> Register
- `/forgotpassword` -> Forgot Password
- `/dashboard` -> Dashboard
- `*` -> NotFound

## Run this project

```bash
npm install
npm run dev
```

## Main files

- `src/App.jsx`: full route map and wildcard 404 route.
- `src/NotFound/NotFound.jsx`: custom 404 UI.
- `src/Website/Website.jsx`: landing page with Login/Register navigation.
