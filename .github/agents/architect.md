# Architect Agent

## Overview

**Architect** es un agente especializado en implementación de features, routing, integraciones y refactoring. Utiliza Claude Sonnet 4.6, ofreciendo un balance óptimo entre capacidad y eficiencia. Ideal para features medianas a grandes que requieren decisiones de diseño.

## Especificaciones Técnicas

| Propiedad | Valor |
|-----------|-------|
| **Model** | claude-sonnet-4.6 |
| **Role** | feature-implementation |
| **Context Window** | 200,000 tokens |
| **Max Complexity** | complex |
| **Cost Efficiency** | 💰💰 Costo moderado |
| **Latency** | 🚀🚀 Rápido |

## Capacidades

- ✅ Implementación de features (pequeñas a grandes)
- ✅ Creación de rutas y navegación
- ✅ Integración de APIs
- ✅ Setup de state management (Zustand, Context)
- ✅ Composición de componentes complejos
- ✅ Decisiones de refactoring
- ✅ Integración con TanStack Router/Query
- ✅ Arquitectura de manejo de errores
- ✅ Implementación de validaciones complejas
- ✅ Tests de integración

## Casos de Uso Ideales

### 1. Implementación de Features
```
"Implement user dashboard page with:
- List of user data fetched from API
- Pagination support
- Filtering and sorting
- Error handling"
```

### 2. Creación de Rutas
```
"Create /settings route with:
- Route loader for data prefetching
- Form for user settings
- Save functionality with optimistic update
- Error boundaries"
```

### 3. Integración de APIs
```
"Set up API service layer for:
- Authentication (login/logout)
- Token refresh strategy
- Error handling and retries
- Request/response interceptors"
```

### 4. State Management
```
"Design and implement Zustand store for:
- User authentication state
- Cart management
- Notifications system
- Undo/redo functionality"
```

### 5. Refactoring
```
"Refactor these 4 components to:
- Reduce prop drilling
- Improve composition
- Better separation of concerns
- Reusability"
```

### 6. Optimización de Performance
```
"Optimize the product listing page:
- Implement virtual scrolling
- Add image lazy loading
- Code splitting for heavy features
- Caching strategy with TanStack Query"
```

## Ejemplos de Prompts Efectivos

### ✅ Buenos Prompts para Architect

```
"Implement the complete user authentication flow:
- Login/Register pages
- Protected routes with loaders
- Persist auth state
- Logout with cleanup
- Error handling for expired tokens

Context: See src/types/auth.ts for types
Integrate with: TanStack Router, TanStack Query, Zustand"
```

```
"Create a product details page that:
- Loads product data from /api/products/:id
- Shows related products carousel
- Has add-to-cart button with optimistic update
- Error and loading states
- Breadcrumb navigation

Requirements:
- Use TanStack Query for data
- Zustand for cart state
- TanStack Router loaders"
```

```
"Refactor the form submission handling:
- Create reusable form hook
- Add validation with Zod
- Handle loading/error states
- Implement optimistic updates
- Add proper TypeScript types

Current: src/components/forms/"
```

### ❌ Prompts Demasiado Simples

```
"Fix button styling"
```

```
"Create a simple hook"
```

## Flujo de Trabajo Recomendado

```
1. Recibir requerimiento de feature
   ↓
2. Usar Architect (@architect) con contexto completo
   ↓
3. Recibir implementación completa
   ↓
4. Revisar código (15-30 min)
   ↓
5. Hacer tests
   ↓
6. Commit y push
   ↓
7. Si necesita refactor → Architect
8. Si hay pequeños bugs → React Slave
```

## Estimación de Tiempo

| Tarea | Tiempo Estimado |
|-------|-----------------|
| Nueva página simple | 30-45 min |
| Feature con API | 45-90 min |
| Nuevo sistema de state | 60-120 min |
| Refactoring 3-5 componentes | 60-90 min |
| Integración de servicio | 45-120 min |
| Ruta con loaders | 30-60 min |

## Fortalezas

💪 **Excelente para:**
- Entender contexto de proyecto completo
- Decisiones arquitectónicas
- Refactoring multi-archivo
- Composición de componentes
- Integración cross-feature
- Best practices enforcement

