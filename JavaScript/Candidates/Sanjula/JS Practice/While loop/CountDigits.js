function countDigit(){

let num = Number(document.getElementById("num").value); //12345
let count = 0;

while(num>0){
    num = Math.floor(num/10); //removes last digit 1234 an assigns back to num
    count++;//increases count from 0 to 1
}
console.log(count);
document.getElementById("result").innerHTML=count;

}