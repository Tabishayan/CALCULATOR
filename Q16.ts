// Program: Shrinking Birthday PartyGuest List
// Author: [Your Name]
// Date: 2023-08-13

// Store the expanded list of Birthday Party guests
var guests = ["Moin", "Sarmad", "Rehan",];

// Inform about the smaller dinner table
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only accommodate two guests.");

// Remove guests one by one and send sorry messages
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner this time.");
}

// Print invitations to the two remaining guests
console.log("Invitations for the remaining guests:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ",\nYou are still invited to a Birthday Party  event. We look forward to your presence.\nTime: [8:00]\nSincerely,\n[Tabish Ayan]");
    console.log("\n"); // Adding a newline for better separation between invitations
}

// Empty the list
guests = [];

// Print the empty list
console.log("Final Guest List: ", guests);
