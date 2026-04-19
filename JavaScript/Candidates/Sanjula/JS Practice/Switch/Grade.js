function Calculator(){

let num1 = Number(document.getElementById("num1").value);


switch(true){

    case (num1 > 90):
           console.log("Grade is A");
        break;
    
    case (num1 > 80):
           console.log("Grade is B");
        break;

    case (num1 > 70):
           console.log("Grade is C");
        break;

    case (num1 > 60):
           console.log("Grade is D");
        break;

    case (num1 <= 60):
           console.log("Grade is E");
        break;


    default:
        console.log("Not a valid operator");
}
};