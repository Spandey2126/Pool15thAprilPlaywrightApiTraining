
let a = [1,2,3,4,5];
let sum = 0;

for (let i=0;i<a.length;i++){
 sum = sum + a[i];
}

console.log("Sum of array elements is "+ sum);


document.getElementById("result").innerHTML = "Sum of array elements is "+ sum;

