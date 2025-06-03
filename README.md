# @lawlzer/utils

A collection of TypeScript utilities designed to streamline common programming tasks. This package provides over 50 well-tested utility functions covering everything from async operations to data manipulation.
These utilities are focused on being useful for [me], so I wouldn't necessarily recommend using them. Feel free to steal any of my utilities or use the package if you'd like, though! It is designed to be simple-to-use :)

[![npm version](https://img.shields.io/npm/v/@lawlzer/utils.svg)](https://www.npmjs.com/package/@lawlzer/utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 **50+ Utility Functions** - Comprehensive collection for common tasks
- 📦 **Tree-shakeable** - Import only what you need
- 🔧 **TypeScript First** - Full TypeScript support with proper types
- 🎯 **Zero Dependencies** - Minimal footprint (only essential deps)
- ✅ **Well Tested** - Extensive test coverage
- 🏗️ **ESM & CommonJS** - Works everywhere

## Installation

```bash
npm install @lawlzer/utils
```

```bash
yarn add @lawlzer/utils
```

```bash
pnpm add @lawlzer/utils
```

## Quick Samples

```typescript
import { sleep, retry, deepCompare, clamp, getRandomCharacters, shuffleArray, getUniques } from '@lawlzer/utils';

// Wait for 2 seconds
await sleep('2s'); // Also accepts numbers: sleep(2000)

// Retry an async operation with timeout
const result = await retry(5000, async () => {
	return await fetchSomeData();
});

// Deep compare objects
const isEqual = deepCompare({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }); // true

// Clamp a number between min and max
const clamped = clamp(150, 0, 100); // 100

// Generate random string with letters and numbers
const randomStr = getRandomCharacters(10, { letters: true, numbers: true }); // e.g. "a7Bc9Ef2Gh"

// Shuffle an array
const shuffled = shuffleArray([1, 2, 3, 4, 5]); // e.g. [3, 1, 5, 2, 4]

// Get unique values from array
const unique = getUniques([1, 2, 2, 3, 3, 4]); // [1, 2, 3, 4]
```

## Development

### Building

```bash
# Build for production
npm run build

# Build with watch mode
npm run build:watch
```

The build process:

- Generates both ESM (`.js`) and CommonJS (`.cjs`) outputs (so the code can be used in /any/ codebase?)
- Creates TypeScript declarations (`.d.ts`) (TypeScript!!!)
- Includes source maps for debugging (can read source code for easier debugging)
- Tree-shakes unused code
- Minifies in production mode

### Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration:consumer
```

### Linting

```bash
# Run all linters
npm run lint:all

# Run ESLint
npm run lint:eslint

# Run Prettier
npm run lint:prettier
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Make sure to:

1. Add tests for new utilities
2. Update TypeScript types
3. Add documentation for new functions

## Repository

[GitHub - Lawlzer/utils](https://github.com/Lawlzer/utils)

## Author

**Lawlzer**

## License

MIT © Kevin Porter
