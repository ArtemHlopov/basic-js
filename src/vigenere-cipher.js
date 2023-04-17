const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(param) {
    param === false ? (this.reverse = true) : (this.reverse = false);
    this.alph = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }
  encrypt(message, key) {
    if (
      !message ||
      !key ||
      typeof message !== "string" ||
      typeof key !== "string"
    ) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let values = [];
    let streamVal = [];
    let counter = 0;
    let res = "";
    for (let i = 0; i < message.length; i++) {
      if (this.alph.includes(message[i])) {
        values.push(this.alph.indexOf(message[i]));
        streamVal.push(this.alph.indexOf(key[counter]));
        res += this.alph[(values[i] + streamVal[i]) % 26];
        counter += 1;
        if (counter === key.length) {
          counter = 0;
        }
        continue;
      }
      values.push(message[i]);
      streamVal.push(message[i]);
      res += message[i];
    }
    if (this.reverse) {
      return [...res].reverse().join("");
    } else {
      return res;
    }
  }
  decrypt(message, key) {
    if (
      !message ||
      !key ||
      typeof message !== "string" ||
      typeof key !== "string"
    ) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let values = [];
    let streamVal = [];
    let counter = 0;
    let res = "";
    for (let i = 0; i < message.length; i++) {
      if (this.alph.includes(message[i])) {
        values.push(this.alph.indexOf(message[i]));
        streamVal.push(this.alph.indexOf(key[counter]));
        let el = values[i] - streamVal[i];
        res += this.alph[(el < 0 ? el + 26 : el) % 26];
        counter += 1;
        if (counter === key.length) {
          counter = 0;
        }
        continue;
      }
      values.push(message[i]);
      streamVal.push(message[i]);
      res += message[i];
    }
    if (this.reverse) {
      return [...res].reverse().join("");
    } else {
      return res;
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
