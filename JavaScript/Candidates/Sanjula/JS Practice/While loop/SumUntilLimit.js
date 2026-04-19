function sum(){
    

let a = Number(document.getElementById("limit").value);
let sum=0;
let i=1;


while (i<=a) { //a=100, 1<=100

    sum = sum + i; //sum = 0+1 = 1; //1+2 = 3//3+4 = 7//7+5
   
    i++;//2//3//4//5
    
}

 console.log (sum);
 document.getElementById("result").innerHTML = sum;

};