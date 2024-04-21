
import {guestList} from "../Q15"

console.log("THIS IS UPDATED LIST HERE.*****************");

guestList.push("Abdul Raqueb", "Abdul Basser","Ali")

guestList.forEach(name=> {
    console.log(`Hello Mr ${name}, I would like to invite you to join us in dinner.`);
    
});

export{guestList}