# UI Components

[![npm version](https://badge.fury.io/js/%40modsynth%2Fui-components.svg)](https://www.npmjs.com/package/@modsynth/ui-components)
[![npm downloads](https://img.shields.io/npm/dm/@modsynth/ui-components.svg)](https://www.npmjs.com/package/@modsynth/ui-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> React UI component library with Tailwind CSS

Part of the [Modsynth](https://github.com/modsynth) ecosystem.

## Features

- Button component with variants and sizes
- Input component with labels and error states
- ✨ **Card component** with variants (v0.2.0)
- ✨ **Spinner component** for loading states (v0.2.0)
- ✨ **Utility functions**: `cn()`, `variant()` (v0.2.0)
- TypeScript support
- Tailwind CSS styling

## Installation

```bash
npm install @modsynth/ui-components
```

## Quick Start

```tsx
import { Button, Input } from '@modsynth/ui-components';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me
      </Button>

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        error="Invalid email"
      />
    </div>
  );
}
```

## Components

### Button

```tsx
<Button variant="primary|secondary|danger" size="sm|md|lg">
  Button Text
</Button>
```

### Input

```tsx
<Input
  label="Label Text"
  error="Error message"
  type="text"
  placeholder="Placeholder"
/>
```

## What's New in v0.2.0

- **Card Component**: Flexible card with variants (default, bordered, elevated)
- **Spinner Component**: Customizable loading spinner
- **Utility Functions**: `cn()` for class merging, `variant()` for style selection

## Version

Current version: `v0.2.0`

## License

MIT
