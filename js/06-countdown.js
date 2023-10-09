// Countdown

// This program uses a for loop to output the numbers from a user-specified
// number down to zero.

// Variable declaration and initialization
let max = parseInt(prompt("Please enter a number to countdown from:"));

// Validate the user input
while (isNaN(max)) {
    max = parseInt(prompt("Invalid argument. Please enter a number to countdown from:"));
}

// Loop to countdown from the user-specified number to zero
for (let i = max; i >= 0; i--) {
    console.log(i);
}