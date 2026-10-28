# Deployment guide

## Local deployment

```bash
npm install
npm run build
npm run preview
```

## Production deployment options

### 1. Static hosting
The frontend can be deployed as a static app to providers such as:
- Vercel
- Netlify
- Cloudflare Pages

### 2. Enterprise web deployment
For a scalable business deployment, use a managed frontend host with an API backend and database layer.

### 3. Desktop package deployment
This project can later be adapted into a desktop app using Electron, which is compatible with the original concept behind the Cluely-style assistant.

## Production recommendations

- set environment variables securely
- use HTTPS in production
- enable strict CORS rules
- isolate secrets from frontend exposure
- use a real API backend for business data
- add logging and observability
- implement access controls and audit trails

## Recommended enterprise deployment layout

```text
Frontend (React / Vite)
  -> API Gateway
      -> AI Service
      -> Database
      -> Search Layer
      -> Auth / RBAC Provider
```

## CI/CD suggestions

- lint on pull request
- run frontend build in CI
- run tests before deployment
- deploy to staging before production
- tag production releases
