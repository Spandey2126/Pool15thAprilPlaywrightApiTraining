function collatz(){

let num1 = Number(document.getElementById("num1").value); //6
let p="";

while(num1 !== 1){ 
  if (num1 % 2 ===0){ 
    num1 = num1 / 2;
  }

  else {
    num1 = (num1*3)+1;
  }
p += num1 + "<br>";
 console.log(num1);
}

document.getElementById("result").innerHTML=p;

}