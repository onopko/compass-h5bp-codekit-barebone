/**
 * return GNU style message
 *
 * @param {String} message
 * @param {Object} source
 */
module.exports = function gnuMessage(message, source) {
  return (source ? (source.file ? source.file : "<css input>") + ":" + source.start.line + ":" + source.start.column : "") + " " + message
}
