/*

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

*/

import{guestList} from "../Q16"// Furqan, Ajmal khan, Samad, Abdul Raqueb, Abdul Baseer, Ali.


console.log("*************************************");

//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.


while (guestList.length > 2) {
    let removeGuest = guestList.pop()
    console.log(`Sorry Mr ${removeGuest}, I am unable to invite you for the dinner because I found the table only for 2 persons.`);
    
    
}

console.log("*******************************");

// Print a message to each of the two people still on your list, letting them know they’re still invited.


for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr ${guestList[i]}, you are still invited.`);
    
    
}

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guestList.splice(0, 2);
console.log(guestList);

console.log("Question number 17 completed.");
