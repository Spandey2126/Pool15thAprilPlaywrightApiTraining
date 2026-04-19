function Animal(){

let animal = document.getElementById("animal").value;
animal=animal.toLowerCase();

switch(animal){

    case "dog":
        console.log("Woof");
        break;

    case "cat":
        console.log("Meow");
        break;
    
    case "cow":
        console.log("Moo");
        break;


    default:
        console.log("Invalid choice");
}
};