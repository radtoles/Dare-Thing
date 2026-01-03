# Copilot Instructions for Dare Thing

## Project Overview

**Dare Thing** is an Expo-based universal React Native app (iOS, Android, Web) built for a portfolio/website project. The app uses Expo Router for file-based routing, React Navigation for tab-based navigation, and supports both light and dark theme modes.

## Architecture & Key Components

### File-Based Routing with Expo Router
- **Root layout** ([app/_layout.tsx](app/_layout.tsx)): Sets up ThemeProvider with React Navigation themes and root Stack navigation
- **Tab navigation** ([app/(tabs)/_layout.tsx](app/(tabs)/_layout.tsx)): Implements bottom tab bar with Home and Explore tabs using `<Tabs>` from expo-router
- **Routing pattern**: Routes are directory/file based—`app/index.tsx` is the home tab, `app/(tabs)/explore.tsx` is the explore tab
- **Modal support**: Modal screen defined in root stack with `presentation: 'modal'`

### Theme & Color Management
- **Central theme definition** ([constants/theme.ts](constants/theme.ts)): Exports `Colors` object with light/dark mode pairs for text, background, tint, icons
- **Theme-aware components**: Use `useThemeColor()` hook to select light or dark colors dynamically
  - Example: [components/themed-text.tsx](components/themed-text.tsx) accepts `lightColor` and `darkColor` props
  - Pattern: `useThemeColor({ light: lightColor, dark: darkColor }, 'text')`

### Component Patterns
- **Themed components** ([components/themed-text.tsx](components/themed-text.tsx), [components/themed-view.tsx](components/themed-view.tsx)): Wrap native components with theme-aware styling
- **UI library** ([components/ui/](components/ui/)): Icon symbols, platform-specific components (e.g., `icon-symbol.ios.tsx` vs `icon-symbol.tsx`)
- **Haptic feedback**: [components/haptic-tab.tsx](components/haptic-tab.tsx) wraps tab buttons with haptic response using `expo-haptics`

### Hooks Organization
- **Platform-specific hooks**: `use-color-scheme.ts` (generic) and `use-color-scheme.web.ts` (web override)
- **Re-export pattern**: Hooks re-export from native libraries to centralize imports (e.g., `use-color-scheme.ts` re-exports `useColorScheme` from `react-native`)

## Build & Development Workflow

### Available Commands
- `npm start` — Start Expo development server
- `npm run ios` — Run on iOS simulator
- `npm run android` — Run on Android emulator
- `npm run web` — Run web version
- `npm run lint` — Run ESLint (uses expo config)
- `npm run reset-project` — Reset to blank app structure

### Key Dependencies
- **Expo**: Base framework with Router, Navigation, Icons, Haptics, Images, Splash Screen
- **React Native**: Core UI and platform APIs
- **React Navigation**: Bottom tabs and navigation themes
- **Reanimated & Gesture Handler**: Animation and gesture support
- **React 19.1.0 & TypeScript 5.9.2**: Modern React with strict TypeScript

## Project-Specific Conventions

### TypeScript Path Alias
- Path alias `@/*` maps to workspace root—use `@/components`, `@/hooks`, `@/constants` instead of relative paths

### Strict Mode & New Architecture
- TypeScript `strict: true` enabled in [tsconfig.json](tsconfig.json)
- `newArchEnabled: true` in [app.json](app.json) for React Native New Architecture
- `typedRoutes: true` for type-safe Expo Router navigation
- `reactCompiler: true` enabled (experimental React Compiler)

### Theme Colors Structure
Always define theme colors in `Colors[colorScheme]` with these keys:
- `text`, `background`, `tint`, `icon`, `tabIconDefault`, `tabIconSelected`
- Update [constants/theme.ts](constants/theme.ts) for new color additions

## Integration Points & External Dependencies

### Expo Modules
- **expo-router**: File-based routing and typed route navigation
- **expo-haptics**: Haptic feedback (used in tab buttons)
- **expo-constants**: Env and config access
- **expo-font, expo-symbols**: Typography and icon systems
- **expo-system-ui**: System UI integration

### React Navigation
- Integrates with Expo Router; themes passed via `<ThemeProvider>`
- Tab colors use `Colors[colorScheme].tint` for active tab tint

### Platform-Specific Code
- Use `.ios.ts` and `.web.ts` suffixes for platform overrides
- Example: [hooks/use-color-scheme.web.ts](hooks/use-color-scheme.web.ts) overrides base hook for web

## Common Tasks

### Adding a New Screen
1. Create file in `app/(tabs)/` (e.g., `app/(tabs)/profile.tsx`)
2. Add `<Tabs.Screen>` entry in [app/(tabs)/_layout.tsx](app/(tabs)/_layout.tsx) with icon and title
3. Use `ThemedText` and `ThemedView` from components for theme consistency

### Updating Colors
1. Add color pairs to `Colors.light` and `Colors.dark` in [constants/theme.ts](constants/theme.ts)
2. Create themed component wrapper if needed, or use `useThemeColor()` directly
3. Reference new color with `Colors[colorScheme]['colorName']`

### Testing Platform-Specific Code
- Build platform-specific hooks/components with `.ios.ts`, `.android.ts`, `.web.ts` suffixes
- React Native/Expo automatically resolves correct file based on platform
