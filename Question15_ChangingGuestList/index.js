"use strict";
/*

Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
const Q14_1 = require("../Q14");
Object.defineProperty(exports, "guestList", { enumerable: true, get: function () { return Q14_1.guestList; } });
console.log("THIS IS UPDATED LIST HERE.*****************");
Q14_1.guestList[1] = "Ajmal khan";
Q14_1.guestList.forEach(name => {
    console.log(`Hello Mr ${name}, I would like to invite you to join us in dinner.`);
});
