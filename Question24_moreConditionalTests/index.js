"use strict";
/*

More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/
// Now I will creat 3 variables for test.
let fruit = "apple";
let number = 10;
let colors = ["red", "blue", "green"];
// Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings");
console.log("Is fruit == 'appel'? I pridict true");
console.log(fruit == "apple"); // Truse
console.log("Is furit is == 'Apple'? I pridict false");
console.log(fruit == "Apple"); // False
console.log("Is furit !== banana? I pridict true");
console.log(fruit !== "banana"); // True
console.log("Is furit == banana? I pridict true");
console.log(fruit == "banana"); // False
console.log('----------------------------------------');
// Tests using the lower case function
console.log("Tests using the lower case function");
console.log("Is APPLE lowercase 'apple'? I pridict true ");
console.log(fruit.toLocaleLowerCase() == "apple"); // True
console.log("Is APPLE lowercase 'APPLE'? I pridict false");
console.log(fruit.toLocaleLowerCase() == 'APPLE');
console.log('----------------------------------------');
// Numerical tests
console.log("Numerical tests");
console.log("Is number == 10? I pridict true");
console.log(number == 10); // True
console.log("Is number > 5? I pridict true");
console.log(number > 5); // True
console.log("Is number < 5? I pridict false");
console.log(number < 5); // false
console.log("Is number is !== 10? I pridict false");
console.log(number !== 10);
console.log('----------------------------------------');
// Tests using "and" and "or" operators
console.log(`Tests using "and" and "or" operators`);
console.log("Is number > 5 && number < 15? I pridict true");
console.log(number > 5 && number < 15); // True
console.log("Is number > 5 && number < 10? I pridict false");
console.log(number > 5 && number < 10); // False
console.log("Is number < 5 || number > 15? I pridict false");
console.log(number < 5 || number > 15); // False
console.log("Is number < 5 || number > 8? I pridict true");
console.log(number < 5 || number > 8); // Truse
console.log('----------------------------------------');
// Test whether an item is in a array
console.log("Test whether an item is in a array");
console.log("Is red in colors? I pridict true");
console.log(colors.includes("red")); // True
console.log("Is yellow in colors? I pridict false");
console.log(colors.includes("yellow")); // False
console.log('----------------------------------------');
// Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log("Is 'yellow' is not is colors? I pridict true");
console.log(!colors.includes("yellow")); // True
console.log("Is 'red' is not in colors? I peidict false ");
console.log(!colors.includes("red")); // False
console.log('----------------------------------------');
