
function fibonacci (fibno: number){

    if(fibno < 0){
        throw new Error(`The Given number is: ${fibno} is negative number`)
    }

    let a: number = 0
    let b: number = 1
    let next: number
    console.log(`finbonacci series upto: ${fibno}`)
    
    for(let i=0; i<=fibno; i++){
        console.log(`the fibonacci series: ${a}`)
        next = a+b
        a = b
        b = next
    }
}

fibonacci(5)