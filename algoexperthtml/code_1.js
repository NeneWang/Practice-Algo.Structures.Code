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

function hasSingleCycle(array) {
    let numElementVisited = 0;
    let currentIdx = 0;
}

function hasSingleCycle(array) {
    let numElementVisited = 0;
    let currentIdx = 0;
    while (numElementVisited < array.length) {
        if (numElementVisited > 0 && currentIdx === 0) return false;
        numElementVisited++;
        currentIdx = getNextIdx(currentIdx, array)
    }
    return currentIdx === 0;
}


function getNextIdx(currentIdx, array) {
    const jump = array[currentIdx];
    const nextIdx = (currentIdx + jump) % array.length;
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
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

    breadthFirstSearch(array) {
        const queue = [this];
        while (queue.length > 0) {
            const current = queue.shift();
            array.push(current.name);
            for (const child of current.children) {
                queue.push(child);
            }
        }
        return array;
    }
}


function riverSizes(matrix) {

    const sizes = [];
    const visited = matrix.map(row => row.map(value => false));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visited[i][j]) continue;
            traverseNode(i, j, matrix, visited, sizes);
        }
    }
    return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
    let currentRiverSize = 0;
    const nodesToExplore = [
        [i, j]
    ];
    while (nodesToExplore.length) {
        const currentNode = nodesToExplore.pop();
        i = currentNode[0];
        j = currentNode[1];

        if (visited[i][j]) continue;
        visited[i][j] = true;
        if (matrix[i][j] == 0) continue;
        currentRiverSize++;
        const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
        for (const neighbord of unvisitedNeighbors) {
            nodesToExplore.push(neighbord);
        }
    }
    if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
    const unvisitedNeighbors = [];
    if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
    if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
    if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
    if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
    return unvisitedNeighbors;
}


// This is an input class. Do not edit.
class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    // Write your code here.
    const depthOne = getDescendantDepth(descendantOne, topAncestor);
    const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
    if (depthOne > depthTwo) {
        return backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo);
    } else {
        return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne);
    }
}

function getDescendantDepth(descendant, topAncestor) {
    let depth = 0;
    while (descendant !== topAncestor) {
        depth++;
        descendant = descendant.ancestor;
    }

    return depth;
}

function backtrackAncestralTree(lowerDescendant, higherDescendant, diff) {

    // Backtracking the ancestral tree by the gettin the key.
    // While the difference is larger than 0; Lower is equal to the lower descendant ancestor, and keep making the diff -? until it reaches to no differences
    while (diff > 0) {
        lowerDescendant = lowerDescendant.ancestor;
        diff--;
    }

    // The lower Descendant !== higher descendant
    // The lower descendant equals the lower descendant ancestor and the higher descendant equals the higher descendant ancestor. Sp tjeu lee[ gpomg nacclwards imto; tje ;pwer descemdamt ,atcjes tje jogjer descemdamt/]
    while (lowerDescendant !== higherDescendant) {
        lowerDescendant = lowerDescendant.ancestor;
        higherDescendant = higherDescendant.ancestor;
    }
    return lowerDescendant;
}



// ------------------------------- Remove Islands -------------------------------


console.log(result);

function removeIslands(matrix) {
    // Write your code here.
    const onesConnectedToBorder = [];
    // Just creating the empty borders?
    for (let row = 0; row < matrix.length; row++) {
        onesConnectedToBorder.push([]);
        // GFor loop where you push all the rows as false (Initializiing)
        for (let col = 0; col < matrix[0].length; col++) {
            onesConnectedToBorder[row].push(false);
        }
    }

    // Loop each row and col to figure out if the row (0)  the row max lenght (the borders) and then if its not border make a matrix not equal to one. find the ones connected to border
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const rowIsBorder = row === 0 || row === matrix.length - 1;
            const colIsBorder = col === 0 || col === matrix[row].length - 1;
            const isBorder = rowIsBorder || colIsBorder;
            if (!isBorder) continue;

            if (matrix[row][col] != 1) continue;

            findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder);

        }
    }

    // Loop each row col -1 (not borders starting from 1 and if the are ones connectedTo Border then skip, otherwise, connect to zero.)
    for (let row = 1; row < matrix.length - 1; row++) {
        for (let col = 1; col < matrix[row].length - 1; col++) {
            if (onesConnectedToBorder[row][col]) continue;

            matrix[row][col] = 0;
        }
    }


    return matrix;
}

