// coins = [5, 7, 1, 1, 2, 3, 22]

// console.log(nonConstructibleChange(coins));

function nonConstructibleChange(coins) {
    // Write your code here.
    var currentChange = 0;
    coins.sort((a, b) => a - b)
    coins.forEach(coin => {
        // console.log(coin);

        if (coin > currentChange + 1) {
            return currentChange + 1
        }
        currentChange += coin;
    })
    return currentChange + 1;
}

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
        // My guess that this line of code makes the closest to this, if it is indeed closer than the one before
    }
    // Then you have to traverse the code in order to have the tree traversal
    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest;
    }
}
// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Branch sums

function branchSums(root) {
    // Write your code here.
    sums = [];
    branchSumRecursive(root, 0, sums);
    return sums;
}


function branchSumRecursive(node, currentSum, sums) {
    if (!node) return;
    const newCurrentSum = currentSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newCurrentSum);
        return;
    }

    branchSumRecursive(node.left, newCurrentSum, sums);
    branchSumRecursive(node.right, newCurrentSum, sums);
}

function nodeDepths(root, depth = 0) {
    // Write your code here.
    if (root === null) return 0;
    return depth + nodeDepths(root.right, depth + 1) + nodeDepths(root.left, depth + 1);
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode !== null) {
        let nextNode = currentNode.next;
        while (nextNode !== null && nextNode.value === currentNode.value) {
            nextNode = nextNode.next;
        }
        currentNode.next = nextNode;
        currentNode = nextNode;
    }
    return linkedList;
}

function getNthFib(n) {
    const lastTwo = [0, 1]
    let counter = 3;
    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}

function productSum(array, multiplier = 1) {
    // Write your code here.
    let sum = 0;
    for (const element of array) {
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1);
        } else {
            sum += element;
        }
    }
    return sum * multiplier;
}


function binarySearch(array, target) {
    // Write your code here.
    return binarySearchHelper(array, target, 0, array.length - 1);

}

function binarySearchHelper(array, target, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
        return middle;
    } else if (target < potentialMatch) {
        return binarySearchHelper(array, target, left, middle - 1);
    } else if (target > potentialMatch) {
        return binarySearchHelper(array, target, middle + 1, right);
    }
}


function findThreeLargestNumbers(array) {
    const threeLargest = [null, null, null];

    for (const num of array) {
        updatedLargest(threeLargest, num);
    }
    return threeLargest;
}

function updatedLargest(threeLargest, num) {
    if (threeLargest[2] === null || num > threeLargest[2]) {
        shiftAndUpdate(threeLargest, num, 2);
    } else if (threeLargest[1] === null || num > threeLargest[1]) {
        shiftAndUpdate(threeLargest, num, 1);
    } else if (threeLargest[0] === null || num > threeLargest[0]) {
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


function bubbleSort(array) {
    // Write your code here.\
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        counter++
    }
    return array;

}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {

            swap(j, j - 1, array);
            j -= 1
        }
    }
    return array;
}

function selectionSort(array) {
    let startedIdx = 0;
    while (startedIdx < array.length - 1) {
        let smallestIdx = startedIdx;
        for (let i = startedIdx; i < array.length; i++) {
            if (array[i] < array[smallestIdx]) smallestIdx = i;
        }
        swap(startedIdx, smallestIdx, array)
        startedIdx++
    }
    return array;
}

function isPalindrome(string) {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse === string;
}

function runLengthEncoding(string) {
    // Write your code here.
    let runningLength = 1;
    let encodedCharacters = [];

    for (let i = 1; i < string.length; i++) {
        const currentLetter = string[i];
        const previousLetter = string[i - 1];

        if (currentLetter != previousLetter || runningLength >= 9) {
            encodedCharacters.push(runningLength.toString());
            encodedCharacters.push(previousLetter);
            runningLength = 0;
        }

        runningLength++;

    }

    encodedCharacters.push(runningLength.toString());
    encodedCharacters.push(string[string.length - 1]);
    return encodedCharacters.join('');

}

function generateDocument(characters, document) {

    characterCounts = {};

    for (character of characters) {
        if (!(character in characters)) characterCounts[character] = 0;
        characterCounts[character]++;
    }

    for (character of document) {
        if (!(character in characterCounts) || characterCounts[character] == 0) {
            return false;
        }
        characterCounts[character]--;
    }


    return true;
}

function firstNonRepeatingCharacter(string) {
    characterCounts = {};

    for (character of string) {
        if (!(character in characterCounts)) characterCounts[character] = 0;
        characterCounts[character]++;
    }

    for (let idx = 0; idx < string.length; idx++) {
        if (characterCounts[string[idx]] == 0) return idx;
    }

    return -1;
}

