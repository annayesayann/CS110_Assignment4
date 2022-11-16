function factorialcount(n){
    let factorial = 1;
    for(let i = 1; i <= n; i++){
        factorial *= i;
    }
    return factorial;
}
function factorialPrint(n){
    console.log("The factorial of " + n + " is " + factorialcount(n) + "!");
}

function gcdCount(num1, num2){
    while((num1 % num2) > 0){
        let rem = num1 % num2;
        num1 = num2;
        num2 = rem;
    }
    return num2;
}
function gcdPrint(num1, num2){
    console.log("The gcd of " + num1 + " and " + num2 + " is " + gcdCount(num1, num2) + "!");
}

function lcmCount(num1, num2){
    let lcm = (num1 * num2)/gcdCount(num1, num2);
    return lcm;
}
function lcmPrint(num1, num2){
    console.log("The lcm of " + num1 + " and " + num2 + " is " + lcmCount(num1, num2) + "!");
}

function hexa(num){
    let hexa = "";
    let result = "";
    let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
    while(num > 0){
        if(num % 16 < 10){
            hexa += num % 16;
        }
        else{
            let i = (num % 16) % 10;
            hexa += arr[i];
        }
        num = Math.floor(num / 16);
    }
    let index = hexa.length - 1;
    while(index >= 0){
        result += hexa[index];
        index--;
    }
    return result;
}
function hexaPrint(num){
    console.log("The hexadecimal form of " + num + " is " + hexa(num) + "!");
}
module.exports = {
    factorialcount,
    factorialPrint,
    gcdCount,
    gcdPrint,
    lcmCount,
    lcmPrint,
    hexa,
    hexaPrint
}