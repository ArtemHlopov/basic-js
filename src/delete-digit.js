const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digit = String(n).split("");
  let num = "";
  let max = 0;
  for (let i = 0; i < digit.length; i++) {
    for (let j = 0; j < digit.length; j++) {
      if (j !== i) {
        num += digit[j];
      }
    }
    if (num > max) {
      max = num;
    }
    num = "";
  }
  return Number(max);
}

module.exports = {
  deleteDigit,
};
