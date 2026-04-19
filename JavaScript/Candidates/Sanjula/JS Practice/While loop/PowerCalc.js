function powerCalc(){

let basenum = Number(document.getElementById("num1").value);//2
let exponent = Number(document.getElementById("num2").value);//5
let power = 1;
let count = 0;

while(count < exponent){ 
    power *= basenum;
    count++;

}
console.log(power);
document.getElementById("result").innerHTML=power;

}