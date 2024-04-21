"use strict";
/*

Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

*/
let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: 1925
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        year: 1813
    }
];
// try to access an array in invalid index.
let invalidIndex = 10;
console.log(books[invalidIndex]);
// The result will be undifind..
// now we will set the problem
console.log(books);
