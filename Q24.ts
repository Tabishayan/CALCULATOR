// Tests for equality and inequality with strings
const str1: string = "apple";
const str2: string = "banana";
console.log(str1 === str2); // False
console.log(str1 !== str2); // True

// Tests using the lower case function
const upperCaseStr: string = "HELLO";
const lowerCaseStr: string = "hello";
console.log(upperCaseStr.toLowerCase() === lowerCaseStr); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const numberA: number = 15;
const numberB: number = 20;
console.log(numberA === numberB); // False
console.log(numberA !== numberB); // True
console.log(numberA > numberB);   // False
console.log(numberA < numberB);   // True
console.log(numberA >= numberB);  // False
console.log(numberA <= numberB);  // True

// Tests using "and" and "or" operators
const boolValue1: boolean = true;
const boolValue2: boolean = false;
console.log(boolValue1 && boolValue2); // False (true && false)
console.log(boolValue1 || boolValue2); // True (true || false)

// Test whether an item is in an array
const numArray: number[] = [5, 10, 15, 20, 25];
const targetNum: number = 15;
console.log(numArray.includes(targetNum)); // True

// Test whether an item is not in an array
const nonExistingNum: number = 30;
console.log(!numArray.includes(nonExistingNum)); // True
