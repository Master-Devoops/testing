# 4 Attach Login API

This folder connects the auth UI to backend API endpoints.

## What happens in this folder

- Keeps the multi-page auth flow (Website, Login, Register, Forgot Password, Dashboard, NotFound).
- Integrates frontend auth forms with backend endpoints using `fetch`.
- Sends login requests to `http://localhost:3000/login`.
- Sends register requests to `http://localhost:3000/register`.
- Stores login data in `localStorage` after successful login.

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

## Important note

For API-based login/register to work, the `Backend` server must be running and MySQL must be configured.

## Main files

- `src/Login/Login.jsx`: login API call and user feedback handling.
- `src/Register/Register.jsx`: registration validations and API call.
- `src/App.jsx`: route wiring for all pages.
