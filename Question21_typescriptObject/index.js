"use strict";
/*

They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

*/
let books = [
    {
        title: "To Kill a MOkingBird",
        author: "Harper Lee",
        Genre: "Fiction",
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
// INFORMATION.
console.log("INFORMATION ABOUT BOOKS.");
//Function.
books.forEach(book => {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
    console.log(`Year ${book.year}`);
    console.log("(-----------------------------------)");
});
