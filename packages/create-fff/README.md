# Create **FFF**

[![npm](https://img.shields.io/npm/v/create-fff?color=yellow)](https://npmjs.com/package/create-fff)
![minified size](https://img.shields.io/bundlephobia/min/create-fff?color=yellow)
![downloads](https://img.shields.io/npm/dt/create-fff?color=yellow)

🌟 Create FFF-related configuration files.

## Usage

```bash
pnpm create fff <mode> # pnpm
# yarn create fff <mode> # yarn
# npm create fff <mode> # npm
```

### Netlify CMS (Decap CMS) Configuration

```bash
pnpm create fff netlify-cms
# or
pnpm create fff decap-cms
```

with preset:

> All presets can be viewed at [src/lib/netlify-cms/presets.ts](src/lib/netlify-cms/presets.ts).

```bash
pnpm create fff netlify-cms --preset urara
```