function reverseNum(){

let basenum = Number(document.getElementById("num1").value);//125478 - 874521
let rev = 0;

while(basenum > 0){ 
    let digit = basenum % 10;
    rev = rev * 10 + digit;
    basenum = Math.floor(basenum/10);


}
console.log(rev);
document.getElementById("result").innerHTML=rev;

}