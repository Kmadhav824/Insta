# Backend Structure

This backend is organized as a modular monolith. Each domain feature lives in its own module, while shared infrastructure lives under `src/db`, `src/lib`, `src/middleware`, and `src/utils`.

## Repository Layout

```text
backend/
├── drizzle/
│   ├── 0000_friendly_vanisher.sql
│   └── meta/
├── drizzle.config.ts
├── package.json
├── README.md
├── src/
│   ├── config/
│   ├── db/
│   │   ├── migrations/
│   │   ├── schema/
│   │   └── seed/
│   ├── lib/
│   ├── middleware/
│   ├── modules/
│   │   ├── comment/
│   │   ├── feed/
│   │   ├── follow/
│   │   ├── like/
│   │   ├── media/
│   │   ├── notification/
│   │   ├── post/
│   │   └── users/
│   ├── routes/
│   ├── utils/
│   └── index.ts
└── tsconfig.json
```

## What Each Part Does

`src/modules/` contains the feature code for each domain, such as users, posts, comments, likes, follows, feed generation, notifications, and media handling. Each module can own its controller, service, repository, and validation logic.

`src/db/` contains the Drizzle setup, schema definitions, migration files, and seed data. This keeps persistence concerns isolated from the feature code.

`src/lib/` holds shared infrastructure helpers such as Redis, queues, and logging.

`src/middleware/` contains cross-cutting request handling like authentication, error handling, and rate limiting.

`src/routes/` defines the HTTP routes that connect incoming requests to the relevant modules.

`src/config/` stores environment and application configuration.

`src/utils/` contains reusable constants and helper functions.

## Module Example

```text
src/modules/users/
├── user.controller.ts
├── user.service.ts
├── user.repository.ts
├── user.routes.ts
├── user.types.ts
└── user.validators.ts
```

## Database Layer

```text
src/db/
├── index.ts
├── schema/
│   ├── user.ts
│   ├── post.ts
│   ├── comment.ts
│   ├── like.ts
│   └── follow.ts
└── migrations/
```

## Shared Infrastructure

```text
src/lib/
├── redis.ts
├── queue.ts
└── logger.ts

src/middleware/
├── auth.middleware.ts
├── error.middleware.ts
└── rateLimit.middleware.ts
```

## Core App Entry Points

```text
src/index.ts
```

This file bootstraps the application. The server, app configuration, and route registration should flow from here.

## Tests

```text
tests/
├── unit/
└── integration/
```

Unit tests should cover isolated module behavior, while integration tests should cover API and database flows.