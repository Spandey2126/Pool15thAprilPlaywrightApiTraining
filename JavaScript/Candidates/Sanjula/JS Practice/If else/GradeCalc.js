
function CheckGrade (){
var a = Number(document.getElementById("GetGrade").value);
var message;

if (a >= 90){
        console.log("Your grade is A");
        message = "Your grade is A";
}

else if (a >= 80){
        console.log("Your grade is B");
        message = "Your grade is B";
}

else if (a >= 70){
        console.log("Your grade is C");
        message = "Your grade is C";
}

else if (a >= 60){
        console.log("Your grade is D");
        message = "Your grade is D";
}

else {
        console.log("Your grade is F");
        message = "Your grade is F";
}

document.getElementById("result").textContent=message;

};