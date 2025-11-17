# MCP Server - Coin Flip

A simple yet fun MCP server that provides a coin flip tool. Perfect for making random decisions, settling debates, or testing probability!

## Features

- 🪙 **Flip a single coin** - Get a quick heads or tails result
- 🎲 **Flip multiple coins** - Flip up to 100 coins at once with detailed statistics
- ⚖️ **Fair or weighted** - Choose between a fair 50/50 coin or a weighted coin (70% heads, 30% tails)
- 📊 **Statistics** - When flipping multiple coins, get a summary with counts and percentages

## Installation

```bash
pnpm install
```

Or using npm:

```bash
npm install
```

## Development

Run the server in development mode with auto-reload:

```bash
pnpm dev
```

## Build

Build the server for production:

```bash
pnpm build
```

## Start

Start the built server:

```bash
pnpm start
```

The server will run on `http://localhost:3000` by default.

## Usage

This MCP server provides one tool:

### `flip-coin`

Flip one or more coins and get random heads or tails results.

**Parameters:**
- `count` (optional, default: 1): Number of coins to flip (1-100)
- `weighted` (optional, default: false): Whether to use a weighted coin (70% heads, 30% tails)

**Examples:**

1. **Single coin flip:**
   ```
   flip-coin()
   ```
   Result: `🪙 Heads!` or `🪙 Tails!`

2. **Multiple fair coin flips:**
   ```
   flip-coin({ count: 10 })
   ```
   Result: Shows all 10 flips with statistics

3. **Weighted coin:**
   ```
   flip-coin({ count: 20, weighted: true })
   ```
   Result: Shows 20 flips with a 70/30 bias toward heads

## Configuration

You can customize the HTTP port in `xmcp.config.ts`:

```typescript
import { XmcpConfig } from "xmcp";

const config: XmcpConfig = {
  http: {
    port: 3000, // Change this to your preferred port
  },
};

export default config;
```

For STDIO transport (useful for Claude Desktop integration):

```typescript
const config: XmcpConfig = {
  stdio: true,
};
```

## Use Cases

- 🎯 Making binary decisions
- 🎲 Simulating probability experiments
- 🎮 Game mechanics requiring randomness
- 📚 Teaching probability and statistics
- 🤝 Settling friendly disputes

## License

MIT
