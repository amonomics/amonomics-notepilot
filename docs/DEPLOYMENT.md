# Development guide

## Local development workflow

```bash
npm install
npm run dev
```

## Coding standards

- use TypeScript for new features
- keep components focused and readable
- prefer small, reusable UI modules
- use environment variables for configuration
- avoid hard-coded enterprise constants where config is needed

## Recommended extension areas

### 1. Meeting workflow UI
Add modules for:
- active meeting capture
- note timeline
- summary review before publishing
- action approval workflow

### 2. Knowledge workspace
Add:
- note library
- searchable archive
- customer/project context cards
- tag and folder organization

### 3. Admin and governance
Add:
- workspace configuration
- RBAC views
- retention policy settings
- audit reporting panel

### 4. Integration layer
Build hooks for:
- Zoom / Teams call metadata
- Slack updates
- Asana / Jira / Linear tasks
- CRM systems for client context

## Testing

At the current stage, the app is a frontend scaffold. For production expansion, add:
- unit tests for utilities and validation
- component tests for dashboard UI flows
- end-to-end tests for critical user journeys

## Suggested future stack

For enterprise-grade expansion, consider:
- React + TypeScript for frontend
- Node.js API backend
- PostgreSQL for persistence
- Prisma or TypeORM for models
- Redis for queue processing
- vector DB for semantic memory
- AI orchestration with OpenAI / Azure OpenAI / Anthropic / Gemini
