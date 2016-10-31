const appPath = require('app-root-path');

const rootPackage = appPath.require('package.json');

/**
 * A Webpack plugin to generate the Electron's `package.json` file at compilation time,
 * from the project `package.json`.
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
      name: rootPackage.name,
      version: rootPackage.version,
      main: main,
      description: rootPackage.description,
      keywords: rootPackage.keywords,
      author: rootPackage.author,
      homepage: rootPackage.homepage,
      license: rootPackage.license,
      repository: rootPackage.repository,
      bugs: rootPackage.bugs,
      engines: rootPackage.engines,
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