const {
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
} = require('app-root-path').resolve('./package.json');

/**
 * A Webpack plugin to generate the Electron's `package.json` file at compilation time,
 * from the project `package.json`.
 * 
 * Based of the original module `generate-json-webpack-plugin` made by `elliottsj`.
 * 
 * @author: @michaeljota
 * @class ElectronPackagePlugin
 */
class ElectronPackagePlugin {
  /**
   * Creates an instance of ElectronPackagePlugin.
   * 
   * @param {string} [main='main.js'] Electron's `main` file. 
   * 
   */
  constructor(main = 'main.js') {
    this.electronPackage = JSON.stringify({
      name,
      version,
      main,
      description,
      keywords,
      author,
      homepage,
      license,
      repository,
      bugs,
      engines,
    }, null, 2);
  }

  /**
   * The function to be executed in Webpack compilation time.
   * 
   * @param {any} compiler
   * 
   */
  apply (compiler) {
    compiler.plugin('emit', (compilation, done) => {
    compilation.assets['package.json'] = { // eslint-disable-line no-param-reassign
      source: () => this.electronPackage,
      size: () => this.electronPackage.length,
    };
    done();
  });
  }
}

module.exports = ElectronPackagePlugin;
