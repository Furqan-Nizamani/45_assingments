/*

Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

*/

// virsion 1
let alien_color = "green"

if (alien_color == "green") {
    console.log("player earned 5 points.");

} else if (alien_color == "yellow") {
    console.log("player earned 10 points.");

} else if (alien_color == "red"){
    console.log("player earned 15 points.");
    
}

// virson 2

let alienColor = "yellow"

if (alienColor == "green") {
    console.log("player earned 5 points.");

} else if (alienColor == "yellow") {
    console.log("player earned 10 points.");

} else if (alienColor == "red"){
    console.log("player earned 15 points.");
    
}

// virson 3

let AlienColor = "red"

if (AlienColor == "green") {
    console.log("player earned 5 points.");

} else if (AlienColor == "yellow") {
    console.log("player earned 10 points.");

} else if (AlienColor == "red"){
    console.log("player earned 15 points.");
    
}