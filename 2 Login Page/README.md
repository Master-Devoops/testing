# 2 Login Page

This folder adds authentication UI screens on top of the basic React setup.

## What happens in this folder

- Adds routing with `react-router-dom`.
- Provides a Login screen and a Forgot Password screen.
- Captures form input locally (currently logs values in console, no backend call in this step).
- Represents the first UI-only auth flow prototype.

## Routes

- `/` -> Login
- `/forgotpassword` -> Forgot Password

## Run this project

```bash
npm install
npm run dev
```

## Main files

- `src/App.jsx`: route definitions.
- `src/Login/Login.jsx`: login form UI and state.
- `src/ForgotPassword/ForgotPassword.jsx`: reset form UI.
