const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter how many terms: ", function (n) {
    n = parseInt(n);

    let first = 0;
    let second = 1;

    console.log("Fibonacci Sequence:");

    for (let i = 1; i <= n; i++) {
        console.log(first);

        let next = first + second;
        first = second;
        second = next;
    }

    rl.close();
});
