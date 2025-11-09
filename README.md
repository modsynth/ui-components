# UI Components

> React UI component library with Tailwind CSS

Part of the [Modsynth](https://github.com/modsynth) ecosystem.

## Features

- Button component with variants and sizes
- Input component with labels and error states
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

## Version

Current version: `v0.1.0`

## License

MIT
