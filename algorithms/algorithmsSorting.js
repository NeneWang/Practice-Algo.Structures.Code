var numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

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



function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = getMinBetween(array, i);
        console.log(`min index is: ${indexMin}`);
        // Gets the low
        let hold = array[i];
        array[i] = array[indexMin];
        array[indexMin] = hold
    }
}

function getMinBetween(array, rangeMin) {
    min = array[rangeMin];
    indexMin = rangeMin;
    for (let i = rangeMin; i < array.length; i++) {
        if (array[indexMin] > array[i]) {
            indexMin = i;
        }
    }
    return indexMin;
}


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
getMinBetween(numbers, 0 );
selectionSort(numbers);

console.log(numbers);