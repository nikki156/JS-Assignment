let num1 = parseInt(prompt("Enter the first number : "));
let num2 = parseInt(prompt("Enter the second number : "));

let operator=prompt("Enter which operation you want to perform for + press 1, - : 2 ,*:3, / : 4, percentage:5, square root:6");
switch(operator){
    case '1':
        let sum = num1 + num2; 
        console.log("Addition:" +sum);
        break;
    case '2':
        let sub = num1 - num2;
        console.log("Subtraction : "+ sub);
        break;
    case '3' :
       let mul = num1 * num2;
        console.log("Multiplication : "+mul);
        break;
    case '4' : 
        let div = num1 / num2;
        console.log("Division : "+div);
        break;
    case '5' :
        let per = num1/100 * num2;
        console.log("Percentage : "+per);
    case '6':
            let d=Math.sqrt(num1);
            console.log("Square root is:"+d);
            break;
    default :
        console.log("Enter a valid operator");
        break;
}
