# Electron Package Plugin

A Webpack plugin to generate the Electron package.json with the values in the project package.json

## Installation

```bash
npm install --save electron-package-plugin
```

## Usage

Giving the package.json in your project, ex:

```json
{
  "name": "example-package",
  "version": "0.0.0-example",
  "description": "This is an example package"
}
```

You can just set the plugin in the Electron main `webpack.config.js`

```js
// webpack.config.js
const ElectronPackagePlugin = require('electron-package-plugin');

module.exports = {
  // ...
  plugins: [
    // ...
    new ElectronPackagePlugin(),
  ]
  // ...
};
```

This will generate a `package.json` file in the target folder as the follow:

```json
{
  "name": "example-package",
  "version": "0.0.0-example",
  "description": "This is an example package",
  "main": "main.js"
}
```

The plugin will read and use the follow properties:
```js
{
  name,
  version,
  description,
  keywords,
  author,
  homepage,
  license,
  repository,
  bugs,
  engines,
}
```

### Options

- `main`: (default: `main.js`) You can set the name of the main file of you Electron aplication.

## Acknowledgment

This plugin it's just a specific use-case using the awesome [`generate-json-webpack-plugin`](https://github.com/elliottsj/generate-json-webpack-plugin).
Really thanks to the author @elliottsj.

## Todo

- Tests
- Set an option to define the structure to be used