/**
 * Module dependencies.
 */
var color = require("color")
var reduceFunctionCall = require("reduce-function-call")

/**
 * transform hwb() to rgb() (or rgba())
 *
 * @param  {String} string declaration value
 * @return {String}        converted declaration value to rgba()
 */
module.exports = function transformHwb(string) {
  return reduceFunctionCall(string, "hwb", function(body, fn) {
    return color(fn + "(" + body + ")").rgbString()
  })
}
