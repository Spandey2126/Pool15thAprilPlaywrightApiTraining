function Calculator(){

let alph = document.getElementById("alph").value;
alph=alph.toLowerCase();

    if (!/^[a-z]$/.test(alph)) {
        console.log("Please enter a single alphabet only");
        return;
    }


switch(alph){

    case "a":
           console.log(alph + " is vowel");
        break;
    
    case "e":
           console.log(alph + " is vowel");
        break;
    case "i":
           console.log(alph + " is vowel");
        break;
    case "o":
           console.log(alph + " is vowel");
        break;
    case "u":
           console.log(alph + " is vowel");
        break;
    default:
        console.log(alph + " is consonant");
}
};