const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") return "";
  let chars = [[1, str[0]]];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      chars[chars.length - 1][0] += 1;
    } else {
      chars.push([1, str[i]]);
    }
  }
  return chars.map((el) => (el[0] === 1 ? (el = el[1]) : el.join(""))).join("");
}

module.exports = {
  encodeLine,
};
