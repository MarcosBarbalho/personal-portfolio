# Personal Portfolio

This repository provides a Docker-based development environment for the **personal-portfolio** project using Node.js.

---

## Requirements

* Docker
* Docker Compose (plugin recommended)

---

## Services

### npm

Responsible for installing project dependencies.

* Image: `node:25-alpine`
* Command: `npm install`
* Working directory: `/usr/local/src`
* Mounts the project directory into the container

---

### app

Runs the development server.

* Image: `node:25-alpine`
* Command: `npm run dev -- --host`
* Working directory: `/usr/local/src`
* Environment:

  * `NODE_ENV=development`
* Ports exposed:

  * `5173` → Vite development server
  * `4173` → Preview server
* Mounts the project directory into the container

---

## Setup

### 1. Clone the repository

### 2. Install dependencies

```bash
docker compose run --rm npm
```

### 3. Start the development server

```bash
docker compose up app
```

---

## Access

Once the application is running, open your browser:

* [http://localhost:5173](http://localhost:5173)

---

## Notes

* The project directory is mounted as a volume, allowing real-time updates during development.

---

## Stopping the Application

```bash
docker compose down --remove-orphans
```
