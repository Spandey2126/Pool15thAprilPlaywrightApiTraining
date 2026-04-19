let i = 1;
let sum = 0;

while (i<=100){

if (sum + i> 50){
                console.log("The sum < 50 is" + sum);
    console.log("The last num added is" + i); 
        break;
 
    }
     sum += i;
    i++;

};