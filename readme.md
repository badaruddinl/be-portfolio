# Fastify 5 Framework — Application Documentation

This project is a backend starter powered by **Fastify v5**, written in **TypeScript**, and using **TypeORM** for database access.

It is designed to be:

* simple to understand
* easy to extend
* suitable for real production APIs

It includes authentication, logging, Swagger documentation, Docker support, and a clean routing pattern.

---

## 🚀 Features Included

### Fastify

Main HTTP framework:

* fast and lightweight
* plugin-based design
* great TypeScript support

### TypeORM + MySQL

Database layer with migrations:

* entities and repositories
* automatic schema migrations
* connection pooling

### Swagger Docs

`@fastify/swagger` + `@fastify/swagger-ui`

* auto‑generated API documentation
* available at `/swagger`

### Authentication

Using:

* **jsonwebtoken** for JWT tokens
* **argon2** for secure password hashing

### Logging (pino-pretty)

Readable and safe logs:

* hides passwords and tokens
* shows method, url, status, and response time

### Route Helper

Reusable helper to define routes with:

* authorization control
* custom pre-handlers
* validation schemas

### Docker Ready

Run the whole app easily in containers.

---

## 📦 Scripts

```bash
npm run dev              # Development mode (watch)
npm run build            # Compile TypeScript
npm run start            # Run compiled build
npm run migration:generate
npm run migration:run
npm run migration:revert
```

---

## ▶️ Run Locally

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Create environment file

```bash
cp .env.example .env
```

Example values:

```
PORT=8080
HOST=0.0.0.0
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=password
DB_NAME=mydb

JWT_SECRET=supersecret
```

### 3️⃣ Start the app

```bash
npm run dev
```

---

## 🐳 Run with Docker

**Dockerfile:**

```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
CMD ["npm", "run", "dev"]
```

**docker-compose:**

```yaml
services:
  fastify-5:
    build: .
    container_name: fastify-5
    command: npm run dev
    ports:
      - "8080:8080"
    volumes:
      - ./app
      - /app/node_modules
    env_file:
      - .env.docker
    networks:
      - dev-network

networks:
  dev-network:
    external: true
```

Run:

```bash
docker compose up -d
```

---

## 🏁 Application Bootstrap (`src/app.ts`)

The app performs:

* create Fastify server
* attach logger
* register Swagger
* register global error handler
* register routes
* connect to database

Swagger UI:

```
http://localhost:8080/swagger
```

---

## 🌐 Entry Point (`src/index.ts`)

Responsible for:

* initializing the app
* setting default environment mode
* starting the HTTP server
* catching startup errors

---

## 🛣️ Route Helper

Used to create consistent routes:

```ts
routeHelper({
  method: 'GET',
  url: '/users',
  handler,
  auth: true,
})
```

It supports:

* automatic auth guard when `auth = true`
* multiple pre-handlers
* Fastify validation schemas

---

## 🗄️ Database Migrations

Generate:

```bash
npm run migration:generate
```

Run:

```bash
npm run migration:run
```

Revert:

```bash
npm run migration:revert
```

---

## 📚 Swagger Documentation

Configuration lives in:

```
/services/swagger
```

Access API docs:

```
/swagger
```

---

## ✅ When to Use This Boilerplate

Good for:

* REST APIs
* small → medium → growing applications
* microservices

You can extend it with:

* CRUD examples
* authentication flows
* file uploads
* caching (Redis)

Feel free to adapt and build on top of it.
