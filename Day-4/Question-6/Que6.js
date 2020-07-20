/*let input = parseInt(prompt("Enter a Number: "));
function askNum(){
    
    return (isNaN(input) || input <= 100) ? askNum() : console.log(`Number Entered: ${input}, is greater than 100.`);
    }
    document.querySelector(".six").addEventListener("click", askNum);*/
    

  
    function checkNumber(a){
        return(a>100) ? a: prompt("Enter a number greater than 100");
    }
    let b = prompt("enter a number:");
    let c = checkNumber(b);
    console.log(c);