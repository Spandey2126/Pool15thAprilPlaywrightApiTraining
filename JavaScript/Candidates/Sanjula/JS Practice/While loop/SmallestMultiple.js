
function smallestNum(){

    let num1 = Number(document.getElementById("num1").value); //5
    let mul = num1;
    let i=2;



while(mul <= 100){ 
    mul = num1*i;

    i++; 

}
console.log(mul);
document.getElementById("result").innerHTML=mul;

};