function findOnesConnectedToBorder(matrix, startRow, startCol, onesConnectedToBorder) {
    // create an stack using the start row and start col

    // While the stack length larger than 0pop the stack (for the current position) and then get the current row and col from the current position. 
    // Decide if it already been visited by finding out if there is any value in the coordinates of the onesConnectedToBorder matrix.

    // then declare the neightbors as get neightbors of the matrix and for each neightbor, if the value is not 1 skip, otherwise push to the stack

    const stack = [
        [startRow, startCol]
    ];

    while (stack.length > 0) {
        const currentPosition = stack.pop();
        const [currentRow, currentCol] = currentPosition;
        console.log(` visiting ${currentCol} ${currentRow}`)
        const alreadyVisisted = onesConnectedToBorder[currentRow][currentCol];
        if (alreadyVisisted) {
            console.log(`already visited ${currentCol} ${currentRow}`)
            continue;
        };

        onesConnectedToBorder[currentRow][currentCol] = true;

        const neighbors = getNeighbors(matrix, currentRow, currentCol);
        for (const neighbor of neighbors) {
            const [row, col] = neighbor;
            if (matrix[row][col] != 1) continue;
            stack.push(neighbor);
        }
        console.log('Stack: ')
        console.log(stack)
    }
}

function getNeighbors(matrix, row, col) {
    // simply look at the right left top, bottom, by making additions and checking if the content is larger or smaller than the boundaries using the matrix length of rows and cols

    const neighbors = [];

    const numRows = matrix.length;
    const numCols = matrix[row].length;

    if (row - 1 >= 0) neighbors.push([row - 1, col]);
    if (row + 1 < numRows) neighbors.push([row + 1, col]);
    if (col - 1 >= 0) neighbors.push([row, col - 1]);
    if (col + 1 < numCols) neighbors.push([row, col + 1]);

    console.log(neighbors);

    return neighbors;
}

// CYCLE

function cycleInGraph(edges) {
    const numberOfNodes = edges.length;
    const visited = new Array(numberOfNodes).fill(false);
    const currentlyInStack = new Array(numberOfNodes).fill(false);

    for (let node = 0; node < numberOfNodes; node++) {
        if (visited[node]) continue;

        const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
        if (containsCycle) return true;
    }

    return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
    visited[node] = true;
    currentlyInStack[node] = true;

    for (const edge of edges[node]) {
        if (!visited[edge]) {
            const inCircle = isNodeInCycle(edge, edges, visited, currentlyInStack)
            if (inCircle) return true;
        } else if (currentlyInStack[edge]) {
            return true;
        }
    }

    currentlyInStack[node] = false;
    return false;
}


// ------------------ Minimum Passes Matrix ----------------

function minimumPassesOfMatrix(matrix) {

    // define passes as the convertion of negatives, if there is not containing negative then show passes other wise return -1;
    const passess = convertNegatives(matrix);
    return !containsNegative(matrix) ? passess - 1 : -1;
}

function convertNegatives(matrix) {
    let nextPassQueue = getAllPostivePositions(matrix);
    let passes = 0;

    // while currentqueue length > 0: get the currentPassqueue row na col and then get the adjacent positions for thus current row and cols on the matrix.
    // For each position of adjacent poisitions const row, col in position valu of the matrixand then if the value is larger than 0 matrix, *=-1 nextpassqueue push that item.


    // Why sending the passess? Ifi it increases everytime that the nextPassQueues increases, which is what I assume to be just the index, so if you get all positive positions that n your okok so thats the all the negative, but do., lreight so it checks if there is a negative for each one that he can convert into positive
    while (nextPassQueue.length > 0) {
        const currentPassQueue = nextPassQueue;
        nextPassQueue = [];

        while (currentPassQueue.length > 0) {

            const [currentRow, currentCol] = currentPassQueue.shift();
            const adjacentPositions = getAdjancentPositions(currentRow, currentCol, matrix);
            for (const position of adjacentPositions) {
                const [row, col] = position;
                if (matrix[row][col] < 0) {
                    matrix[row][col] *= -1;
                    nextPassQueue.push([row, col]);
                }
            }
        }
        passes++;
    }
    return passes;
}

