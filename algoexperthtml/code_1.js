competition = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],

]
// competition = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"],

// ]

competition = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
]

results = [0, 1, 1]

console.log(tournamentWinner(competition, results));


function tournamentWinner(competitions, results) {

    const scores = {
        '': 0
    };
    const length = results.length;
    for (i = 0; i < length; i++) {
        const competition = competitions[i];
        const [homeTeam, awayTeam] = competition;

        addIfExists(scores, results[i] == 1 ? homeTeam : awayTeam);
    };

    const getMax = (a, b) => {
        return Math.max(a, b);
    };
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value)
    }
    return getKeyByValue(scores, Object.values(scores).reduce(getMax, -Infinity));
}

function addIfExists(score, winningTeam) {
    if (score[winningTeam] != null) {
        score[winningTeam] += 1;
    } else {
        score[winningTeam] = 1;
    }
    return score;
}


function branchSums(root) {
    // Write your code here.
    const sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}

function calculateBranchSums(node, runningSum, sums) {
    if (!node) return;
    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }

    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);

}

// RETURN Closest 

function findClosestValueInBst(tree, target) {
    // Write your code here.
    return recursiveValue(tree, target, tree.value);
}

function recursiveValue(node, target, currentClosest) {

    if (node === null) {
        return currentClosest;
    }
    if (Math.abs(node.value - target) < Math.abs(node.value - currentClosest)) {
        currentClosest = node.value;
    }

    if (target > node.value) {
        return recursiveValue(node.right, target, currentClosest);
    } else if (target < node.value) {
        return recursiveValue(node.left, target, currentClosest);
    } else {
        return currentClosest;

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



function nodeDepths(root) {
    // Write your code here.
    let sumOfDepths = 0;
    const stack = [{
        node: root,
        depth: 0
    }]; //This should start some sort of structure, for the sakc. y question is hos is it built aside of habing the node as root?
    while (stack.length > 0) {
        const {
            node,
            depth
        } = stack.pop(); // Should 
        if (node === null) continue;
        sumOfDepths += depth;
        stack.push({
            node: node.left,
            depth: depth + 1
        }); //First left then right, and then  uyou also add the depth for each step, my question is that the depth + 1
        stack.push({
            node: node.right,
            depth: depth + 1
        });
    }

    return sumOfDepths;

}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        // Write your code here.
        array.push(this.name);
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;



    }
}

// minimumWaitingTime([3, 2, 1, 2, 6])

function minimumWaitingTime(queries) {
    // Write your code here.
    // console.log(queries);
    queries.sort((a, b) => a - b);
    // console.log(queries);
    totalTime = 0;
    const queryLen = queries.length;
    for (let i = 0; i < queryLen - 1; i++) {
        totalTime += (queryLen - i - 1) * queries[i];
    }
    console.log(totalTime);

}


// function classPhotos(redShirtHeights, blueShirtHeights) {
//     // Write your code here.
//     redShirtHeights.sort((a, b) => b - a);
//     blueShirtHeights.sort((a, b) => b - a);

//     const shirtColorInFirstRowRed = redShirtHeights[0] < blueShirtHeights[0] ? true : false;
//     for (let idx = 0; idx < redShirtHeights.length; idx++) {
//         const redShirtHeight = redShirtHeights[idx];
//         const blueShirtHeight = blueShirtHeights[idx];

//         if (shirtColorInFirstRowRed) {
//             if (redShirtHeight >= blueShirtHeight) return false;
//         } else if (blueShirtHeight >= redShirtHeight) return false;

//     }
//     return true;
// }

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    const isRedFirst = redShirtHeights[0] < blueShirtHeights[0] ? true : false;
    for (let i = 0; i < redShirtHeights.length; i++) {
        const redShirtHeight = redShirtHeights[i];
        const blueShirtHeight = blueShirtHeights[i];

        if (isRedFirst) {
            if (redShirtHeight >= blueShirtHeight) return false;
        } else if (blueShirtHeight >= redShirtHeight) return false;

    }

    return true;
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false));

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // If it is fastest pair the faster with slower 
    redShirtSpeeds.sort((a, b) => b - a);
    blueShirtSpeeds.sort((a, b) => b - a);
    const size = redShirtSpeeds.length;
    let speedsSum = 0,
        pairSpeed = 0;
    console.log(redShirtSpeeds);
    console.log(blueShirtSpeeds);
    for (let i = 0; i < size; i++) {
        if (fastest) {
            pairSpeed = Math.max(redShirtSpeeds[i], blueShirtSpeeds[size - i - 1]);
        } else {
            pairSpeed = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
        }
        speedsSum += pairSpeed;
    }

    return speedsSum;
}


// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let currentNode = linkedList;
    while (currentNode !== null) {
        let nextDistictNode = currentNode.next;
        while (nextDistictNode !== null && nextDistictNode.value === currentNode.value) {
            nextDistictNode = nextDistictNode.next;
        }
        currentNode.next = nextDistictNode;
        currentNode = nextDistictNode;
    }

    return linkedList;
}


function getNthFib(n) {
    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    } else {
        return getNthFib(n - 1) + getNthFib(n - 2)
    }
}

function getNthFibMemoize(n, memoize = {
    1: 0,
    2: 1
}) {
    if (n in memoize) {
        return memoize[n];
    } else {
        return getNthFibMemoize(n - 1, memoize) + getNthFibMemoize(n - 2, memoize);
    }
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
        updateLargest(threeLargest, num);
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

        counter++;
    }
    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

function selectionSort(array) {
    let startedIdx = 0;
    while (startedIdx < array.length - 1) {
        let smallestIdx = startedIdx;
        for (let i = startedIdx + 1; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) smallestIdx = i;
        }
        swap(startedIdx, smallestIdx, array);
        startedIdx++;
    }
    return array;
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            swap(j, j - 1, array);
            j -= 1;
        }
    }
    return array;
}

function isPalindrome(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return string === reversedString;
}

function caesarCipherEncryptor(string, key) {
    const newLetters = [];
    const newKey = key % 26; //newKey. This is the key that cant be larger than 26 and well it cycles throught it.
    for (const letter of string) {
        newLetters.push(getNewLetter(letter, newKey));
    }
    return newLetters.join('');
}


function getNewLetter(letter, key) {
    const newLetterCode = letter.charCodeAt() + key;
    return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122)); //Wait why? the 96?
}

function getNewLetter2(letter, key) {
    const newLetterCode = letter.charCodeAt() + key;

    return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + newLetterCode % 122);
}

function getNewLetter2(letter, key) {
    const newLetterKey = letter.charCodeAt() + key;
    return newLetterKey <= 122 ? String.fromCharCode(newLetterKey) : String.fromCharCode(96 + newLetterKey % 122);
}

function runLengthEncoding(string) {

    const encodedStringCharacters = [];
    let currentRunLength = 1;

    for (let i = 1; i < string.length; i++) {

        const currentCharacter = string[i];
        const previousCharacter = string[i - 1];

        if (currentCharacter !== previousCharacter || currentRunLength === 9) {
            encodedStringCharacters.push(currentRunLength.toString());
            encodedStringCharacters.push(previousCharacter);
            currentRunLength = 0;
        }

        currentRunLength++;
    }

    encodedStringCharacters.push(currentRunLength.toString());
    encodedStringCharacters.push(string[string.length - 1]);
    return encodedStringCharacters.join('');



}


function generateDocument(characters, document) {
    const characterCounts = {};


    // First you count each characters if they dont exist you initate the collection
    for (const character of characters) {
        if (!(character in characterCounts)) characterCounts[character] = 0;
        characterCounts[character]++;
    }

    // Then you iterate throught the documents and check if the character exists

    for (const character of document) {
        if (!(character in characterCounts) || characterCounts[character] == 0) {
            return false;

        }
        characterCounts[character]--;
    }

    return true;
}

function firstNonRepeatingCharacter(string) {
    const characterFrequencies = {};

    // Counts all that exists
    for (const character of string) {
        if (!(character in characterFrequencies)) characterFrequencies[character] = 0;
        characterFrequencies[character]++;
    }


    for (let idx = 0; idx < string.length; idx++) {
        if (characterFrequencies[string[idx]] == 1) return idx;
    }

    return -1;


}


function threeNumberSum(array, targetSum) {
    const triplets = [];
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            sum = array[i] + array[left] + array[right];
            if (sum == targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (sum > targetSum) {
                right--;
            } else if (sum < targetSum) {
                left++;
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
        } else if (secondNum < firstNum) {
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
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        while (i < j && array[j] == toMove) j--;
        if (array[i] === toMove) swap(i, j, array);
        i++;
    }
    return array;

}


function isMonotonic(array) {
    if (array.length <= 2) return true;
    let direction = array[1] - array[0];
    for (let i = 2; i < array.length; i++) {
        if (direction === 0) {
            direction = array[i] - array[i - 1];
            continue;
        }
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
    // Write your code here.
    const result = [];
    let startRow = 0,
        endRow = array.length - 1;
    let startCol = 0,
        endCol = array[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }

        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }

        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break;
            result.push(array[endRow][col]);
        }

        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break;
            result.push(array[row][startCol]);
        }

        startRow++;
        endRow--;
        startCol++;
        endCol--;

    }
    return result;
}