function threeNumberSum(array, targetSum) {

    array.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currentSum < targetSum) {
                left++;
            } else if (currentSum > targetSum) {
                right--;
            }
        }

    }

    return triplets;

}


function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let idxOne = 0;
    let idxTwo = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];

    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let firstNum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];

        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            idxOne++;
        } else if (firstNum > secondNum) {
            current = firstNum - secondNum;
            idxTwo++;
        } else {
            return [firstNum, secondNum];
        }

        if (smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secondNum];
        }
    }
    return smallestPair;
}

function moveElementToEnd(array, toMove) {
    // Write your code here.
    let idx1 = 0;
    let idxEnd = array.length - 1;

    while (idx1 < idxEnd) {
        while (idx1 < idxEnd && array[idxEnd] == toMove) {
            idxEnd--;
        }
        // If the array element is the to move then swap the elemnts and make the idx end -1
        if (array[idx1] == toMove) {
            swap(idx1, idxEnd, array);
        }
        idx1++;
    }

    return array;
}



function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}



function isMonotonic(array) {

    // If the length oth the array is minus two then tere doesn't make sense to ave the direction
    if (array.length <= 2) return true;

    // Get the direction based on what's next
    let direction = array[1] - array[0];
    for (let i = 2; i < array.length; i++) {

        // If the direction is 0 then have this one menus the previous which should ge thte direction? 
        // In other words if this and the next one have the same fucking direction
        if (direction === 0) {
            direction = array[i] - array[i - 1];
            continue;
        }
        // If the direction breaks then returns false; Doing array i-1 and te now
        if (breaksDirection(direction, array[i - 1], array[i])) {
            return false;
        }
    }
    return true;
}


function breaksDirection(direction, previousInt, currentInt) {
    const difference = currentInt - previousInt;
    if (direction > 0) return difference < 0;
    return difference > 0;
}


function spiralTraverse(array) {
    const result = [];
    spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);
    return result;
}

function spiralFill(array, startRow, endRow, startCol, endCol, result) {

    if (startRow > endRow || startCol > endCol) return;

    for (let i = startCol; i <= endCol; i++) {
        result.push(array[startRow][i]);
    }

    for (let i = startRow + 1; i <= endRow; i++) {
        result.push(array[i][endCol]);
    }

    for (let i = endCol - 1; i >= startRow; i--) {
        if (startRow === endRow) break;
        result.push(array[endRow][i]);
    }

    for (let i = endRow - 1; i >= startRow + 1; i--) {
        if (startCol === endCol) break;
        result.push(array[i][startCol]);
    }


    spiralFill(array, startRow + 1, endRow - 1, startRow + 1, endCol - 1, result);
}



function longestPeak(array) {
    // Write your code here.
    let i = 1;
    let longestPeak = 0;

    while (i < array.length - 1) {
        let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1]

        if (!isPeak) {
            i++;
            continue;
        }

        let rightIdx = i + 2;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            rightIdx++;
        }

        let leftIdx = i - 2;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            leftIdx--;
        }

        let currentPeakLength = rightIdx - leftIdx - 1;
        longestPeak = Math.max(currentPeakLength, longestPeak);
        i = rightIdx;

    }
    return longestPeak;
}

function arrayOfProducts(array) {

    const multiplicationAll = array.reduce((a, b) => a + b);
    console.log(multiplicationAll);

    const arrayToReturn = [];
    array.forEach(element => {
        arrayToReturn.push(multiplicationAll / all);
    })
    return arrayToReturn;
}


function firstDuplicateValue(array) {
    // Write your code here.
    for (let i = 0; i < array.length; i++) {
        const absValue = Math.abs(array[i]);
        if (array[absValue - 1] < 0) return absValue;
        array[absValue - 1] *= -1;
    }

    return -1;
}


function mergeOverlappingIntervals(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currentInterval = sortedIntervals[0];
    mergedIntervals.push(currentInterval);

    for (const nextInterval of sortedIntervals) {
        const [_, currentIntervalEnd] = currentInterval;
        const [nextIntervalStart, nextIntervalEnd] = nextInterval;

        if (currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
        else {
            currentInterval = nextInterval;
            mergedIntervals.push(currentInterval);
        }

    }
    return mergedIntervals;
}


class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }

        return this;
    }

    contains(value) {
        if (value < this.value) {
            if (this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else if (value > this.value) {
            if (this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        } else {
            return true;
        }
    }

    remove(value, parent = null) {
        // Write your code here.
        // Do not edit the return statement of this method.
        if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this);
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this);
            }
        } else {
            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue();
                this.right.remove(this.value, this);
            } else if (parent === null) {
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                } else {

                }
            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right;
            } else if (parent.right === this) {
                parent.right = this.left !== null ? this.left : this.right;
            }

        }
        return this;
    }

    getMinValue() {
        if (this.left == null) {
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }
}