function getAllPostivePositions(matrix) {
    const positivePositions = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const value = matrix[row][col];
            if (value > 0) positivePositions.push([row, col]);
        }
    }
    return positivePositions;
}

function getAdjancentPositions(row, col, matrix) {
    const adjacentPositions = [];
    if (row > 0) adjacentPositions.push([row - 1, col]);
    if (row < matrix.length - 1) adjacentPositions.push([row + 1, col]);
    if (col > 0) adjacentPositions.push([row, col - 1]);
    if (col < matrix[0].length - 1) adjacentPositions.push([row, col + 1]);

    return adjacentPositions;
}

function containsNegative(matrix) {
    for (const row of matrix) {
        for (const value of row) {
            if (value < 0) return true;
        }
    }

    return false;
}

// Function of the Task Assigment

function taskAssignment(k, tasks) {
    const pairedTasks = [];
    // Convert reverses the key and values of the tasks, so you would have time->mapping to the task id.
    const taskDurationToIndices = getTaskDurationToIndices(tasks);
    const sortedTasks = [...tasks].sort((a, b) => a - b);
    for (let idx = 0; idx < k; idx++) {
        const task1Duration = sortedTasks[idx];
        const indicesWithTask1Duration = taskDurationToIndices[task1Duration];
        const task1Index = indicesWithTask1Duration.pop();

        const task2SortedIndex = tasks.length - 1 - idx;
        const task2Duration = sortedTasks[task2SortedIndex];
        const indicesWithTask2Duration = taskDurationToIndices[task2Duration];
        const task2Index = indicesWithTask2Duration.pop();

        pairedTasks.push([task1Index, task2Index]);

    }
    return pairedTasks;
}

function getTaskDurationToIndices(tasks) {
    const taskDurationToIndices = {};

    for (let idx = 0; idx < tasks.length; idx++) {
        const taskDuration = tasks[idx];
        if (taskDuration in taskDurationToIndices) {
            taskDurationToIndices[taskDuration].push(idx);
        } else {
            taskDurationToIndices[taskDuration] = [idx];
        }
    }
    return taskDurationToIndices;
}


// Function 

function validStartingCity(distances, fuel, mpg) {
    const numberOfCities = distances.length;
    let milesRemaining = 0;

    let indexOfStartingCityCandidate = 0;
    let milesRemainingStartingCityCandidate = 0;


    // This is the validation, but how do I get the index of the starting city candidate? but we know but don't we cahnge the index of starting city candidate?
    //  So ideallly we can design an algorithm more efficient O(n)

    // We know that there will always be a valid city.If we keep at each iteration, and starts with 0 miles, at the gallon of gas, when we get to the city based on the amount of gas substracted from the the first
    // Based on the amountoof gas from the previous city and based on the city travel, on the amount of miles remaining. 
    for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
        // How does this work though? The index of the distances, the cities, at the that corresponds them, cities are 5 miles away, and the circular road again, collected at it.
        // A gallon of gas, that it allows to get city on the array, the distance to get to the first city. The last city to agains

        // Be able to travel to this city all the itself such that we can start there and fill withouth much trouble.  
        // What is MPG again? the miles per gallon that you can perform.

        // Whenever in the math and the problem, what we saw, that we get the negative at the cities. NEgative 5, bringing us, to 5 and negative 5 and negative 10 and 20. We get one gas, and fifteen, then from city 
        // We travel and get 15, The minimum will always be the one with minimum amount remaniuning.
        const distancesFromPreviousCity =
            milesRemaining += fuelFromPreviousCity * mpg - distancesFromPreviousCity;

        if (milesRemaining < milesRemainingStartingCityCandidate) {
            milesRemainingStartingCityCandidate = milesRemaining;
            indexOfStartingCityCandidate = cityIdx;
        }
    }

    return indexOfStartingCityCandidate;
}

// Heaps Solution. Insertion and Removal, Insertion and removal. 


