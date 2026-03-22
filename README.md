# Front Template

React 19 starter template with TypeScript, TanStack Router, TanStack Query, Tailwind CSS 4, and Vite 7.

## Prerequisites

- [Bun](https://bun.sh/) (v1.x or later)
- [Node.js](https://nodejs.org/) (v20+ recommended)

## Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd front-template

# Install dependencies
bun install

# Start the development server
bun dev
```

The app will be available at `http://localhost:5173`.

## Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `bun dev`      | Start the Vite dev server            |
| `bun run build`| Type-check with TSC and build for production |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Lint source files with Biome         |
| `bun run format`| Format source files with Biome      |

## Tech Stack

- **React 19** with React Compiler
- **TypeScript 5.9**
- **Vite 7** as build tool
- **TanStack Router** for file-based routing
- **TanStack Query** for server state management
- **Tailwind CSS 4** for styling
- **Biome** for linting and formatting

## Project Structure

```
src/
├── main.tsx          # App entry point
├── index.css         # Global styles / Tailwind imports
├── router.ts         # TanStack Router configuration
├── routes/
│   ├── __root.tsx    # Root layout route
│   ├── index.tsx     # Home page (/)
│   └── about.tsx     # About page (/about)
└── vite-env.d.ts     # Vite type declarations
```

## Path Aliases

The `@` alias is configured to point to `src/`, so you can import like:

```ts
import { something } from "@/routes/index";
```

## Building for Production

```bash
bun run build
```

Output will be in the `dist/` directory. Serve it with:

```bash
bun run preview
```
