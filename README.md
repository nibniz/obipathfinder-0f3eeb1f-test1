# Obi Pathfinder

Obi is an AI-powered learning companion that helps children discover who they are, understand how they learn best, and grow with confidence, not pressure.

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The development server will start on `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies

This project is built with:

- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **React** - UI framework
- **shadcn-ui** - UI component library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **TanStack Query** - Data fetching

## Project Structure

```
src/
├── components/      # React components
│   ├── sections/   # Page sections
│   └── ui/         # shadcn-ui components
├── pages/          # Page components
├── assets/         # Static assets
├── hooks/          # Custom React hooks
└── lib/            # Utility functions
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to your hosting provider.
