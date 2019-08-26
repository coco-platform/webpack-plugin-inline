/**
 * @description - inline content outside webpack compilation
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// package
const path = require('path');
const fs = require('fs');

const defaultOptions = {
  files: [],
};
const regExp = {
  style: /\.css$/,
  script: /\.js$/,
};

class InlineWebpackPlugin {
  constructor(options = {}) {
    this.options = { ...defaultOptions, ...options };
    this.ast = this.options.files
      // inline style before script
      .sort((filename) => (regExp.script.test(filename) ? 1 : -1))
      .map((filename) => ({
        filename,
        absPath: path.resolve(process.cwd(), filename),
      }))
      .filter(({ absPath }) => fs.existsSync(absPath))
      .map((item) => ({
        ...item,
        content: fs.readFileSync(item.absPath, { encoding: 'utf8' }),
      }))
      .map(({ filename, content }) => ({
        tagName: regExp.style.test(filename) ? 'style' : 'script',
        closeTag: true,
        innerHTML: content,
      }));
  }

  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.compilation.tap('InlineWebpackPlugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
        'InlineWebpackPluginAlterAssetTags',
        (structure, callback) => {
          callback(null, {
            ...structure,
            head: [...structure.head, ...this.ast],
          });
        }
      );
    });
  }
}

module.exports = InlineWebpackPlugin;
