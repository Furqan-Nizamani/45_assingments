/*

Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.

*/

import {guestList} from "../Q14"

console.log("THIS IS UPDATED LIST HERE.*****************");

guestList[1] = "Ajmal khan"

guestList.forEach(name => { 
    console.log(`Hello Mr ${name}, I would like to invite you to join us in dinner.`);
    
})

export{guestList}
