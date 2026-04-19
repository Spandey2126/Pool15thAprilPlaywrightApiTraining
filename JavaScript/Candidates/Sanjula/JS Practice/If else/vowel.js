function CheckVowel(){

var a = document.getElementById("alph").value;
var message;

console.log(a);

if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u'){
    console.log("vowel");
    message = "Vowel";
}

else {
    console.log("Not a vowel");
    message = "Not a Vowel";
}

document.getElementById("result").textContent=message;

};