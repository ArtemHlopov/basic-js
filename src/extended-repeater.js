const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.log(str, options);
  let string = str;
  let addstr = "";
  if (options === undefined) {
    return str;
  } else {
    if (options["addition"] !== undefined) {
      addstr = options["addition"];
      if (options["additionRepeatTimes"] !== undefined) {
        if (options["additionSeparator"] !== undefined) {
          addstr += options["additionSeparator"];

          addstr = addstr
            .repeat(+options["additionRepeatTimes"])
            .slice(0, options["additionSeparator"].length * -1);
        } else {
          addstr += "|";
          addstr = addstr.repeat(+options["additionRepeatTimes"]).slice(0, -1);
        }
      }
    }
    if (options["repeatTimes"] !== undefined) {
      if (options["separator"] !== undefined) {
        if (addstr !== "") {
          string += addstr;
          string += options["separator"];
        } else {
          string += options["separator"];
        }
        return (string = string
          .repeat(+options["repeatTimes"])
          .slice(0, -1 * options["separator"].length));
      } else {
        if (addstr !== "") {
          string += addstr;
          string += "+";
        } else {
          string += "+";
        }
        return (string = string.repeat(+options["repeatTimes"]).slice(0, -1));
      }
    } else {
      if (addstr !== "") {
        return (string += addstr);
      } else {
        return string;
      }
    }
  }
}

module.exports = {
  repeater,
};
