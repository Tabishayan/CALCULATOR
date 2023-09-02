let car = 'Subaru';
let age = 5;
let temperature = 25;
let fruits = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("Is car equal to 'Subaru'? I predict True.");
console.log(car == 'Subaru');

console.log("Is car not equal to 'Toyota'? I predict True.");
console.log(car != 'Toyota');

// Tests using the lower case function
console.log("Is car lowercase equal to 'subaru'? I predict False.");
console.log(car.toLowerCase() == 'subaru');

// Numerical tests
console.log("Is age equal to 5? I predict True.");
console.log(age == 5);

console.log("Is age greater than 10? I predict False.");
console.log(age > 10);

console.log("Is temperature less than or equal to 30? I predict True.");
console.log(temperature <= 30);

// Tests using "and" and "or" operators
console.log("Is car equal to 'Subaru' and age equal to 5? I predict True.");
console.log(car == 'Subaru' && age == 5);

console.log("Is car equal to 'Toyota' or age equal to 10? I predict False.");
console.log(car == 'Toyota' || age == 10);

// Test whether an item is in an array
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
