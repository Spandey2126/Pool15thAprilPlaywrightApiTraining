function Calculator(){

let color = document.getElementById("color").value;
color=color.toLowerCase();



switch(color){

    case "red":
           console.log("Stop");
        break;
    
    case "green":
           console.log("Go");
        break;
    case "yellow":
           console.log("pause");
        break;

    default:
        console.log("not a valid entry");
}
};