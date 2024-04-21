"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
const Q15_1 = require("../Q15");
Object.defineProperty(exports, "guestList", { enumerable: true, get: function () { return Q15_1.guestList; } });
console.log("THIS IS UPDATED LIST HERE.*****************");
Q15_1.guestList.push("Abdul Raqueb", "Abdul Basser", "Ali");
Q15_1.guestList.forEach(name => {
    console.log(`Hello Mr ${name}, I would like to invite you to join us in dinner.`);
});
