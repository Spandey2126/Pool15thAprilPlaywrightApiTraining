const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (n) {
    n = parseInt(n);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;   // accumulate the sum
    }

    console.log("Sum of first " + n + " numbers is: " + sum);
    rl.close();
});