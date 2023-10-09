//Odd or Even?

// This program uses a for loop to output the numbers from 0 to 15 with an
// additional message indicating whether the number is odd or even.


for (let i = 0; i<= 15; i++) {

    // Check if the number is even or odd using the modulus operator
    if (i % 2 == 0) console.log(i + " is even.")
    else            console.log(i + " is odd")
}