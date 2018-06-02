/**
 * @description - @coco-platform/init-cli generated template
 * @author - yang.yuncai <383235388@qq.com>
 */

// Native
// Scope
const defaultOptions = {
  verbose: false,
};

class InlinePlugin {
  constructor(options = {}) {
    this.options = Object.assign({}, defaultOptions, options);
  }

  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.compilation.tap('Inline', (compilation) => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
        'Inline',
        (structure, callback) => {
          callback(null, structure);
        }
      );
    });
  }
}

module.exports = InlinePlugin;
