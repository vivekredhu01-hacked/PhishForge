# PhishForge.ai Landing Page

A modern, dark-theme static landing page for PhishForge.ai, an AI-powered phishing simulator SaaS.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality component library
- **Lucide React** - Beautiful icon library

## Features

- 🎨 Dark theme with cyber-futuristic design
- ✨ Neon accent colors (cyan, pink, green, blue)
- 📱 Fully responsive design
- 🚀 Modern UI components
- 📧 Waitlist form with email submission
- 🎯 All required sections: Hero, Problem, How It Works, Features, Pricing, Footer

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── components/
│   └── ui/             # Shadcn/UI components
│       ├── button.tsx
│       ├── input.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts        # Utility functions
└── tailwind.config.ts  # Tailwind configuration
```

## Customization

### Colors

Neon colors are defined in `tailwind.config.ts`:
- `neon-cyan`: #00ffff
- `neon-pink`: #ff00ff
- `neon-green`: #00ff00
- `neon-blue`: #0080ff

### Waitlist Form

The waitlist form currently logs to console. To integrate with Tally.so:

1. Create a form on [Tally.so](https://tally.so)
2. Replace the form submission handler in `app/page.tsx` with your Tally.so embed code or API endpoint

## License

MIT


