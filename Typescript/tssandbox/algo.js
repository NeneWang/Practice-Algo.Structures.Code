function twoNumberSum(array, targetSum) {
    // Write your code here.
    var keys;
    keys = [];
    array.every(function (element) {
        var searchThis = targetSum - element;
        if (searchThis != element && array.includes(searchThis)) {
            keys = [element, searchThis];
            return false;
        }
        return true;
    });
    return keys;
}
function isValidSubsequence(array, sequence) {
    if (sequence.length == 0) {
        return true;
    }
    if (array.includes(sequence[0])) {
        var indexOfCurrentSequence = array.indexOf(sequence[0]);
        return isValidSubsequence(array.slice(indexOfCurrentSequence + 1), sequence.slice(1));
    }
    else {
        return false;
    }
}
