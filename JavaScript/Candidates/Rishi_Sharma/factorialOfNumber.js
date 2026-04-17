const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (n) {
    n = parseInt(n);
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;   // running product
    }

    console.log("Factorial of " + n + " is: " + factorial);
    rl.close();
});