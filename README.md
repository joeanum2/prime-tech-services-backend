# Prime Tech Services API

Node.js + Express backend that exposes health, services, products, and contact endpoints for Prime Tech Services. The project follows the AGENTS brief requirements and keeps production URLs configurable through environment variables.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and update the values for your environment.
3. Start the development server:
   ```bash
   npm run dev
   ```

The server binds to `0.0.0.0` using the configured `PORT` and restricts CORS to `CORS_ORIGIN`.

## Required Environment Variables

- `PUBLIC_BASE_URL` – externally reachable API URL (e.g., `http://localhost:3000`).
- `CORS_ORIGIN` – the only origin allowed to call the API (e.g., the frontend domain).
- `PORT` – TCP port for the HTTP server.

Optional:
- `DATABASE_URL` – PostgreSQL connection string. When set, the database helper will open a connection pool.

## Available Scripts

- `npm start` – run the server with Node (production mode).
- `npm run dev` – run with `nodemon` for auto reloads.

## API Surface

- `GET /api/health` – service heartbeat information.
- `GET /api/services` – catalog of available repair services.
- `GET /api/products` – catalog of available software products.
- `POST /api/contact` – accepts JSON payload `{ name, email, subject?, message }` and returns an acknowledgement ticket.

## Future PostgreSQL Integration

A `pg` Pool helper is provided in `src/db/index.js`. Service modules already await the helper so that switching to database-backed catalogs or contact persistence only requires connecting queries to the pool without touching the routing layer.
