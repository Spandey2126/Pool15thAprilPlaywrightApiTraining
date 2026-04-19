function GuessNum(){

let num1 = Number(document.getElementById("num1").value);
let guess = 42;

while(num1 !== guess){ 
 num1 = Number(prompt("Try again"));
}

document.getElementById("result").innerHTML="Guess is correct";

}