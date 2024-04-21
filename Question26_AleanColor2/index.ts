/*

Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.

*/

let alien_coloer = "green"

// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

if (alien_coloer == "green") {
    console.log("You got 5 points for shooting the alean");

}
else if (alien_coloer !== "green") {
    //If the alien’s color isn’t green, print a statement that the player just earned 10 points.
    console.log("The please just earned 10 points");

}

// Write one version of this program that runs the if block and another that runs the else block.

// Version that runs the if block (alien_color is 'red'):

let aleanColoer = "red"

if (aleanColoer == "red") {
    console.log("You got 10 points");

} else {
    console.log("you got nothing");

}

// Version that runs the else block (alien_color is not 'blue'):

let AlienColor = "blue"

if (AlienColor == "red") {
    console.log("Congratulations! You just earned 5 points.");

} else {
    console.log("Sorry, you didn't earn any points this time.");

}