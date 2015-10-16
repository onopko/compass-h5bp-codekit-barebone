/**
 * Module dependencies.
 */
var color = require("color")

/**
 * Transform rebeccapurple color to rgb()
 *
 * @param  {String} string declaration value
 * @return {String}        converted declaration value to rgba()
 */
module.exports = function transformRebeccapurple(string) {
  return string.replace(/(rebeccapurple)\b/gi, color("rebeccapurple").rgbString())
}
