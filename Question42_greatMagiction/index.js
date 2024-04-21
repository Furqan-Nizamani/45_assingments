"use strict";
/*

Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.

*/
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}
// Array of magician's names
let magicians = ["Abdul Raqueeb", "Furqan", "Ajmal khan", "samad", "Abdul Baseer"];
// Call make_great() to modify the magicians array
let great_magicians = make_great(magicians);
// Call show_magicians() to see the modified list
show_magicians(great_magicians);