class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        // Write your code here.
        const firstParentIdx = Math.floor((array.length - 2) / 2);
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, array.length - 1, array);
        }
        return array;
    }

    // Continuously swap down until the position is finished. 
    siftDown(currentIdx, endIdx, heap) {

        // Write your code here.

        // Here you want to calculate the child indexes and where you get the child index using the current Index calculation for the heap
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let idxToSwap;

            // If the childTwo index is not equal to -1 (unesxistent, because of being smaller than the end index? then the current Index multiplied by 2 +2 will be retuned the children index two (+2) would be the difference to the first childre, other wise returns an -1;
            if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx;
            }
            if (heap[idxToSwap] < heap[currentIdx]) {
                this.swap(idxToSwap, currentIdx, heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return;
            }
        }
    }

    // Continuosly swap up until you achieve the orrect position. We swap them. ONce we compare tand the value is sift up,

    siftUp(currentIdx, heap) {
        // Write your code here.

        // This is how you calculate the parents
        let parentIdx = Math.floor((currentIdx - 1) / 2);

        while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            // And now the parent Index recalculated based on this current Index(I assume to check if the next one requires moving also.)
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() {
        this.swap(0, this.heap.length - 1, this.heap);
        const valueToRemove = this.heap.pop();

        this.siftDown(0, this.heap.length - 1, this.heap)
        return valueToRemove;
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap)

    }

    swap(i, j, heap) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }
}

// ______________ LINKED LIST CONSTRUCTION ________________

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head, node)
    }

    setTail(node) {
        if (this.tail === null) {
            this.setHead(node);
            return;
        }
        this.insertAfter(this.tail, node);
    }

    insertBefore(node, nodeToInsert) {

        // My guess is that the following would be a node case.
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;

        if (node.prev === null) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }

        node.prev = nodeToInsert;
    }

    insertAfter(node, nodeToInsert) {
        // Write your code here.
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;

        if (node.next === null) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }

    insertAtPosition(position, nodeToInsert) {

        // IF the position is one then just assume you want to insert ot the head
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let node = this.head;
        let currentPosition = 1;
        // Ass the current Possition ++ not equal to the position, then the node is the next node
        while (node !== null && currentPosition++ !== position) node = node.next;

        // after being on the dedicated node, if it is not null (if contains something) then sinsert before, otherwise, if it is null then set is at the tail.  (I imagine if extends the basics)
        if (node !== null) {
            this.insertBefore(node, nodeToInsert);
        } else {
            this.setTail(nodeToInsert);
        }


    }

    removeNodesWithValue(value) {
        // Write your code here.

        let node = this.head;
        while (node !== null) {
            {
                const nodeToRemove = node;
                node = node.next
                if (nodeToRemove.value == value) this.remove(nodeToRemove);
            }
        }
    }

    remove(node) {
        if (node === this.head) this.head = this.head.next;
        if (node === this.tail) this.tail = this.tail.prev;
        this.removeNodeBindings(node);

    }

    containsNodeWithValue(value) {
        let node = this.head;
        while (node !== null && node.value !== value) node = node.next;
        return node !== null;
    }

    removeNodeBindings(node) {
        if (node.prev !== null) node.prev.next = node.next;
        if (node.next !== null) node.next.prev = node.prev;

        node.prev = null;
        node.next = null;
    }
}


// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// What we want to do is to point the first one with the pointer of the value we want and the second one.
// Keep the node at the beginning and the head node. The linked list and how it ends at three. 


// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k) {
    let counter = 1;
    let first = head;
    let second = head;

    // While the counter of the item is less than k, the second is the next to the second.
    while (counter <= k) {
        second = second.next;
        counter++;
    }

    if (second == null) {
        // My guess is on the case that finds null from the end of the list, that should happen always?
        // If th case of these cond being null, then you make it the case that the head value is moved by one, probably what this means is that the target is next to the head???
        // So if thats the case means that you want to remove the first item from the list which would interacti directly with the "head"
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }

    while (second.next !== null) {
        second = second.next;
        first = first.next;
    }

    // The next of the first is the first next next and thats done. 
    first.next = first.next.next;
}

