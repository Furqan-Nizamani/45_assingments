/*

Stripping Names: Store a person’s name, 
and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white spaces.

*/

// step 1 person name with white space.

let person_name: string = "\tFurqan\n"

console.log(person_name);

// step 2 person name without white space.

let personName: string = "\tFurqan\n"

console.log(personName.trim());


// 2nd condition

let nameWithWhiteSpace: string = "\tFurqan\n"

// printing name with white space.
console.log(`Name with white space "${nameWithWhiteSpace}"`);

// name striping.
let stripingName = nameWithWhiteSpace.trim();

// printing name without white space.
console.log(`Name without white space "${stripingName}"`);




