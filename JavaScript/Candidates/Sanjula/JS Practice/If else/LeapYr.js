
function checkLeapYear() {
var a = Number(document.getElementById("yearInput").value);
var message;

if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 ===0) ){
        console.log("Your year is a Leap year");
        message = "Your year is a Leap year";
}

else{
    console.log("Your year is a Not a Leap year");
message = "Your year is not a Leap year";
}

document.getElementById("result").textContent=message;
};