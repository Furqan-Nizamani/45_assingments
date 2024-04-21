"use strict";
/*

Dinner Guests:
Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q14_1 = require("../Q14");
Q14_1.guestList.forEach(name => {
    console.log(`Hello ${name}, I am inviting 3 of you guyes.`);
});
