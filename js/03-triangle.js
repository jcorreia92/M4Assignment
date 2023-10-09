// Looping a Triangle

// Below are two implementations for looping a triangle, the first printing
// each line of the triangle in a new console log, and the second printing
// the entire triangle in a single console log.

// Variable declaration and initialization
let message = "";

// Loop to output the triangle with a depth of 7
for (let i = 0; i < 7; i++) {

    // Add a # to the message variable
    message += "#";
    console.log(message);
}

// Reset the message variable
message = "";

// Loop to build the triangle
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i; j++){
        message += "#";
    }
    message += "\n";
}

// Output the triangle
console.log(message);