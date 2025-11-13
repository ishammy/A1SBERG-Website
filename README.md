# A1SBERG - Developer Guide

This repository for **A1SBERG**, a **Next.js** website built with **React**, **Tailwind CSS**, and **Framer Motion**.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) – React framework for static export.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework.
- [Shadcn UI](https://ui.shadcn.com/) – Component library built on Tailwind CSS.
- [Framer Motion](https://www.framer.com/motion/) – Animations and transitions.
- [Lucide Icons](https://lucide.dev/) – Icon library.
- [MongoDB](https://www.mongodb.com/) – Database for backend integration.
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
git clone https://github.com/ishammy/A1SBERG-Website.git
cd A1SBERG-Website
npm install
```

### 2. Run the App
```bash
npm run dev
```
