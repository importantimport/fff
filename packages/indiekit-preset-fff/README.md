# Indiekit Preset FFF

🌟 FFF Flavored Frontmatter publication preset for Indiekit.

## Installation

> This package has not been fully tested and may not work or have other problems.

`npm i indiekit-preset-fff`

## Usage

Add `indiekit-preset-fff` to your list of plug-ins, specifying options as required:

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

| Option   | Type     | Description                                                                            |
| :------- | :------- | :------------------------------------------------------------------------------------- |
| `format` | `string` | Front matter format to use (`json`, `toml` or `yaml`). _Optional_, defaults to `yaml`. |
| `types`  | `string` | Post types to use (`urara`). _Optional_, defaults to `urara`.                          |
