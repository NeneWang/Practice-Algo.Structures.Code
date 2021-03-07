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



function fibonacciArr(n, fiboSequence = [0,1]){
    let sequenceLen = fiboSequence.length;
    let c = fiboSequence[sequenceLen-1] + fiboSequence[sequenceLen-2];
    fiboSequence.push(c);
    if(c >= n){
        //I mean it works as long that you not asking the 0 and 1s though
        return sequenceLen;
    }
    return fibonacciArr(n, fiboSequence);
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