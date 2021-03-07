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



const factorial = (n) =>  (n <= 1) ? n : (n * factorial(n - 1));


factorial(5);