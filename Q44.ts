function makeSandwich(...items: string[]): void {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please choose some items.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(item => {
            console.log("- " + item);
        });
    }
}

// Calling the function with different numbers of arguments
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese", "Mustard");
makeSandwich("Peanut Butter", "Jelly");
