# 🚀 React CI/CD Pipeline with Docker & GitHub Actions

This project demonstrates a complete **CI/CD pipeline** for a React application using modern DevOps practices.

It includes:

* ⚛️ React app (built with Vite)
* 🧪 Unit testing with Vitest
* 🐳 Docker multi-stage build
* 🌐 Nginx for production serving
* ⚙️ Automated CI/CD using GitHub Actions
* 📦 Docker image publishing to Docker Hub

---

## 📁 Project Structure

```
my-react-app/
├── src/
│   ├── App.jsx
│   └── App.test.jsx
├── public/
├── package.json
├── Dockerfile
├── nginx.conf
├── .dockerignore
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## ⚙️ CI/CD Workflow

This project uses **GitHub Actions** to automate the pipeline.

### 🔄 Workflow Steps

1. Checkout code
2. Install dependencies
3. Run tests (Vitest)
4. Build Docker image
5. Push image to Docker Hub

---

## 🧪 Testing

* Framework: Vitest
* Library: React Testing Library

Run tests locally:

```bash
npm test
```

---

## 🐳 Docker Setup

### Build Docker Image

```bash
docker build -t yourusername/my-react-app .
```

### Run Container

```bash
docker run -p 3000:80 yourusername/my-react-app
```

Visit:
👉 http://localhost:3000

---

## 🏗️ Docker Architecture

* **Stage 1:** Build React app using Node.js
* **Stage 2:** Serve using Nginx

✔ Optimized image size
✔ Production-ready setup

---

## 🔐 Environment Setup

You must configure GitHub Secrets:

| Secret Name        | Description                            |
| ------------------ | -------------------------------------- |
| DOCKERHUB_USERNAME | Your Docker Hub username               |
| DOCKERHUB_TOKEN    | Docker Hub access token (Read & Write) |

---

## 🚀 Deployment Flow

Every push to `main` branch triggers:

```text
Code Push → Test → Build → Dockerize → Push to Docker Hub
```

---

## 🧠 Key Learnings

* CI/CD pipeline setup from scratch
* Docker multi-stage builds
* Handling environment issues (DNS, tokens, paths)
* Debugging real-world pipeline failures
* Difference between CRA vs Vite build outputs

---
