/**
 *   PostCSS Configuration for Webpack
 * =============================================================================
 */
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        "Android >= 4.4",
        "last 3 Chrome versions",
        "last 3 Edge versions",
        "last 3 Firefox versions",
        "iOS >= 9",
        "Safari >= 9",
        "last 1 OperaMini versions",
        "Explorer 11"
      ]
    })
  ]
}