# unplugin-cesium [![NPM version](https://img.shields.io/npm/v/unplugin-cesium?color=a1b858&label=NPM)](https://www.npmjs.com/package/unplugin-cesium)

[English](README.md) | [简体中文](README-zh_CN.md)

Quickly integrate CesiumJS into various bundlers.

## Features

- ✨ Support Vite, Webpack, Vue CLI, Rspack, Rollup, esbuild and more, powered by unplugin.
- ⚡️ No need to wait for Cesium static files to be copied in Vite development mode
- 🦾 Full TypeScript support.

## Install

```bash
# npm
npm i unplugin-cesium -D

# pnpm
pnpm i unplugin-cesium -D

# yarn
yarn add unplugin-cesium -D
```

## Example

### Vite

```ts
// vite.config.ts
import UnpluginCesium from 'unplugin-cesium/vite';

export default defineConfig({
  plugins: [
    UnpluginCesium({ /* options */ }),
  ],
});
```

### Vue CLI

```ts
// vue.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-cesium/webpack').default({ /* options */ }),
  ],
};
```

### Webpack

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-cesium/webpack').default({ /* options */ }),
  ],
};
```

### Rsbuild

```ts
// rsbuild.config.ts
import UnpluginCesium from 'unplugin-cesium/rspack';

export default defineConfig({
  tools: {
    rspack: {
      plugins: [
        UnpluginCesium({/* options */}),
      ],
    },
  },
});
```

## Options

```ts
export interface UnpluginCesiumOptions {
  /**
   * This is the base URL for static files that CesiumJS needs to load.
   * If you have configured a CDN URL for these static files, you can also directly specify the CDN URL and set `copyStaticFiles` to `false`.
   * @default '/cesiumStatic'
   */
  cesiumBaseUrl?: string;

  /**
   * If you have set a similar `base` in vite or `publicPath` in webpack, you also need to set the same parameter here.
   * @default '/'
   */
  base?: string;

  /**
   * Whether to copy static files to the `cesiumBaseUrl` directory.
   * @default true
   */
  copyStaticFiles?: boolean;
}
```
