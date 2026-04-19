function Calculator(){

let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let opr = document.getElementById("opr").value;

switch(opr){

    case "+":
        let sum = num1 + num2;
        console.log(sum);
        break;
    
    case "-":
        let diff = num1 - num2;
        console.log(diff);
        break;

    case "*":
        let mul = num1 * num2;
        console.log(mul);
        break;

    case "/":
        let div = num1 / num2;
        console.log(div);
        break;


    default:
        console.log("Not a valid operator");
}
};