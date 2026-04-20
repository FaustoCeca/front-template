# React Slave Agent

## Overview

**React Slave** es un agente optimizado para tareas pequeñas y rápidas en JavaScript/React. Utiliza Claude Haiku 4.5, el modelo más eficiente de Anthropic, ideal para iteraciones rápidas y optimización de costos.

## Especificaciones Técnicas

| Propiedad | Valor |
|-----------|-------|
| **Model** | claude-haiku-4.5 |
| **Role** | small-tasks |
| **Context Window** | 20,000 tokens |
| **Max Complexity** | simple |
| **Cost Efficiency** | 💰 Bajo costo |
| **Latency** | ⚡⚡⚡ Muy rápido |

## Capacidades

- ✅ Creación de componentes simples
- ✅ Corrección de bugs aislados
- ✅ Ajustes de estilos CSS/Tailwind
- ✅ Implementación de hooks simples
- ✅ Creación de funciones utilitarias
- ✅ Escritura de tests unitarios
- ✅ Fixes de TypeScript/tipos

## Casos de Uso Ideales

### 1. Fixes de Componentes
```
"Fix the button hover state styling"
"Add loading state to LoginForm"
"Fix padding issue in Header component"
```

### 2. Implementación de Hooks
```
"Create a useLocalStorage hook"
"Implement useDebounce utility hook"
"Create a useAsync hook for data fetching"
```

### 3. Funciones Utilitarias
```
"Create a function to format currency values"
"Write a function to parse URL query params"
"Implement a deep object merge utility"
```

### 4. Tests Unitarios
```
"Write tests for the handleSubmit function"
"Create tests for the utility functions"
"Add unit tests for the Button component"
```

### 5. Ajustes de CSS/Styling
```
"Update button colors to match design system"
"Fix responsive layout for mobile"
"Improve typography spacing"
```

### 6. Fixes de TypeScript
```
"Add proper TypeScript types to this component"
"Fix type errors in the form submission"
"Create a proper interface for the API response"
```

## Ejemplos de Prompts Efectivos

### ✅ Buenos Prompts

```
"Fix the button's hover state styling in src/components/Button.tsx. 
It should have a scale transform and shadow effect."
```

```
"Create a useLocalStorage hook that:
- Saves to localStorage on change
- Initializes from localStorage
- Has a clear function"
```

```
"Write unit tests for the calculateTotal function in utils/math.ts"
```

### ❌ Prompts Demasiado Complejos

```
"Refactor the entire authentication system architecture"
```

```
"Implement a real-time collaborative editing system"
```

```
"Design the database schema for a multi-tenant SaaS platform"
```

## Flujo de Trabajo Recomendado

```
1. Identificar tarea pequeña
   ↓
2. Usar React Slave (@react-slave)
   ↓
3. Revisar código generado (< 5 min)
   ↓
4. Commit y push
   ↓
5. Si necesitas más → Escalate a Architect
```

## Estimación de Tiempo

| Tarea | Tiempo Estimado |
|-------|-----------------|
| Fix simple CSS | 2-5 min |
| Crear hook | 5-10 min |
| Tests unitarios | 5-15 min |
| Función utilitaria | 5-10 min |
| Fix de bug aislado | 5-15 min |

## Limitaciones

⚠️ **NO usar React Slave para:**
- Refactoring multi-archivo
- Features complejas
- Cambios de arquitectura
- Integración de múltiples servicios
- Decisiones de diseño de sistema
- Rutas y navegación complejas
- State management complejo

## Optimizaciones

### 1. Proporciona Contexto Mínimo
```typescript
// ✅ Bien - Solo el archivo relevante
"Fix this component:" + componentCode

// ❌ Mal - Todo el proyecto
"Fix our entire component library..."
```

### 2. Sé Específico
```typescript
// ✅ Bien
"Create a Button component with variant='primary' support"

// ❌ Mal
"Create a button"
```

### 3. Define Comportamiento Esperado
```typescript
// ✅ Bien
"Add a loading spinner to the button when clicked"

// ❌ Mal
"Improve the button"
```

## Integración con Skills

React Slave tiene acceso a estos skills primariamente:

- 🎯 `react-19` - Componentes y hooks
- 🎨 `tailwind-4` - Styling
- 📘 `typescript` - Type safety
- 🧪 `vitest` - Testing
- ✔️ `zod-4` - Validación

## Cost Estimation

| Métrica | Valor |
|---------|-------|
| Costo por 1K tokens entrada | $0.80 |
| Costo por 1K tokens salida | $4.00 |
| Promedio por tarea | $0.50 - $2.00 |
| Tareas/mes (presupuesto $50) | ~50-100 |

## Checklist para Usar React Slave

- [ ] ¿Es una tarea simple/pequeña?
- [ ] ¿Afecta solo 1-2 archivos?
- [ ] ¿Se puede completar en < 15 minutos?
- [ ] ¿No requiere decisiones arquitectónicas?
- [ ] ¿Es aislada del resto del sistema?

Si todos son ✅ → **Use React Slave**

## Escalation Path

Si la tarea se vuelve más compleja durante la ejecución:

```
React Slave → (se da cuenta que es más complejo) → Architect
```

Ejemplo:
```
"Fix button styling" (parece simple)
→ Luego ves que necesita integración con state management
→ Escalate a @architect
```

## Tips y Trucos

### 1. Batch Small Tasks
```
"Complete these 3 small fixes:
1. Button padding
2. Input placeholder color
3. Typography size"
```

### 2. Usar para TDD
```
"1. Write tests for formatCurrency
2. Implement formatCurrency to pass tests"
```

### 3. Code Review Automation
```
"Review this code and suggest improvements:
[code]"
```

## Próximos Pasos

Si necesitas más capacidad:
- **Tareas medianas** → Usa **@architect**
- **Arquitectura/diseño** → Usa **@full-stack-master**

---

**Last Updated:** April 20, 2026
**Model Version:** claude-haiku-4.5
