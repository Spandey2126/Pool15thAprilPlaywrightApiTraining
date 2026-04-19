function Count(){

let a = Number(document.getElementById("num").value);
let c = 1;


for (let i=1;i<=a;i++){

    c=c*i;
}

console.log("Factorial of "+ a + " is " + c);


document.getElementById("result").innerHTML =   `Factorial of ${a} is ${c}`;

}