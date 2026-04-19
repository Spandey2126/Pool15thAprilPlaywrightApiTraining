function Calculator(){

let num = Number(document.getElementById("num").value);

switch(num){

    case 1:
    case 2:
    case 3:
        console.log("Fall");
        break;

    case 4:
    case 5:
    case 6:
        console.log("summer");
        break;
    
    case 7:
    case 8:
    case 9:
        console.log("Autumn");
        break;

    case 10:
    case 11:
    case 12:
        console.log("Winter");
        break;

    default:
        console.log("not a valid season");
}
};