# Installation guide

This guide covers installing and running the amonomics notepilot app locally.

## Prerequisites

Ensure the following are installed on your machine:
- Node.js 18+
- npm 9+
- Git
- A modern web browser

## Clone the repository

```bash
git clone https://github.com/amonomics/amonomics-notepilot.git
cd amonomics-notepilot
```

## Install dependencies

```bash
npm install
```

## Configure environment variables

Create a local environment file:

```bash
cp .env.example .env
```

Then update the values as needed:

```env
VITE_APP_NAME=amonomics notepilot
VITE_API_BASE_URL=https://api.example.com
VITE_DEFAULT_WORKSPACE=Northwind Global
```

## Start the app in development mode

```bash
npm run dev
```

The app will be served at:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

## Preview the build locally

```bash
npm run preview
```

## Troubleshooting

### Port already in use

If port 5173 is occupied, change the server port in `vite.config.ts`.

### Dependency install issues

Try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Missing environment values

Ensure `.env` exists and contains the expected `VITE_` variables.

## Next steps

After installation, you can begin customizing:
- app branding
- dashboard widgets
- meeting summaries
- enterprise workflow modules
- API integration points
