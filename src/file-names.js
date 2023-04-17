const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let set = new Set(names);
  if (set.size === names.length) {
    return names;
  }
  for (let i = names.length - 1; i > 0; i--) {
    let repeate = {};

    names.forEach((el) =>
      repeate[el] === undefined ? (repeate[el] = 1) : (repeate[el] += 1)
    );

    if (repeate.hasOwnProperty(names[i]) && repeate[names[i]] > 1) {
      names[i] = names[i] + `(${repeate[names[i]] - 1})`;
      repeate[names[i]] -= 1;
    }
  }

  return renameFiles(names);
}

module.exports = {
  renameFiles,
};
