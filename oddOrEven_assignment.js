
function isOddOrEven(number){

    // It check whether the entered value is Number or not.
    if(isNaN(number)){
        console.log("Its not a number, Enter valid number and try again.")
    }else if(number % 2 === 0){
        console.log("Its a Even number")
    } else {
        console.log("Its a Odd number")
    }
}

let value = 8
isOddOrEven(value)
