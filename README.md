 METAFLUX 🎮

METAFLUX is a modern web application for discovering Free-To-Play games.
It provides a fast, responsive interface to explore games by platform, category, and popularity, powered by a clean architecture using TanStack Router, React Query, and TypeScript.

The project focuses on performance, scalability, and maintainable frontend architecture, following patterns used in modern production React applications.

---

 ✨ Features

* 🎮 Browse Free-To-Play games
* 🧭 Dynamic filters (platform, category, sort)
* 🖼️ Hero slider with featured games
* 🗂️ Responsive game cards grid
* 📄 Client-side pagination
* 🔎 URL-based filters for shareable searches
* ⚡ React Query caching for optimal performance
* 🧠 Type-safe data with Zod validation
* 🚀 Preloaded routes using TanStack Router
* 📱 Fully responsive UI

---

 🧱 Tech Stack

Frontend

* React 18
* TypeScript
* Vite

State & Data Management

* TanStack Query (React Query)
* TanStack Router

Validation

* Zod

Styling

* TailwindCSS

Icons

* Lucide React

API

* FreeToGame API
  https://www.freetogame.com/api-doc

---

 📁 Project Structure

METAFLUX follows a feature-driven architecture, separating routing, providers, features, and shared utilities to keep the codebase scalable and maintainable.

```
METAFLUX
│
├── dist
├── node_modules
├── public
│
├── src
│   │
│   ├── app
│   │   ├── layouts
│   │   │   ├── index.ts
│   │   │   └── main-layout.tsx
│   │   │
│   │   ├── providers
│   │   │   ├── index.ts
│   │   │   ├── query-provider.tsx
│   │   │   └── router-provider.tsx
│   │   │
│   │   └── router
│   │       ├── routes
│   │       │   ├── game-detail-route.ts
│   │       │   ├── games-route.ts
│   │       │   ├── index.ts
│   │       │   └── not-found-route.ts
│   │       │
│   │       ├── index.ts
│   │       └── router.tsx
│   │
│   ├── assets
│   │
│   ├── features
│   │   └── games
│   │       │
│   │       ├── components
│   │       │   ├── game-card-skeleton.tsx
│   │       │   ├── game-card.tsx
│   │       │   ├── game-detail-card.tsx
│   │       │   ├── games-filters.tsx
│   │       │   ├── games-hero.tsx
│   │       │   ├── games-list-view.tsx
│   │       │   ├── games-list.tsx
│   │       │   ├── games-skeleton.tsx
│   │       │   └── index.ts
│   │       │
│   │       ├── constants
│   │       │   ├── game-filters.ts
│   │       │   └── game-pagination.ts
│   │       │
│   │       ├── hooks
│   │       │   ├── index.ts
│   │       │   ├── use-game-detail.ts
│   │       │   ├── use-games-by-category.ts
│   │       │   ├── use-games-by-platform.ts
│   │       │   ├── use-games-sorted.ts
│   │       │   └── use-games.ts
│   │       │
│   │       ├── pages
│   │       │   ├── game-detail-page.tsx
│   │       │   ├── games-home-page.tsx
│   │       │   └── index.ts
│   │       │
│   │       ├── queries
│   │       │   ├── filters-queries.ts
│   │       │   ├── games-queries.ts
│   │       │   └── index.ts
│   │       │
│   │       ├── schemas
│   │       │   ├── filters-schema.ts
│   │       │   ├── game-detail-schema.ts
│   │       │   ├── game-requirements-schema.ts
│   │       │   ├── game-schema.ts
│   │       │   └── index.ts
│   │       │
│   │       ├── services
│   │       │   ├── get-filters-services.ts
│   │       │   ├── get-games-services.ts
│   │       │   └── index.ts
│   │       │
│   │       └── views
│   │           └── index.ts
│   │
│   ├── hooks
│   │   ├── index.ts
│   │   └── use-pagination.ts
│   │
│   ├── lib
│   │   └── index.ts
│   │
│   ├── services
│   │   ├── http
│   │   └── index.ts
│   │
│   ├── shared
│   │   ├── query
│   │   └── ui
│   │       └── index.ts
│   │
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

 🧠 Architecture Overview

The project uses a feature-based modular architecture:

`app/`

Global application setup

* Layouts
* Providers
* Router configuration

`features/games/`

All game-related logic:

* UI components
* hooks
* queries
* API services
* schemas
* pages

This keeps domain logic isolated and scalable.

`shared/`

Reusable cross-feature utilities:

* UI primitives
* Query utilities

`services/`

Low-level infrastructure like HTTP clients.

---

 🧩 Key Architectural Layers

```
Routes
   ↓
