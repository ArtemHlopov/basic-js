const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let res = [];
  if (!members || typeof members !== "object" || members[0] === undefined)
    return "";
  members = members.map((el) => {
    if (typeof el === "string" && el !== "") {
      let a = el.trim().toUpperCase().slice(0, 1);
      res.push(a);
    }
  });

  return res.sort().join("");
}

module.exports = {
  createDreamTeam,
};
