function twoNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const sum = array[left] + array[right];
        if (sum == targetSum) {
            return [array[left], array[right]];
        } else if (sum < targetSum) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let countSequence = 0;

    for (const value of array) {
        if (value == sequence[countSequence]) {
            countSequence++;
        }
    }

    if (countSequence == sequence.length) {
        return true;
    } else {
        return false;
    }
}