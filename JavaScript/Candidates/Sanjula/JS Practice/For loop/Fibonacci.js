
function fibonacci(){


let a = Number(document.getElementById("input").value);
let sum = 0; 
let sums = 1;
let output = "";


for (let i=0;i<a;i++){

     output += `${sum} `;

     let reff = sum + sums;
     //1 = 0+1
     sum = sums;
     //1=1
     sums = reff
     //1=1
}

console.log(output);
document.getElementById("result").innerHTML = "Fibo series "+ output;


};