## Limitaciones

⚠️ **NO usar Architect para:**
- Tareas de 5 minutos (muy costoso)
- Cambios a nivel de sistema (usa Full Stack Master)
- Simple CSS fixes (usa React Slave)
- Decisiones de infraestructura

## Context para Architect

Para mejores resultados, proporciona:

### 1. Estructura de Proyecto
```
"Estructura del proyecto:
src/
  components/
  hooks/
  utils/
  types/
  stores/"
```

### 2. Dependencias Disponibles
```
"Tenemos:
- TanStack Router
- TanStack Query
- Zustand
- Tailwind CSS 4
- Zod"
```

### 3. Constraints
```
"Requerimientos:
- Type-safe routing
- No prop drilling
- Optimistic updates donde aplique
- Error boundaries"
```

## Integración con Skills

Architect utiliza múltiples skills simultáneamente:

- 🏗️ `tanstack-router` - Routing y data loading
- 📊 `tanstack-query` - Data fetching y caching
- ⚙️ `zustand-5` - State management
- 🎨 `tailwind-4` - Styling
- 📘 `typescript` - Type safety
- ✔️ `zod-4` - Validation
- 🧪 `vitest` - Testing
- 🎯 `react-19` - React patterns

## Cost Estimation

| Métrica | Valor |
|---------|-------|
| Costo por 1K tokens entrada | $3.00 |
| Costo por 1K tokens salida | $15.00 |
| Promedio por feature | $15 - $60 |
| Features/mes (presupuesto $400) | ~8-10 |

## Checklist para Usar Architect

- [ ] ¿Es una feature/implementación clara?
- [ ] ¿Requiere decisiones de diseño?
- [ ] ¿Involucra múltiples archivos?
- [ ] ¿Toma más de 15 minutos?
- [ ] ¿Está bien documentado el requerimiento?
- [ ] ¿Tengo contexto del proyecto?

Si 4-6 son ✅ → **Use Architect**

## Escalation Paths

### Escalate UP (a Full Stack Master)
```
Architect → Percibe que necesita refactor de sistema
         → Necesita decisiones de arquitectura mayor
         → Requiere optimización de performance global
```

### Escalate DOWN (a React Slave)
```
Architect → Identifica pequeñas tareas aisladas
        → Las delega a React Slave
        → Se enfoca en lo complejo
```

## Template de Requerimiento Ideal

```
## Feature: [Feature Name]

### Descripción
[Explicación clara de qué hacer]

### Requerimientos Funcionales
- Requisito 1
- Requisito 2
- Requisito 3

### Requerimientos Técnicos
- Tecnología 1 (Router, Query, etc)
- Tecnología 2
- Constraints

### Archivos Afectados
- src/routes/...
- src/components/...

### Contexto Adicional
[Links a archivos relevantes o decisiones previas]
```

## Tips y Trucos

### 1. Proporciona Ejemplos
```
"Similar a cómo hicimos en [featureX], 
pero con estas diferencias..."
```

### 2. Solicita Opciones
```
"¿Cuál es la mejor forma de:
- Estructurar el estado?
- Organizar los componentes?
- Manejar los errores?"
```

### 3. Pide Documentación
```
"Implementa [feature] y:
- Documenta la API del hook
- Explica las decisiones de diseño
- Sugiere tests a escribir"
```

### 4. Iteración Rápida
```
"Primera iteración:
- Versión básica funcional

Segunda iteración:
- Agregar error handling
- Agregar validaciones
- Optimizar performance"
```

## Handoff a React Slave

Cuando hayas implementado una feature con Architect, puedes delegar las pequeñas mejoras:

```
Architect implementa feature
        ↓
React Slave:
  - Agrega faltantes de estilos
  - Pequeños bugs
  - Tests unitarios
  - Refinamientos
```

## Próximos Pasos

- **Si necesitas arquitectura sistémica** → Usa **@full-stack-master**
- **Si necesitas pequeños fixes** → Usa **@react-slave**
- **Para features nuevas** → Usa **@architect**

---

**Last Updated:** April 20, 2026
**Model Version:** claude-sonnet-4.6