function longestPeak(array) {
    let longestPeakLength = 0;
    let i = 1;

    while (i < array.length - 1) {
        const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
        if (!isPeak) {
            i++;
            continue;
        }

        let leftIdx = i - 2;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            leftIdx--;
        }

        let rightIdx = i + 2;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            rightIdx++;
        }

        const currentLongest = rightIdx - leftIdx - 1;
        longestPeakLength = Math.max(currentLongest, longestPeakLength);
        i = rightIdx;

    }

    return longestPeakLength;

}


function arrayOfProducts(array) {
    const products = [];

    for (let i = 0; i < array.length; i++) {
        let runningProduct = 1;
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                runningProduct *= array[j];
            }
            products[i] = runningProduct;
        }
    }
    return products;
}


function firstDuplicateValue(array) {
    for (const value of array) {
        const absValue = Math.abs(value);
        if (array[absValue - 1] < 0) return absValue;
        array[absValue - 1] *= -1;

    }
    return -1;
}

function mergeOverlappingIntervals(intervals) {
    // First the intervals are sorted based on their first inex
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    // Creates the merged intervals
    const mergedIntervals = [];

    // current Interval = the first sorted interval 
    let currentInterval = sortedIntervals[0];

    // push that 
    mergedIntervals.push(currentInterval);


    for (const nextInterval of sortedIntervals) {

        // The _ and the current Interval End equals current Interval
        const [_, currentIntervalEnd] = currentInterval;

        // Next interval starts and end using the then next Interval
        const [nextIntervalStart, nextIntervalEnd] = nextInterval;

        // Get the item where the current interval end is larger than the start then the current interval (end) would be then the max between the current interval and the next interval end 
        if (currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
        else {

            // If the current interval = nextinterval
            currentInterval = nextInterval;
            // then the currentInterval is pushed inot the mergedIntervals
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
}


// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
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
        // Write your code here.
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
            return (true);
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

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    // Write your code here.
    return validateBstHelper(tree, -Infinity, Infinity);
}


function validateBstHelper(tree, minValue, maxValue) {

    if (tree === null) return true;
    if (tree.value < minValue || tree.value >= maxValue) return false;
    const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
    return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);


}


function inOrderTraverse(tree, array) {
    // Write your code here.
    if (tree !== null) {
        inOrderTraverse(tree.left, array);
        array.push(tree.value);
        inOrderTraverse(tree.right, array);
    }
    return array;

}

function preOrderTraverse(tree, array) {
    // Write your code here.
    if (tree !== null) {
        array.push(tree.value);
        preOrderTraverse(tree.left, array);
        preOrderTraverse(tree.right, array);

    }
    return array;
}

function postOrderTraverse(tree, array) {
    // Write your code here.
    if (tree !== null) {
        postOrderTraverse(tree.left, array);
        postOrderTraverse(tree.right, array);
        array.push(tree.value);
    }
    return array;
}


// --------------------------------------------------- MIN HEIGHT BST -------------------------------------------------------------------

function minHeightBst(array) {
    // Write your code here.
    return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
    // If the end is smaller than the start then return because it is already constrcuted
    if (endIdx < startIdx) return;

    // using the mid index as the flooor of the middle
    const midIdx = Math.floor((startIdx + endIdx) / 2);

    // Value to add aas theone in the middle
    const valueToAdd = array[midIdx];

    // If the bst == null then the bst then create one, otherwise kist omsert tje ,odd;e omdex/ 
    if (bst === null) {
        bst = new BST(valueToAdd);
    } else {
        bst.insert(valueToAdd);
    }

    constructMinHeightBst(array, bst, startIdx, midIdx - 1);
    constructMinHeightBst(array, bst, midIdx + 1, endIdx);
    return bst;
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
    }
}

function findKthLargestValueInBst(tree, k) {
    const sortedNodeValues = [];
    inOrderTraverse(tree, sortedNodeValues);
    return sortedNodeValues[sortedNodeValues.length - k];
}

function inOrderTraverse(node, sortedTreeValues) {
    if (node === null) return;
    inOrderTraverse(node.left, sortedTreeValues);
    sortedTreeValues.push(node.value);
    inOrderTraverse(node.right, sortedTreeValues);

}


function reconstructBst(preOrderTraversalValues) {

    if (preOrderTraversalValues.length === 0) return null;

    const currentValue = preOrderTraversalValues[0];
    let rightSubtreeRootIdx = preOrderTraversalValues.length;

    for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
        const value = preOrderTraversalValues[idx];
        if (value >= currentValue) {
            rightSubtreeRootIdx = idx;
            break;
        }
    }
    const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
    const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
    return new BST(currentValue, leftSubtree, rightSubtree);
}


// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    // Write your code here.
    let previousNode = null;
    let currentNode = head;
    while (currentNode !== null) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }

    return previousNode;
}


function invertBinaryTree(tree) {
    // Write your code here.
    const queue = [tree];
    while (queue.length) {
        const current = queue.shift();
        if (current === null) continue;
        swapLeftAndRight(current);
        queue.push(current.left);
        queue.push(current.right);
    }
}

function swapLeftAndRight(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}


// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function binaryTreeDiameter(tree) {
    // Write your code here.
    return getTreeInfo(tree).diameter;
}

class TreeInfo {
    constructor(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
}

function getTreeInfo(tree) {
    if (tree === null) {
        return new TreeInfo(0, 0);
    }

    const leftTreeInfo = getTreeInfo(tree.left);
    const rightTreeInfo = getTreeInfo(tree.right);

    const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
    const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
    const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
    const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

    return new TreeInfo(currentDiameter, currentHeight);
}

// ___________________________________________________________________________________

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(isBalanced, height) {
        this.isBalanced = isBalanced;
        this.height = height;
    }
}

function heightBalancedBinaryTree(tree) {
    const treeInfo = getTreeInfo(tree);
    return treeInfo.isBalanced;
}


function getTreeInfo(node) {
    if (node === null) return new TreeInfo(true, -1);
    const leftSubtreeInfo = getTreeInfo(node.left);
    const rightSubtreeInfo = getTreeInfo(node.right);

    const isBalanced = leftSubtreeInfo.isBalanced && rightSubtreeInfo.isBalanced && Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;
    const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;
    return new TreeInfo(isBalanced, height);

}


function heightBalancedBinaryTree(tree) {
    // Write your code here.
    return false;
}


class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(tree, node) {
    const inOrderTraversalOrder = getInOrderTraversalOrder(tree);

    for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
        const currentNode = inOrderTraversalOrder[idx];
        if (currentNode !== node) continue;

        if (idx === inOrderTraversalOrder.length - 1) return null;

        return inOrderTraversalOrder[idx + 1];
    }
}

function getInOrderTraversalOrder(node, order = []) {
    if (node === null) return order;
    getInOrderTraversalOrder(node.left, order);
    order.push(node);
    getInOrderTraversalOrder(node.right, order);

    return order;
}


function findSuccessor(tree, node) {
    if (node.right !== null) return getLeftMostChild(node.right);
    return getRightMostParent(node);
}


function getLeftMostChild(node) {
    let currentNode = node;
    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }

    return currentNode;
}

function getRightMostParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
        currentNode = currentNode.parent;
    }
    return currentNode.parent;
}

function maxSubsetSumNoAdjacent(array) {
    if (!array.length) return 0;
    if (array.length === 1) return array[0];

    const maxSums = array.slice();
    maxSums[1] = Math.max(array[0], array[1])
    for (let i = 2; i < array.length; i++) {
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    }
    return maxSums[maxSums.length - 1];
}

function numberOfWaysToMakeChange(n, denoms) {
    const ways = new Array(n + 1).fill(0);
    ways[0] = 1;
    for (let denom of denoms) {
        for (let amount = 1; amount < n + 1; amount++) {
            if (denom <= amount) ways[amount] += ways[amount - denom];
        }
    }
    return ways[n];

}

function minNumberOfCoinsForChange(n, denoms) {
    const numOfCoins = new Array(n + 1).fill(Infinity);
    numOfCoins[0] = 0;
    for (const denom of denoms) {
        for (let amount = 0; amount < numOfCoins.length; amount++) {
            if (denom <= amount) {
                numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
            }
        }
    }
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

function levenshteinDistance(str1, str2) {
    const edits = [];
    for (let i = 0; i < str2.length + 1; i++) {
        const row = [];
        for (let j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }

        row[0] = i;
        edits.push(row);
    }

    for (let i = 1; i < str2.length + 1; i++) {
        for (let j = 1; j < str1.length + 1; j++) {
            if (str1[j - 1] == str2[i - 1]) {
                edits[i][j] = edits[i - 1][j - 1];
            } else {
                edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i][j - 1], edits[i - 1][j]);
            }
        }
    }
    return edits[str2.length][str1.length];

}

function numberOfWaysToTraverseGraph(width, height) {
    if (width === 1 || height === 1) return 1;
    return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
}

function kadanesAlgorithm(array) {
    let maxEndingHere = array[0];
    let maxSoFar = array[0];

    for (let i = 1; i < array.length; i++) {
        const num = array[i];
        maxEndingHere = Math.max(num, maxEndingHere + num);
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
    }
    return maxSoFar;
}