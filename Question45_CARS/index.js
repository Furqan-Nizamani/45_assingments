"use strict";
/*

Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.

*/
function store_car_info(manufacturer, model, ...extras) {
    let car_info = {
        manufacturer: manufacturer,
        model: model
    };
    // Add any additional information provided as keyword arguments
    for (let [key, value] of extras) {
        car_info[key] = value;
    }
    return car_info;
}
// Call the function with required information and two additional name-value pairs
let car_info = store_car_info("Toyota", "Camry", ["color", "red"], ["year", 2022]);
// Print the object returned to ensure all information was stored correctly
console.log(car_info);
