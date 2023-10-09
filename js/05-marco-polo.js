// Marco! Polo! 

// This program writes to the console the numbers from 1 to 100 with the
// following exceptions. For numbers divisible by three (3), it writes Marco!
// instead of the number, and for multiples of five (5) it writes Polo!. For
// numbers which are multiples of both three and five, it writes Marco! Polo!.

// Variable declaration for a message that gets rewritten each iteration
let message;

// Loop to output the numbers from 1 to 100, writing Marco! for multiples of 3,
// Polo! for multiples of 5, and Marco! Polo! for multiples of both 3 and 5.
for (let i = 1; i <= 100; i++) {

    // Check if the number is a multiple of 3
    if (i % 3 == 0) {
        message = "Marco!";

        // Check if the number is also a multiple of 5
        if (i % 5 == 0) {
            message += " Polo!";
        }
    }

    // Check if the number is a multiple of 5 but not 3
    else if (i % 5 == 0) message = "Polo!";

    // Otherwise, just output the number
    else message = i;

    console.log(message);
}