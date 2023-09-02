// Program: Changing Birthday Party Guest List

// Store the updated list of Birthday Party  guests
var guests = ["Moin", "Sarmad", "Rehan"];

// Replace a guest who can't make it
var replacementGuest = "Rehan";
var indexOfCancellation = 1;  // Index of the guest who can't make it
guests[indexOfCancellation] = replacementGuest;

// Print updated personalized dinner invitations
console.log("Updated My Birthday Party Guest List:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ",\nYou are cordially invited to a  My Birthday Party. Your presence would be an honor.\nTime: [8:00]\nSincerely,\n[Tabish Ayan]");
    console.log("\n"); // Adding a newline for better separation between invitations
}
