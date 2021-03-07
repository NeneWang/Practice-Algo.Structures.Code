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



function factorial(n) {
    if (n <= 1) {
        return n;
    }

    return (n * factorial(n - 1));
}

factorial(5);