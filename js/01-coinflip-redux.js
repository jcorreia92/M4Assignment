// The “Coin Flip” Game Redux

// Variable declaration (and initialization for the number of flips)
let coinFlip;
let numFlips = parseInt(prompt("Please enter the number of coin flips:"));

// Validate the user input
while (isNaN(numFlips)) {
    numFlips = parseInt(prompt("Invalid argument. Please enter the number of coin flips:"));
}

// Loop to flip the coin the specified number of times
for (let i = 0; i < numFlips; i++) {
    coinFlip = Math.round(Math.random());
    
    // Output the result of the flip (0 == false and 1 == true)
    if (coinFlip) console.log("Tails");
    else          console.log("Heads");
}

