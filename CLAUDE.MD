# Repository Guidelines & Multi-Agent Configuration

## Multi-Agent System

This repository uses a multi-model agent system for optimized AI-assisted development. Choose the right agent for your task:

### Available Agents

| Agent | Model | Use Case | Speed | Cost |
|-------|-------|----------|-------|------|
| **React Slave** | Claude 3.5 Haiku | Small fixes, quick tasks | ⚡⚡⚡ | 💰 |
| **Architect** | Claude 3.5 Sonnet | Features, routing, implementation | 🚀🚀 | 💰💰 |
| **Full Stack Master** | Claude 3.5 Sonnet | Architecture, system design | 🚀🚀 | 💰💰 |

### Agent Selection

**React Slave** - For small tasks:
```
"Fix the button padding in the header"
"Create a useLocalStorage hook"
"Add error boundary to LoginForm"
"Write a test for handleSubmit"
```

**Architect** - For features and implementation:
```
"Implement user dashboard page with data fetching"
"Create /settings route with form validation"
"Integrate API service for authentication"
"Refactor these 3 components for better composition"
```

**Full Stack Master** - For architecture and design:
```
"Design the authentication system architecture"
"Plan the refactor for monorepo structure"
"Optimize the data fetching strategy"
"Design error handling and recovery flow"
```

See [MULTI_AGENT.md](MULTI_AGENT.md) for detailed guide.

---

## Available Skills

Use these skills for detailed patterns on-demand:

| Skill | Description | URL |
|-------|-------------|-----|
| `typescript` | Const types, flat interfaces, utility types | [SKILL.md](skills/typescript/SKILL.md) |
| `react-19` | No useMemo/useCallback, React Compiler | [SKILL.md](skills/react-19/SKILL.md) |
| `tailwind-4` | cn() utility, no var() in className | [SKILL.md](skills/tailwind-4/SKILL.md) |
| `playwright` | Page Object Model, MCP workflow, selectors | [SKILL.md](skills/playwright/SKILL.md) |
| `zod-4` | New API (z.email(), z.uuid()) | [SKILL.md](skills/zod-4/SKILL.md) |
| `zustand-5` | Persist, selectors, slices | [SKILL.md](skills/zustand-5/SKILL.md) |
| `vitest` | Unit testing, React Testing Library | [SKILL.md](skills/vitest/SKILL.md) |
| `frontend-design` | Production-grade UI design, bold aesthetics, typography | [SKILL.md](skills/frontend-design/SKILL.md) |
| `tanstack-query` | Query keys, caching, mutations, SSR integration | [SKILL.md](skills/tanstack-query/SKILL.md) |
| `tanstack-router` | Type-safe routing, data loading, search params | [SKILL.md](skills/tanstack-router/SKILL.md) |

---

## Commit & Pull Request Guidelines

Follow conventional-commit style: `<type>[scope]: <description>`

**Types:** `feat`, `fix`, `docs`, `chore`, `perf`, `refactor`, `style`, `test`

Before creating a PR:
1. Run all relevant tests and linters
2. Link screenshots for UI changes
