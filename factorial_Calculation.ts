
function factorial (factNo: number):any{
    
    if(factNo<0){
        throw new Error(`The given number is negative: ${factNo}`);
    }

    if(factNo === 0 || factNo === 1) {
        //return 1
        console.log(`Given number is : ${factNo}, and its factorial number will be 1`)
    }

    let i:number
    let factnumber : number = 1
    for(i=2; i<=factNo; i++) {
        factnumber *= i 
    }
   console.log(`value of given factorial number is ${factnumber}`)
}

factorial(5)
factorial(0)
factorial(1)
factorial(-5)
factorial(25)