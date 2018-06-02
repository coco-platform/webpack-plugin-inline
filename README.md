# @coco-platform/webpack-plugin-inline

![Build Status](https://img.shields.io/travis/coco-platform/webpack-plugin-inline/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/coco-platform/webpack-plugin-inline/badge.svg?branch=master)](https://coveralls.io/github/coco-platform/webpack-plugin-inline?branch=master)
![Package Dependency](https://david-dm.org/coco-platform/webpack-plugin-inline.svg?style=flat)
![Package DevDependency](https://david-dm.org/coco-platform/webpack-plugin-inline/dev-status.svg?style=flat)

## Usage

```shell
# npm
npm install @coco-platform/webpack-plugin-inline --only=dev;
# yarn
yarn add @coco-platform/webpack-plugin-inline --dev;
```

## Options

### options.verbose

Optional, default false. whether output hints resource into stdout.

## Example

Then config the webpack:

```javascript
const configuration = {
  entry: path.resolve(__dirname, '__fixture__', 'index.js'),
  resolve: {
    extensions: ['.js', '.css'],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [],
  },
  plugins: [
    Reflect.construct(HtmlWebpackPlugin, [
      {
        template: path.resolve(__dirname, '__fixture__', 'index.html'),
        inject: 'body',
      },
    ]),
    Reflect.construct(PlaceholderPlugin, [
      {
        verbose: true,
      },
    ]),
  ],
};
```

Finally output:

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack Plugin</title>``
</head>
<body>
  <script type="text/javascript" src="/main.js"></script></body>
</html>
```

## License

MIT
