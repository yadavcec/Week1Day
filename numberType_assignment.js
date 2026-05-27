
function numberType(number){

    if(number > 0){
        console.log("It's a positive number: " + number.valueOf())
    }else if(number < 0){
        console.log("It's a negative number: " + number.valueOf())
    }else {
        console.log("It's a Zero: " + number.valueOf())
    }
}

let value = 3
numberType(value)