// ________________ Sum of Linked Lists ______________

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    const newLinkedListHeadPointer = new LinkedList(0);
    let currentNode = newLinkedListHeadPointer;
    let carry = 0;

    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;

    while (nodeOne != null || nodeTwo !== null || carry !== 0) {

        // Value One equals nodeOne !== null then  return nodeOne.value and otherwise if null then Add a 0
        const valueOne = nodeOne !== null ? nodeOne.value : 0;
        const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;

        // Add the values.  and getting the newValue = getting the new nodes, and also the next is also the next and the current = newNode why the current and next are all newNode??? oh so it targets the node and as next? and then have it change every following? Like pushing
        const sumOfValues = valueOne + valueTwo + carry;
        const newNode = new LinkedList(sumOfValues % 10);
        currentNode.next = newNode;
        currentNode = newNode;

        // Carry and getting the following nodes.
        carry = Math.floor(sumOfValues / 10);
        nodeOne = nodeOne !== null ? nodeOne.next : null;
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null;

    }

    return newLinkedListHeadPointer.next;
}



function getPermutations(array) {
    const permutation = [];
    permutationHelper(array, [], permutation);
    return permutation;
}

function permutationHelper(array, currentPermutation, permutations) {
    if (!array.length && currentPermutation.length) {
        permutations.push(currentPermutation);
    } else {
        for (let i = 0; i < array.length; i++) {

            // Why the slice thought? if its based on the array lenght, and concatinging to the array based on i and + 1, which is removing one of thme of I get it, so the array slice tets covere each time
            const newArray = array.slice(0, i).concat(array.slice(i + 1))
            const newPermutation = currentPermutation.concat(array[i]);
            permutationHelper(newArray, newPermutation, permutations);
        }
    }
}


function powerset(array, idx = null) {
    if (idx === null) {
        idx = array.length - 1;
    }

    if (idx < 0) {
        return [
            []
        ];
    }

    // element is equal to the index.
    const ele = array[idx];

    // Subsets is eqaul to the powerset (array, index-1) which means that the array inde will each be one time less, startinf from null.
    const subsets = powerset(array, idx - 1);

    // lenghts is the subsets lenghts
    const length = subsets.length;
    for (let i = 0; i < length; i++) {

        // being hte currentSubset the subset i, and checking each subset adding the first element, 
        const currentSubset = subsets[i];
        subsets.push(currentSubset.concat(ele));
    }

    return subsets;
}


// Phone Number Mnemonics

function phoneNumberMnemonics(phoneNumber) {
    const currentMnemonic = new Array(phoneNumber.length).fill('0');
    const mnemonicsFound = [];
    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);
    return mnemonicsFound;
}

function phoneNumberMnemonicsHelper(idx, phoneNumber, currentMnemonic, mnemonicsFound) {
    if (idx === phoneNumber.length) {
        const mnemonic = currentMnemonic.join('');
        mnemonicsFound.push(mnemonic);
    } else {
        const digit = phoneNumber[idx];
        const letters = DIGIT_LETTERS[digit];
        for (const letter of letters) {
            currentMnemonic[idx] = letter;
            phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currentMnemonic, mnemonicsFound);
        }
    }
}

const DIGIT_LETTERS = {
    0: ['0'],
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

function starcaseTraversal(height, maxSteps) {
    return numberOfWaysToTop(height, maxSteps);
}

function numberOfWaysToTop(height, maxSteps) {
    if (height <= 1) return 1;

    let numberOfWays = 0;

    for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
        numberOfWays += numberOfWaysToTop(height - step, maxSteps);
    }

    return numberOfWays;
}

function searchInSortedMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] > target) {
            col--;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            return [row, col];
        }
    }
    return [-1, -1]
}


function threeNumberSort(array, order) {
    const valueCounts = [0, 0, 0, ];

    for (const element of array) {
        const orderIdx = order.indexOf(element);
        valueCounts[orderIdx]++;
    }

    for (let idx = 0; idx < 3; idx++) {
        const value = order[idx];
        const count = valueCounts[idx];

        const numElementsBefore = valueCounts.slice(0, idx).reduce((a, b) => a + b, 0);
        for (let n = 0; n < count; n++) {
            const currentIdx = numElementsBefore + n;
            array[currentIdx] = value;
        }
    }
    return array;
}


