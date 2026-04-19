function Currency(){

let curr = document.getElementById("curr").value;

switch(curr){

    case "USD":
        console.log("USD is United States Dollar");
        break;

    case "EUR":
        console.log("EUR is European Dollar");
        break;
    
    case "GBP":
        console.log("British Pound");
        break;


    default:
        console.log("Invalid choice");
}
};