const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = "()";
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      position % 1 !== 0 ||
      position > this.chain.length ||
      position < 1
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let a = "";
    this.chain.forEach((el) => (a += `( ${el} )~~`));
    this.chain = [];

    return a.slice(0, -2);
  },
};

module.exports = {
  chainMaker,
};
