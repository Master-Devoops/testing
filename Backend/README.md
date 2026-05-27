# Backend

This folder contains the Express + MySQL API used by the frontend auth projects.

## What happens in this folder

- Starts an Express server with JSON and CORS middleware.
- Connects to MySQL using environment variables.
- Provides user registration and login endpoints.
- Hashes passwords with `bcrypt` before saving.
- Compares hashed passwords during login.

## API endpoints

- `POST /register` -> creates a user with hashed password.
- `POST /login` -> verifies user email/password.
- `GET /` -> health check response.

## Environment variables

Create a `.env` file in this folder:

```env
PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
```

## Run this project

```bash
npm install
npm start
```

## Main file

- `server.js`: all server, DB connection, and auth route logic.
