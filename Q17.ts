// Program: Travel Bucket List
// Author: [Your Name]
// Date: 2023-08-13

// Store the locations in an array
var travelBucketList = [ "DUBAI", "Saudia Arab", "Eygpt"];

// Print the original array
console.log("Original Travel Bucket List:");
console.log(travelBucketList);
console.log("\n"); // Adding a newline for better separation

// Print the array in alphabetical order (without modifying the original)
var sortedAlphabetical = travelBucketList.slice().sort();
console.log("Travel Bucket List in Alphabetical Order:");
console.log(sortedAlphabetical);
console.log("\n");

// Show that the original array is still in its original order
console.log("Original Travel Bucket List (Unchanged):");
console.log(travelBucketList);
console.log("\n");

// Print the array in reverse alphabetical order (without modifying the original)
var sortedReverseAlphabetical = travelBucketList.slice().sort().reverse();
console.log("Travel Bucket List in Reverse Alphabetical Order:");
console.log(sortedReverseAlphabetical);
console.log("\n");

// Show that the original array is still in its original order
console.log("Original Travel Bucket List (Unchanged):");
console.log(travelBucketList);
console.log("\n");

// Reverse the order of the original list
travelBucketList.reverse();
console.log("Travel Bucket List Reversed:");
console.log(travelBucketList);
console.log("\n");

// Reverse the order of the list back to its original order
travelBucketList.reverse();
console.log("Travel Bucket List Restored to Original Order:");
console.log(travelBucketList);
console.log("\n");

// Sort the array in alphabetical order
travelBucketList.sort();
console.log("Travel Bucket List Sorted in Alphabetical Order:");
console.log(travelBucketList);
console.log("\n");

// Sort the array in reverse alphabetical order
travelBucketList.sort().reverse();
console.log("Travel Bucket List Sorted in Reverse Alphabetical Order:");
console.log(travelBucketList);
