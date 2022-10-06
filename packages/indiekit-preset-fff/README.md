# Indiekit Preset FFF

FFF Flavored Frontmatter publication preset for Indiekit.

## Installation

`npm i indiekit-preset-fff`

## Usage

Add `indiekit-preset-fff` to your list of plug-ins, specifying options as required:

```json
{
  "plugins": ["indiekit-preset-fff"],
  "indiekit-preset-fff": {
    "format": "json"
  }
}
```

## Options

| Option   | Type     | Description                                                                            |
| :------- | :------- | :------------------------------------------------------------------------------------- |
| `format` | `string` | Front matter format to use (`json`, `toml` or `yaml`). _Optional_, defaults to `yaml`. |
