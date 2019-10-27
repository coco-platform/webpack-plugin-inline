# @coco-platform/webpack-plugin-inline

![Build Status](https://img.shields.io/travis/coco-platform/webpack-plugin-inline/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/coco-platform/webpack-plugin-inline/badge.svg?branch=master)](https://coveralls.io/github/coco-platform/webpack-plugin-inline?branch=master)
![Package Dependency](https://david-dm.org/coco-platform/webpack-plugin-inline.svg?style=flat)
![Package DevDependency](https://david-dm.org/coco-platform/webpack-plugin-inline/dev-status.svg?style=flat)

Inline static scripts, stylesheets outside webpack compile process.

## Usage

```shell
# npm
npm install @coco-platform/webpack-plugin-inline --only=dev;
# yarn
yarn add @coco-platform/webpack-plugin-inline --dev;
```

## Options

### options.files

required, declare files need to inline, absolute path or relative to `process.cwd()`

## Example

Then config the webpack:

```javascript
const InlinePlugin = require('@coco-platform/webpack-plugin-inline');
const configuration = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '__fixture__', 'index.html'),
      inject: 'body',
    }),
    new InlinePlugin({
      files: [
        '__tests__/__fixture__/index.js',
        '__tests__/__fixture__/index.css',
      ],
    }),
  ],
};
```

Finally output:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Webpack Plugin</title>
    <style>
      html,
      body {
        width: 100%;
        height: 100%;
      }
    </style>
    <script>
      /* eslint-env browser */
      document.addEventListener('load', () => {});
    </script>
  </head>
  <body>
    <script type="text/javascript" src="/main.js"></script>
  </body>
</html>
```

## License

MIT
