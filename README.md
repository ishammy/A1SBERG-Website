# A1SBERG - Developer Guide

This repository contains the source code for **A1SBERG**, a client-only **Next.js** website built with **React**, **Tailwind CSS**, and **Framer Motion**. This README is intended for developers working on the project, focusing on setup, development workflow, and deployment.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) – React framework for static export.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework.
- [Framer Motion](https://www.framer.com/motion/) – Animations and transitions.
- [Lucide Icons](https://lucide.dev/) – Icon library.
- Node.js >= 18.x

---

## 📁 Project Structure

```
src/
├─ app/
│ ├─ layout.tsx 
│ ├─ page.tsx
│ └─ otherpage/
| |  └─ page.tsx  
├─ components/ # Reusable UI components
│ ├─ ui/ # UI Elements from Shadcn UI
│ └─ layout/ # Layout-specific components (navbar, footer)
├─ hooks/ # Custom React hooks
├─ utils/ # Utility functions
├─ actions/ # actions for sending and receiving data from backend
├─ services/ # External service integrations
├─ types/ # TypeScript types
└─  middleware.ts # Middleware logic
```

---

## ⚡ Development Setup

### 1. Clone and Install

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### 2. Run the App
```bash
npm run dev
```
