// Program: Expanding Birthday Party Guest List

// Store the updated list of Birthday party guests
var guests = ["Moin", "Sarmad", "Rehan",];

// Inform about the bigger dinner table
console.log("Good news! We've found a bigger dinner table and can accommodate more guests.");

// Add new guests to the list
guests.unshift("Moin");  // Add to the beginning
guests.splice(3, 0, "Sarmad.");  // Add to the middle
guests.push("Rehan");  // Append to the end

// Print updated personalized dinner invitations
console.log("Expanded Birthday Party Guest List:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ",\nYou are cordially invited to a Birthday Party. Your presence would be an honor.\nDate: [Insert Date]\nTime: [8:00]\nSincerely,\n[Tabish Ayan]");
    console.log("\n"); // Adding a newline for better separation between invitations
}
