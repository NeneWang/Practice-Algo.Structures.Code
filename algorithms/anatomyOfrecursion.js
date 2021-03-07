let counter = 0;
function inception() {
    counter++;
    if (counter > 3) {
        return `Finished with counter: ${counter}`;
    }
    console.log(` Count: ${counter}`);
    return inception();
}

inception();



const factorial = (n) => (n <= 1) ? n : (n * factorial(n - 1));
factorial(5);

var a = 1,b = 0, counter = 0;

var fiboSecuence = [0,1]

function fibonacciArr(n){
    let sequenceLen = fiboSecuence.length;
    let c = fiboSecuence[sequenceLen-1] + fiboSecuence[sequenceLen-2];
    fiboSecuence.push(c);
    // console.log(c);
    if(c >= n){
        //I mean it works as long that you not asking the 0 and 1s though
        return sequenceLen;
    }
    return fibonacciArr(n);
}

fibonacciArr(144);



function FibonacciBasic(n) {
    let c = a+b;
    if(c >= n){
        return counter
    }
    counter++;
    a = b;
    b = c;
    return Fibonacci(n); 

}

Fibonacci(3)