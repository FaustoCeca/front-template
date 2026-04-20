# Copilot Agent Configuration

Esta carpeta contiene la configuración de agentes para Copilot integrados con tu proyecto.

## 📋 Archivos

- **agents.json** - Configuración de agentes multi-modelo
- **settings.local.json** - Permisos y configuración local

## 🚀 Cómo usar los agentes

### Opción 1: Llamar el agente directamente (Copilot)

En Copilot de VS Code, puedes hacer referencia a los agentes:

```
@react-slave Fix the button styling in LoginForm.tsx
@architect Implement the user dashboard page
@full-stack-master Design the authentication system
```

### Opción 2: Prompts automáticos

El sistema detecta automáticamente qué agente usar basado en palabras clave:

```
"Quick fix for the header CSS" → React Slave
"Implement new feature page" → Architect  
"Design system architecture" → Full Stack Master
```

### Opción 3: Usar en código

```typescript
import { selectAgent, AGENTS } from './agents.config';

const task = "Implement user settings page";
const agentId = selectAgent(task);
const agent = AGENTS[agentId];

console.log(`Using ${agent.name} (${agent.model})`);
```

---

## 💰 Modelo de costos

| Agente | Modelo | Tokens/1K | Mejor para |
|--------|--------|-----------|-----------|
| React Slave | Haiku | $0.80 entrada / $4 salida | Tasks < 15 min |
| Architect | Sonnet | $3 entrada / $15 salida | Features 30m-2h |
| Full Stack Master | Sonnet | $3 entrada / $15 salida | Architecture 2h+ |

---

## 🔧 Configuración

### Agregar nuevos agentes

Edita `agents.json`:

```json
{
  "agents": {
    "mi-agente": {
      "id": "mi-agente",
      "name": "Mi Agente",
      "model": "claude-3-5-sonnet",
      "enabled": true
    }
  }
}
```

### Cambiar permisos

En `settings.local.json`:

```json
{
  "permissions": {
    "allow": [
      "Bash(comando-permitido)"
    ]
  }
}
```

---

## 📖 Documentación

- [MULTI_AGENT.md](../MULTI_AGENT.md) - Guía completa de agentes
- [CLAUDE.MD](../CLAUDE.MD) - Configuración del repositorio
- [agents.config.ts](../agents.config.ts) - Implementación técnica

---

## ⚙️ Próximos pasos

- [ ] Integrar CLI para gestionar agentes
- [ ] Agregar tracking de costos
- [ ] Crear dashboard de métricas
- [ ] Implementar especialización de agentes
