module.exports = function reverse (n) {
  let numberStr = n.toString()
  let reverseStr = numberStr.split('').reverse().join('')
  return parseInt(reverseStr);

}
