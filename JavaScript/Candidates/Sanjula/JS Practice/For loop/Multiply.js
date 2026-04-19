function Multiply(){

let a = Number(document.getElementById("num").value);
let output = "";

for (let i=1;i<=10;i++){
let c = a*i;
console.log(a + " * " + i + " = " + c);

output += `${a} * ${i} = ${c}<br>`;

}

document.getElementById("result").innerHTML = output;

}