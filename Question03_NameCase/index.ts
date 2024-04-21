/*

Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.

*/

let sentance: string = "hello i am learning typeScript"

// UperCase conditoion 1
console.log("Upercase condition: " + sentance.toUpperCase());

//condition 2
// here we will create a variable.

let uppercase: string = sentance.toUpperCase();
console.log("Upercase condition 2:" + uppercase);


// LowerCase condition 1
console.log("LowerCase condition: " + sentance.toLowerCase());

// Condition 2
// here we will create a variable.

let lowercase: string = sentance.toLocaleLowerCase();
console.log("LowerCase condition 2:" + lowercase);


// TitleCase
/*
Now its time to convert the string to the title case sentance
we can not convert it in a simple title case. so we use steps and loop
*/
// step 1

let words: string[] = sentance.split(" ");

// step 2
let titleCaseSentance: string = ""

// step 3
for (let i = 0; i < words.length; i++) {
    titleCaseSentance += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "

}
console.log("TitleCase: "+titleCaseSentance);
