// The “Coin Flip Streak” Game

// Variable declaration
let coinFlip;

// Loop to flip the coin until it lands on tails
do {
    coinFlip = Math.round(Math.random())

    // Output the result of the flip (0 == false and 1 == true)
    if (coinFlip) console.log("Tails");
    else          console.log("Heads");

} while (!coinFlip) // Loop until coinFlip is true (1)