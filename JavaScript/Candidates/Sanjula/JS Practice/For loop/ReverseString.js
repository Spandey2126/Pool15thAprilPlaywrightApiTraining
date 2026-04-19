
function arraySum(){


let a = document.getElementById("input").value;
let rev ="";

for (let i= a.length-1;i>=0;i--){
 rev += a[i];
}

console.log("Reversed string is "+ rev);

document.getElementById("result").innerHTML = "Revresed String is "+ rev;


};