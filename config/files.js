/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = lineman => ({
  webfonts: {
    files: {
      "node_modules/testdouble-style/webfonts": "node_modules/testdouble-style/webfonts/**/*.*",
      "vendor/webfonts/": "vendor/webfonts/**/*.*"
    }
  }
})
