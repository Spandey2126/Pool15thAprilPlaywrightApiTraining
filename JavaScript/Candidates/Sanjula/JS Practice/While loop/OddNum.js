

    let i=1;
    let mul = "";



while(i<= 20){ 

    if (i%2 !== 0){
        console.log(i);
        mul +=`${i}<br>`
    }
i++;
}

document.getElementById("result").innerHTML=mul;

