# EventFlow Microservices Application

A distributed event management platform built with NestJS microservices architecture.

## 🏗️ Project Structure

```
eventflow-app/
├── apps/
│   ├── api-gateway/           # API Gateway service
│   ├── auth-service/          # Authentication & authorization
│   ├── events-service/        # Event management
│   ├── notifications-service/ # Email notifications service
│   └── tickets-service/       # Ticket management & check-in
├── libs/
│   ├── common/                # Shared DTOs, interfaces, constants
│   ├── database/              # Database schema & utilities
│   └── kafka/                 # Kafka messaging constants
└── dist/                      # Compiled output
```

## 🔧 Services Overview

### API Gateway
- Entry point for all client requests
- Routes requests to appropriate microservices
- Handles authentication middleware

### Auth Service
- User registration and login with JWT authentication
- Password hashing with bcrypt
- Role-based access control
- Kafka event publishing for user actions

### Events Service
- CRUD operations for events
- Event categorization and filtering
- Integration with ticketing system

### Tickets Service
- Ticket purchase and management
- Ticket validation and check-in
- Inventory tracking

### Notifications Service
- Automated email notifications
- Welcome emails for new users
- Ticket purchase confirmations
- Event cancellation notifications

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL database
- Apache Kafka
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env

# Configure your environment variables in .env
# (Database connection, Kafka settings, JWT secrets, etc.)

# Run database migrations
pnpm run db:migrate
```

### Development

```bash
# Start all services in development mode
pnpm run start:dev

# Or start individual services:
pnpm --filter @app/auth-service run start:dev
pnpm --filter @app/events-service run start:dev
pnpm --filter @app/tickets-service run start:dev
pnpm --filter @app/notifications-service run start:dev
pnpm --filter @app/api-gateway run start:dev
```

### Testing

```bash
# Run unit tests
pnpm run test

# Run end-to-end tests
pnpm run test:e2e

# Run tests with coverage
pnpm run test:cov

# Run tests in watch mode
pnpm run test:watch
```

### Building for Production

```bash
# Build all services
pnpm run build

# Start production server
pnpm run start:prod
```

## 🔐 Environment Variables

Create a `.env` file based on `.env.example` with the following variables:

```
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/eventflow

# Kafka
KAFKA_BROKERS=localhost:9092
KAFKA_CLIENT_ID=eventflow-app

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=1h

# Email (for notifications service)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```

## 📡 Kafka Topics

The application uses the following Kafka topics for inter-service communication:
- `user.registered` - New user registration events
- `user.login` - User login events
- `event.created` - New event creation
- `event.updated` - Event updates
- `ticket.purchased` - Ticket purchase events
- `ticket.checked-in` - Ticket validation events
- `event.cancelled` - Event cancellation notifications

## 🛠️ Technology Stack

- **Framework**: NestJS v11
- **Language**: TypeScript v5
- **Database**: PostgreSQL with Drizzle ORM
- **Messaging**: Apache Kafka with @nestjs/microservices
- **Authentication**: JWT with Passport.js
- **Validation**: class-validator & class-transformer
- **Testing**: Jest
- **Code Quality**: ESLint, Prettier
- **Package Manager**: pnpm

## 📁 Key Files

- `nest-cli.json` - NestJS CLI configuration for monorepo
- `package.json` - Project dependencies and scripts
- `libs/database/src/schema/` - Database table schemas
- `libs/kafka/src/constants/` - Kafka topic and service definitions
- `apps/*/src/` - Individual service implementations

