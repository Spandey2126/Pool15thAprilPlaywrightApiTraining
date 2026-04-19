function Menu(){

let num = Number(document.getElementById("num").value);

switch(num){

    case 1:
        console.log(" 1 = Pizza");
        break;

    case 2:
        console.log("2 = Burger");
        break;
    
    case 3:
        console.log("3 = Salad");
        break;


    default:
        console.log("Invalid choice");
}
};