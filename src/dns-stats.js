const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  if (domains.length === 0) return {};
  domains = domains
    .map((el) => el.split(".").reverse())
    .sort((a, b) => b.length - a.length);
  domains.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      let key = "";
      for (let j = 0; j <= i; j++) {
        key += `.${domains[0][j]}`;
      }
      res[key] === undefined ? (res[key] = 1) : (res[key] += 1);
    }
  });

  return res;
}

module.exports = {
  getDNSStats,
};
