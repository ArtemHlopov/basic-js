const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  try {
    date.toJSON();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  let month = date.getMonth();

  return month < 2 || month > 10
    ? "winter"
    : month > 1 && month < 5
    ? "spring"
    : month > 4 && month < 8
    ? "summer"
    : "autumn";
}

module.exports = {
  getSeason,
};
