function CheckTemp(){

var a = Number(document.getElementById("celcius").value);
var message;

console.log(a);

if (a>30){
    console.log("Too Hot");
    message = "Too Hot";
}

else if (a>= 20 && a<=30){
    console.log("Comfortable");
    message = "Comfortable";
}

else if (a <=19){
     console.log("Too cold");
     message = "Too Cold";
}

document.getElementById("result").textContent=message;

};