Pages
   ↓
Views
   ↓
Components
   ↓
Hooks
   ↓
Queries
   ↓
Services
   ↓
HTTP Layer
```

This layered approach improves:

* separation of concerns
* testability
* maintainability
* scalability


---

 🎮 Game Discovery Flow

1. The user opens the Games page
2. TanStack Router loads initial data
3. React Query fetches games from the API
4. Filters are stored in the URL search params
5. Data is cached and reused automatically

Example URL:

```
/games?page=2&platform=pc&category=shooter
```

This enables:

* sharable searches
* browser history support
* predictable UI state

---

 🧠 Data Layer

Game data is validated using Zod schemas.

Example:

```ts
export const GameSchema = z.object({
  id: z.number(),
  title: z.string(),
  thumbnail: z.string(),
  genre: z.string(),
  platform: z.string(),
  short_description: z.string(),
  game_url: z.string(),
  release_date: z.string()
})
```

Benefits:

* Runtime validation
* Type inference
* Safer API integration

---

 ⚡ Data Fetching Strategy

METAFLUX uses TanStack Query for server state management.

Features used:

* Query caching
* Background refetching
* Deduplication
* Prefetching via route loaders

Example query key:

```
["games", filters]
```

This ensures each filter combination has its own cache entry.

---

 🧭 Routing

Routing is handled with TanStack Router.

Advantages:

* Fully typed routes
* URL-based filters
* Route data preloading
* Better developer experience than traditional routers

Example route:

```
/games
/games/$id
```

---

 📄 Pagination

The FreeToGame API does not support pagination.
Therefore METAFLUX implements client-side pagination.

Strategy:

* API returns all filtered games
* Data is sliced locally
* Each page shows 20 games

Example:

```
page 1 → games 1-20
page 2 → games 21-40
```

The pagination state is stored in the URL:

```
/games?page=3
```

---

 🎨 UI Components

GamesHero

A dynamic featured games carousel that highlights top games with:

* background image
* genre badge
* platform badge
* quick actions

---

GameCard

Each card displays:

* game thumbnail
* title
* short description
* platform
* release date

Hover effects include:

* image zoom
* border highlight
* action CTA

---

Pagination

A smart pagination system that adapts to large result sets:

```
Prev  1 ... 4 5 [6] 7 8 ... 15  Next
```

This prevents UI overflow when many pages exist.

---

 📱 Responsive Design

METAFLUX is fully responsive.

Grid behavior:

```
mobile → 1 column
tablet → 2 columns
desktop → 3 columns
wide screens → 4 columns
```

Built using TailwindCSS utility classes.

---

 🚀 Getting Started

1 Install dependencies

```
npm install
```

2 Start development server

```
npm run dev
```

3 Build for production

```
npm run build
```

---

 🌍 API Source

METAFLUX uses the FreeToGame API

https://www.freetogame.com/api-doc

No authentication required.

---

 📦 Future Improvements

Possible future enhancements:

* Infinite scrolling
* Game details page improvements
* Favorites / wishlist
* Game ratings
* Dark/light theme toggle
* Server-side pagination proxy
* Game trailers preview

---

 👨‍💻 Author

Developed by METAFLUX  | Juan Fernando Orjuela Samaca
