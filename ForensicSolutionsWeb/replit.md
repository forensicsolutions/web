# Overview

This is a professional forensic investigation and cybersecurity services website built as a full-stack web application. The site showcases services including private investigation, digital forensics, OSINT/SOCMINT analysis, and cybersecurity consulting. It features a modern, dark-themed design with a contact form for client inquiries and comprehensive service information pages.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for home, services, about, contact, and 404
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom dark theme and CSS variables for consistent theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Design**: RESTful API with routes for contact form submission and retrieval
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Shared schema validation using Drizzle-Zod for consistent data validation between frontend and backend
- **Development**: Hot module replacement and error overlay for development experience

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Tables**: 
  - Users table with id, username, and password fields
  - Contact submissions table with id, full name, email, service type, case details, and timestamp
- **Validation**: Type-safe schema definitions with Zod validation schemas

## Project Structure
- **Monorepo**: Organized with separate client, server, and shared directories
- **Shared Code**: Common schema definitions and types shared between frontend and backend
- **Asset Management**: Vite handles static assets and bundling
- **TypeScript**: Strict TypeScript configuration with path aliases for clean imports

# External Dependencies

## Core Frameworks
- **React**: Frontend framework with React DOM
- **Express.js**: Backend web framework
- **Vite**: Build tool and development server with React plugin

## UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Component variant management
- **Embla Carousel**: Carousel component for service showcases

## Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support

## Database
- **PostgreSQL**: Primary database (configured but using in-memory storage currently)
- **Neon Database**: Serverless PostgreSQL provider integration
- **Drizzle Kit**: Database migrations and schema management

## Development Tools
- **TypeScript**: Static type checking across the entire codebase
- **ESBuild**: Fast JavaScript bundler for production builds
- **Wouter**: Lightweight React router
- **Date-fns**: Date manipulation library

## Replit Integration
- **Replit Vite Plugins**: Runtime error modal and cartographer for development
- **Development Banner**: Replit development environment integration