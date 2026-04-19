function Traffic(){

let color = document.getElementById("color").value;
color=color.toLowerCase().trim();

if (color === "red"){
 console.log("Stop");
}
else if (color === "green"){
 console.log("Go");
}
else if (color === "yellow"){
 console.log("Wait");
}

else console.log("Not a valid entry");
}