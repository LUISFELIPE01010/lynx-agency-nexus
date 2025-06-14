# Replit.md

## Overview

This is a full-stack React application built with Express.js backend, featuring a modern design agency website with bilingual support (English/Portuguese). The application showcases premium branding services with smooth animations, responsive design, and a comprehensive component library using shadcn/ui.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: GSAP for complex animations, CSS animations for lightweight effects
- **Routing**: React Router for client-side navigation
- **State Management**: React Context for language switching, TanStack Query for server state

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling
- **Storage**: Memory storage implementation with interface for easy database swapping

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Current Implementation**: In-memory storage for development, ready for PostgreSQL integration

## Key Components

### Core Application Structure
- **Client**: React frontend located in `client/` directory
- **Server**: Express backend in `server/` directory  
- **Shared**: Common types and schemas in `shared/` directory
- **Database**: Drizzle ORM configuration with PostgreSQL support

### Frontend Components
- **Layout Components**: Navbar, Footer, LoadingScreen
- **Content Sections**: Hero, About, Services, Projects, Process, Contact
- **Interactive Elements**: Animated overlays, particle systems, scroll triggers
- **UI Library**: Complete shadcn/ui implementation with custom theming

### Backend Components
- **Storage Interface**: Abstracted storage layer (`IStorage`) with memory implementation
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Development Server**: Vite integration for hot module replacement

## Data Flow

1. **Client Requests**: React Router handles client-side navigation
2. **API Calls**: TanStack Query manages server state and caching
3. **Backend Processing**: Express routes handle API requests
4. **Data Storage**: Storage interface abstracts database operations
5. **Response Handling**: Structured error handling and logging

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React Router, React Hook Form
- **UI Framework**: Radix UI primitives, Tailwind CSS, Lucide icons
- **Animations**: GSAP, Framer Motion alternatives via CSS
- **State Management**: TanStack Query for server state
- **Internationalization**: Custom context-based solution

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL support via Neon
- **Validation**: Zod for schema validation
- **Session Management**: express-session with PostgreSQL store
- **Development**: tsx, esbuild for TypeScript support

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **Development**: Hot reload, error overlay, cartographer for Replit

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` starts development server on port 5000
- **Hot Reload**: Vite provides instant updates during development
- **Error Handling**: Runtime error overlay for debugging

### Production Deployment
- **Build Process**: `npm run build` creates optimized production build
- **Server**: `npm run start` runs production server
- **Static Assets**: Built to `dist/public` directory
- **Database**: Requires PostgreSQL connection via `DATABASE_URL`

### Replit Configuration
- **Deployment Target**: Autoscale deployment
- **Port Configuration**: Internal port 5000, external port 80
- **Environment**: Node.js 20 with web modules

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 14, 2025. Initial setup