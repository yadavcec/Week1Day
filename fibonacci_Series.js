"use strict";
function fibonacci(fibno) {
    if (fibno < 0) {
        throw new Error(`The Given number is: ${fibno} is negative number`);
    }
    let a = 0;
    let b = 1;
    let next;
    console.log(`finbonacci series upto: ${fibno}`);
    for (let i = 0; i <= fibno; i++) {
        console.log(`the fibonacci series: ${a}`);
        next = a + b;
        a = b;
        b = next;
    }
}
fibonacci(5);
