function Count(){

let a = Number(document.getElementById("num").value);
let output = "";

for (let i=a;i>=0;i--){
console.log(i);

output += `${i}<br>`;

}

document.getElementById("result").innerHTML = output;

}