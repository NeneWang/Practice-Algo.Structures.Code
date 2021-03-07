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

var a = 1, b = 0, counter = 0;



function fibonacciArr(n, fiboSequence = [0, 1]) {
    let sequenceLen = fiboSequence.length;
    let c = fiboSequence[sequenceLen - 1] + fiboSequence[sequenceLen - 2];
    fiboSequence.push(c);

    return n < 2 ? n : (c >= n) ? sequenceLen : fibonacciArr(n, fiboSequence);
}
fibonacciArr(144);



function FibonacciBasic(n) {
    let c = a + b;
    if (c >= n) {
        return counter
    }
    counter++;
    a = b;
    b = c;
    return Fibonacci(n);

}

Fibonacci(3)

function FibonnacciReturnUsingRecursion(n) {
    if (n < 2) {
        return n;
    }
    return FibonnacciReturnUsingRecursion(n - 1) + FibonnacciReturnUsingRecursion(n + 1);
}

FibonnacciReturnUsingRecursion(43);


//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
    strlen = str.length;
    return (strlen <= 1) ? str : str[strlen - 1] + reverseString(str.slice(0, strlen - 1));
}

function reverseStringLikeATree(str) {
    strlen = str.length;
    console.log(`Size: ${strlen}`);
    if (strlen <= 2) {
        let firstHalf = (str.slice(0, strlen / 2));
        let lastHalf = (str.slice(strlen / 2, strlen));
        return lastHalf + firstHalf;
    }
    //console.log(`${str.slice(strlen / 2, strlen)} ->  ${str.slice(0, strlen / 2)}`);
    let firstHalf = (str.slice(0, strlen / 2));
    let lastHalf = (str.slice(strlen / 2, strlen));
    console.log(firstHalf)
    console.log(lastHalf)
    return lastHalf + firstHalf;
}


reverseStringLikeATree('yoyo mastery');
  //should return: 'yretsam oyoy'