const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    arrlen = array.length;
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (var i = 0; i < arrlen - 1; i++) {
            if (numbers[i] > numbers[i + 1]) {
                let hold = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = hold
                isSorted = false;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);