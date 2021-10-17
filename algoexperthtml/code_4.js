function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;

        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];

}




function findThreeLargestNumbers(array) {
    const highestThree = [null, null, null];
    for (const num of array) {
        updatedLargest(highestThree, num);
    }
    return highestThree;
}

function updatedLargest(threeLargest, num) {

    if (threeLargest[2] === null || threeLargest[2] < num) {
        shiftAndUpdate(threeLargest, num, 2);
    } else if (threeLargest[1] === null || threeLargest[1] < num) {
        shiftAndUpdate(threeLargest, num, 1);
    } else if (threeLargest[0] === null || threeLargest[0] < num) {
        shiftAndUpdate(threeLargest, num, 0);
    }

}

function shiftAndUpdate(array, num, idx) {
    for (let i = 0; i <= idx; i++) {
        if (i == idx) {
            array[i] = num;
        } else {
            array[i] = array[i + 1];
        }
    }
}


function isMonotonic(array) {
    // If less or equal to two elements you would have automatically true return
    if (array.length <= 2) {
        return true;
    }
    direction = array[1] - array[0];
    for (let i = 2; i < array.length; i++) {
        if (direction == 0) {
            direction = array[i] - array[i - 1];
            // Until the direction appears (or the variant elemnt appears)
            continue;
        }

        if (breaksDirection(direction, array[i - 1], array[i])) {
            return false;
        }
    }
    return true;


}

function breaksDirection(direction, previousItem, currentItem) {
    const difference = currentItem - previousItem;
    if (direction > 0) return difference < 0;
    else return difference > 0;
}