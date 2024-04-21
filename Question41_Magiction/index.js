"use strict";
/*

Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.

*/
function show_magicians(magicians) {
    for (let magician of magicians)
        console.log(magician);
}
// array
let magicians = ["Abdul Raqueeb", "Furqan", "Ajmal khan", "samad", "Abdul Baseer"];
// calling function
console.log(magicians);
