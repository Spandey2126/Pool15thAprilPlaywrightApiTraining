

let output = "";

for (let i=0;i<=20;i++){

    if (i%2 === 0){
       

        console.log (i);
         output += `${i}<br>`;
    }

}


document.getElementById("result").innerHTML =   output;
