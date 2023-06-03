# Indiekit Preset **FFF**

[![npm](https://img.shields.io/npm/v/indiekit-preset-fff?color=yellow)](https://npmjs.com/package/indiekit-preset-fff)
![minified size](https://img.shields.io/bundlephobia/min/indiekit-preset-fff?color=yellow)
![downloads](https://img.shields.io/npm/dt/indiekit-preset-fff?color=yellow)

🌟 FFF Flavored Frontmatter publication preset for Indiekit.

## Installation

> This package has not been fully tested and may not work or have other
> problems.

`npm i indiekit-preset-fff`

## Usage

Add `indiekit-preset-fff` to your list of plug-ins, specifying options as
required:

```json
{
  "plugins": ["indiekit-preset-fff"],
  "indiekit-preset-fff": {
    "format": "yaml",
    "types": "urara"
  }
}
```

## Options

| Option   | Type                  | Description                                                                            |
| :------- | :-------------------- | :------------------------------------------------------------------------------------- |
| `format` | `string`              | Front matter format to use (`json`, `toml` or `yaml`). _Optional_, defaults to `yaml`. |
| `types`  | `string`              | Post types to use (`urara`). _Optional_, defaults to `urara`.                          |
| `strict` | `StrictPresetOptions` | Strict Mode Preset Options.                                                            |
