# Game Hub (Web)

A responsive web application for discovering, filtering, and exploring video games. Built with React, TypeScript, Vite, and Chakra UI for fast development and an accessible UI. This repository contains the web version of the project.

> If you are looking for the mobile version, it is available here:  
> **Mobile App Repository:** [Game-Hub-Mobile](https://github.com/KovinthKrishna/Game-Hub-Mobile)

---

## Features
- Browse games with clean, responsive UI
- Filter and search functionality
- Light and dark mode via Chakra UI
- API-driven data layer (Axios-based abstraction)
- Strongly typed with TypeScript
- Fast dev + HMR using Vite

---

## Technologies used
| Layer            | Technology |
|------------------|------------|
| Framework        | React 18 + TypeScript |
| Build Tool       | Vite 5 |
| UI Library       | Chakra UI |
| HTTP Client      | Axios |
| Icons            | React Icons |

---

## Environment Variables

The project uses Vite, so environment variables must be prefixed with `VITE_` to be exposed to client code.

Create a `.env` (or `.env.local`) in the project root.

### Expected Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_RAWG_API_KEY` | API key for RAWG | `your_api_key_here` |

Example `.env`:
```bash
VITE_RAWG_API_KEY=YOUR_KEY_HERE
```

---

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm (bundled with Node) or pnpm/yarn (if you prefer)

Confirm versions:
```bash
node -v
npm -v
```

### Installation
```bash
git clone https://github.com/KovinthKrishna/Game-Hub-Web.git
cd Game-Hub-Web
npm install
```

### Configure Environment
Create `.env` and add required variables (see [Environment Variables](#environment-variables)).

### Running in Development
```bash
npm run dev
```
Vite will output a local URL (typically `http://localhost:5173`).

### Building for Production
```bash
npm run build
```
Outputs static assets to `dist/`.

### Preview Production Build
```bash
npm run preview
```
Serves the built `dist/` folder locally for validation.

---

## Project Structure

```
.
├── index.html            # Vite entry HTML
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .eslintrc.cjs
├── .gitignore
├── src/
│   ├── main.tsx
│   ├── App.tsx           # Root component
│   ├── components/       # Reusable UI components (buttons, cards, filters)
│   ├── hooks/            # Custom hooks (e.g. useGames, useGenres)
│   ├── services/
│   │   └── apiClient.ts  # Axios instance
│   ├── theme.ts          # Chakra theme overrides
│   ├── assets/           # Images, logos
└── README.md
```

## Mobile Version

Want this experience on mobile?  
Visit the companion repository: [Game-Hub-Mobile](https://github.com/KovinthKrishna/Game-Hub-Mobile)
