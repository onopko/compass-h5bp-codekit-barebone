/**
 * Module dependencies.
 */
var balanced = require("balanced-match")
var colorFn = require("css-color-function")

var gnuMessage = require("./gnu-message")

/**
 * Transform color() to rgb()
 *
 * @param  {String} string declaration value
 * @return {String}        converted declaration value to rgba()
 */
module.exports = function transformColor(string, source) {
  var index = string.indexOf("color(")
  if (index == -1) {
    return string
  }

  var fn = string.slice(index)
  var balancedMatches = balanced("(", ")", fn)
  if (!balancedMatches) {
    throw new SyntaxError(gnuMessage("Missing closing parentheses in '" + string + "'", source))
  }

  return string.slice(0, index) + colorFn.convert("color(" + balancedMatches.body + ")") + transformColor(balancedMatches.post)
}
