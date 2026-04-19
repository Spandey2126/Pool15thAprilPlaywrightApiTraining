function CheckNum(){

    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var message;


    console.log(num1);
    console.log(num2);

    if (num1 > num2){
        console.log(num1+" is greater than "+num2);
        message = num1+" is greater than "+num2;
        
    }

    else if (num1 < num2){
        console.log(num2+" is greater than "+num1);
        message = num2+" is greater than "+num1;
    }

    else if (num1 === num2){
        console.log("Both numbers are same")
        message = "Both numbers are same ";
    }

    document.getElementById("result").textContent= message;


};