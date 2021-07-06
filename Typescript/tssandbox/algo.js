"use strict";
exports.__esModule = true;
exports.isValidSubsequence = exports.twoNumberSum = void 0;
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
exports.twoNumberSum = twoNumberSum;
function isValidSubsequence(array, sequence) {
    // Write your code here.
    if (array.length == 0) {
        return true;
    }
    if (array.includes(sequence[0])) {
        // Then slice the array and the last sequence
        var indexOfCurrentSequence = array.indexOf(sequence[0]);
        return isValidSubsequence(array.slice(indexOfCurrentSequence), sequence.slice(1));
    }
    return false;
}
exports.isValidSubsequence = isValidSubsequence;
