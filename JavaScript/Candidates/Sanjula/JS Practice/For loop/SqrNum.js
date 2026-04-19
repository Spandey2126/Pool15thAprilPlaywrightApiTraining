


let a = 10;
let sqr; 
let output = "";


for (let i=1;i<=a;i++){
sqr = i*i;
output += `${sqr}<br>`;
     console.log(sqr);
}


document.getElementById("result").innerHTML = "Square numbers <br>" +  output;

