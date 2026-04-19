function CheckVal(){

    var a = document.getElementById("username").value;
    var b = Number(document.getElementById("password").value);

    console.log (a);
    console.log(b);

    if (a == 'admin' && b == 1234){
        console.log("Logged in Successfully");
    }
    else 
        console.log("Not a valid username");


}