function threeNumberSort(array, order) {
    const firstValue = order[0];
    const secondValue = order[1];

    let firstIdx = 0;
    let secondIdx = 0;
    let thirdIdx = array.length - 1;

    while (secondIdx <= thirdIdx) {
        const value = array[secondIdx];
        if (firstValue === value) {
            swap(firstIdx, secondIdx, array);
            firstIdx++;
            secondIdx++;
        } else if (secondValue === value) {
            secondIdx++;
        } else {
            swap(thirdIdx, secondIdx, array);
            thirdIdx--;
        }
    }
    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}


// Feel free to add new properties and methods to the class.
class MinMaxStack {

    constructor() {
        this.minMaxStack = [];
        this.stack = [];
    }


    peek() {
        // Write your code here.
        return this.stack[this.stack.length - 1];
    }

    pop() {
        // Write your code here.
        // Pops out from bot stacks

        this.minMaxStack.pop();
        this.stack.pop();

    }

    push(number) {
        // Write your code here.
        // The idea is that it willpush towards the both stacks and also calculate the max and minimum. from the last one

        this.stack.push(number);
        const newMinMax = {
            min: number,
            max: number
        };
        const lastMinMax = this.minMaxStack[this.length - 1];
        if (this.minMaxStack.length) {
            newMinMax.min = Math.min(number, lastMinMax.min);
            newMinMax.max = Math.max(number, lastminMax.max);
        }
        this.minMaxStack.push(newMinMax);
    }

    getMin() {
        // Write your code here.
        return this.minMaxStack[this.minMaxStack.length - 1].min;
    }

    getMax() {
        // Write your code here.
        return this.minMaxStack[this.minMaxStack.length - 1].max;
    }
}


function balancedBrackets(string) {
    const openingBrackets = '({[';
    const closingBrackets = ')}]';
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [];

    for (const char of string) {

        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.length <= 0) {
                return false;
            }

            if (stack[stack.length - 1] == matchingBrackets[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0
}


function sunsetViews(buildings, direction) {

    buildingWithSunsetViews = [];
    const startIdx = direction == "WEST" ? 0 : buildings.length - 1;
    const step = direction == "WEST" ? 1 : -1;
    let idx = startIdx;
    let maxBuildingHeight = 0;
    while (idx >= 0 && idx < buildings.length) {
        const buildingHeight = buildings[idx];
        if (buildingHeight > maxBuildingHeight) {
            buildingWithSunsetViews.push(idx);
        }
        maxBuildingHeight = Math.max(maxBuildingHeight, buildingHeight)
        idx += step;
    }

    if (direction == "WEST") {
        buildingWithSunsetViews.reverse();
    }

    return buildingWithSunsetViews;
}

function sortStack(stack) {

    if (stack.length === 0) return stack;
    const top = stack.pop();
    sortStack(stack);
    insertInSortedOrder(stack, top)
    return stack;
}

function insertInSortedOrder(stack, value) {
    if (stack.length === 0 | stack[stack.length - 1] <= value) {
        stack.push(value);
        return;
    }
    const top = stack.pop();
    insertInSortedOrder(stack, value);
    stack.push(top)

}

function nextGreaterElement(array) {
    const result = new Array(array.length).fill(-1);
    const stack = [];

    for (let idx = 0; idx < 2 * array.length; idx++) {
        const circularIdx = idx % (array.length);
        while (stack.length > 0 && array[stack[stack.length - 1]] < array[circularIdx]) {
            const top = stack.pop();
            result[top] = array[circularIdx];
        }
        stack.push(circularIdx);
    }
    return result;
}

function longestPalindromicSubstring(string) {
    let currentLongest = [0, 1];
    for (let i = 1; i < string.length; i++) {
        const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
        const even = getLongestPalindromeFrom(string, i - 1, i);
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
    }

    return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < string.length) {
        if (string[leftIdx] !== string[rightIdx]) break;
        leftIdx--;
        rightIdx++;
    }
    return [leftIdx + 1, rightIdx];
}

function groupAnagrams(words) {
    const anagrams = {};
    for (const word of words) {
        const sortedWord = word.split('').word.sort().join('');
        if (sortedWord in anagrams) {
            anagrams[sortedWord].push(word);
        } else {
            anagrams[sortedWord] = [word];
        }
    }

    return Object.values(anagrams);
}