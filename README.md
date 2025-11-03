# Stopwatch Application

A modern, responsive stopwatch application built with React, TypeScript, and Tailwind CSS. This application provides a clean and intuitive interface for timing events with lap tracking functionality.

## Features

- ⏱️ **Precise Time Tracking**: Accurate stopwatch functionality with hours, minutes, and seconds display
- ▶️ **Start/Pause Controls**: Easy-to-use start and pause functionality
- 🔄 **Reset Functionality**: Reset the stopwatch to zero at any time
- 📊 **Lap Tracking**: Record and display multiple lap times
- 🗑️ **Clear Laps**: Remove all recorded laps with a single click
- 🎨 **Modern UI**: Beautiful, responsive design with backdrop blur effects
- 📱 **Mobile Friendly**: Fully responsive design that works on all screen sizes

## Tech Stack

- **React 19.1.1**: Modern React with latest features
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Tailwind CSS 4.1.16**: Utility-first CSS framework for styling
- **Bun**: Fast JavaScript runtime and package manager

## Project Structure

```
stopwatch-idsonus/
├── public/
│   └── stopwatch-bg.jpg      # Background image
├── src/
│   ├── components/           # React components
│   │   ├── Hours.tsx         # Hours display component
│   │   ├── Minutes.tsx       # Minutes display component
│   │   ├── Seconds.tsx       # Seconds display component
│   │   ├── StartButton.tsx   # Start button component
│   │   ├── PauseButton.tsx   # Pause button component
│   │   ├── RestartButton.tsx # Restart button component
│   │   ├── LapList.tsx       # Lap list display component
│   │   └── ClearButton.tsx   # Clear laps button component
│   ├── hooks/
│   │   └── useStopWatch.ts   # Custom hook for stopwatch logic
│   ├── styles/
│   │   └── global.css        # Global styles
│   ├── App.tsx               # Main application component
│   └── main.tsx              # Application entry point
├── package.json              # Project dependencies and scripts
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

## How It Works

### Core Logic (`useStopwatch` Hook)

The application's core functionality is managed by a custom React hook located in `src/hooks/useStopWatch.ts`. This hook:

1. **Manages State**: Tracks hours, minutes, seconds, running status, and lap times
2. **Uses `setInterval`**: Updates the timer every second (1000ms) when running
3. **Handles Time Overflow**: Automatically increments minutes when seconds reach 60, and hours when minutes reach 60
4. **Lap Recording**: When paused, automatically records the current time as a lap
5. **Cleanup**: Properly clears intervals on component unmount to prevent memory leaks

### Component Architecture

The application follows a modular component architecture:

- **Time Display Components** (`Hours.tsx`, `Minutes.tsx`, `Seconds.tsx`):
  - Memoized components for optimal performance
  - Format numbers with leading zeros (e.g., "01", "05")

- **Control Buttons**:
  - `StartButton`: Initiates the stopwatch
  - `PauseButton`: Pauses the stopwatch and records a lap
  - `RestartButton`: Resets the stopwatch to 00:00:00 and clears all laps
  - `ClearButton`: Clears all recorded laps without resetting the timer

- **Lap Display** (`LapList.tsx`):
  - Displays all recorded laps in a scrollable list
  - Shows lap number and formatted time for each lap

### User Flow

1. **Starting**: Click "Start" to begin timing
2. **Pausing**: Click "Pause" to stop the timer and record a lap
3. **Resuming**: Click "Start" again to continue from the current time
4. **Resetting**: Click "Restart" to reset everything to zero
5. **Clearing Laps**: While paused or stopped, click "Clear" to remove all lap records

## Getting Started

### Prerequisites

- **Bun**: Install Bun from [bun.sh](https://bun.sh) if you haven't already
- Node.js (if not using Bun) - version 18 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd stopwatch-idsonus
   ```

2. Install dependencies:
   ```bash
   bun install
   ```
   Or if using npm:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
bun run dev
```

Or with npm:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in terminal).

### Building for Production

Create a production build:

```bash
bun run build
```

Or with npm:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
bun run preview
```

Or with npm:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
bun run lint
```

Or with npm:

```bash
npm run lint
```

## Available Scripts

- `dev`: Start development server with hot module replacement
- `build`: Build the application for production
- `preview`: Preview the production build locally
- `lint`: Run ESLint to check for code issues

## Styling

The application uses Tailwind CSS for all styling. Key design features:

- **Background**: Full-screen background image with overlay
- **Glass Morphism**: Backdrop blur effects on the lap list container
- **Responsive Typography**: Scales from mobile to desktop
- **Smooth Transitions**: Hover effects and state changes are animated
- **Color Scheme**: Primary color for buttons with hover states

## TypeScript

The project is fully typed with TypeScript. All components and hooks have proper type definitions:

- Component props are typed with interfaces/types
- The `useStopwatch` hook returns a typed interface
- State management uses TypeScript's type system for safety

## Browser Support

This application works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS Backdrop Filter

## Performance Optimizations

- **React.memo**: Time display components are memoized to prevent unnecessary re-renders
- **useCallback**: Hook functions are memoized to maintain referential equality
- **useRef**: Interval reference prevents memory leaks
- **Lazy Loading**: Background image uses lazy loading attribute

## Future Enhancements

Potential features that could be added:

- [ ] Save lap times to localStorage
- [ ] Export lap times as CSV
- [ ] Multiple timer modes (countdown, interval)
- [ ] Sound notifications
- [ ] Dark/light theme toggle
- [ ] Timer presets (1min, 5min, etc.)

## License

This project is private and not licensed for public use.

## Contributing

This is a private project. Contributions are not currently being accepted.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

