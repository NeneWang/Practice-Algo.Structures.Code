// I am going to rewrite all my code here? Or no need since I will revisit here with a different language?



function findClosestValueInBst(tree, target) {
    // Write your code here.
    return findClosestValueRecursive(tree, target, tree.value);
}

function findClosestValueRecursive(node, target, closestTarget) {

    if (node === null) return closestTarget;
    if (Math.abs(node.value - target) < Math.abs(closestTarget - target)) {
        closestTarget = node.value;
    }

    if (target > node.value) {
        return findClosestValueRecursive(node.right, target, closestTarget);
    } else if (target < node.value) {
        return findClosestValueRecursive(node.left, target, closestTarget);
    } else {
        return closestTarget;
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
    const stack = [{
        node: root,
        depth: 0
    }];
    let sumOfdepth = 0

    while (stack.length > 0) {
        const {
            node,
            depth
        } = stack.pop();
        if (node === null) continue;
        sumOfDepth += depth;
        stack.push({
            node: node.left,
            depth: depth + 1
        });
        stack.push({
            node: node.right,
            depth: depth + 1
        });

    }
    return sumOfDepth;

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
    let lastTwo = [0, 1];
    let counter = 0;
    while (counter < n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;

        counter++;
    }

    return n > 1 ? lastTwo[0] : lastTwo[1];
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
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const potentialMatch = array[middle];
        if (target === potentialMatch) {
            return middle;
        } else if (target < potentialMatch) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }

    }
    return -1;
}

function binarySearchHelper2(array, target, left, right) {
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const currentTarget = array[middle];
        if (currentTarget === target) {
            return middle;
        } else if (currentTarget > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}


function findThreeLargestNumbers(array) {}

function updatedLargest(threeLargest, num) {}

function shiftAndUpdate(array, num, idx) {}


function bubblesort(array) {
    let count = 0;
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - count; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, j, array);
                isSorted = false;
            }
        }
        count++;
    }

    return array;
}

function swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function selectionSort(array) {
    let startIdx = 0;
    while (startIdx < array.length) {
        let minIdx = startIdx;

        for (let i = startIdx; i < array.length; i++) {
            if (array[i] < array[minIdx]) minIdx = i;
        }
        swap(startIdx, minIdx, array)

        startIdx++;
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

function isPalindrom(string) {
    let leftIdx = 0;
    let rightIdx = string.length - 1;

    while (leftIdx < rightIdx) {
        if (string[leftIdx] != string[rightIdx]) {
            return false;
        }

        leftIdx++;
        rightIdx--;
    }
    return true;

}


function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.

    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let firstIdx = 0;
    let secondIdx = 0;

    let smallestDifference = Infinity;
    let current = Infinity;
    let smallestPair = [];

    while (firstIdx < arrayOne.length && secondIdx < arrayTwo.length) {
        let firstNum = arrayOne[firstIdx];
        let secondNum = arrayTwo[secondIdx];

        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            firstIdx++;
        } else if (secondNum < firstNum) {
            current = firstNum - secondNum;
            secondIdx++;
        } else {
            // No difference at all
            return [firstNum, secondNum]
        }
        if (smallestDifference > current) {
            smallestDifference = current;
            smallestPair = [firstNum, secondNum];
        }
    }

    return smallestPair;
}


function isMonotonic(array) {

    // If the length oth the array is minus two then tere doesn't make sense to ave the direction
    if (array.length <= 2) return true;

    // Get the direction based on what's next
    let direction = array[1] - array[0];
    for (let i = 2; i < array.length; i++) {
        if (direction == 0) {
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
    const result = [];
    fillSpiral(array, 0, array.length - 1, 0, array[0].length - 1, result)
    return result;


}

function fillSpiral(array, rowStart, rowEnd, colStart, colEnd, result) {
    // Base case
    if (rowStart > rowEnd || colStart > colEnd) return;

    for (let col = colStart; col <= colEnd; col++) {
        result.push(array[rowStart][col]);
    }

    for (let row = rowStart + 1; row <= rowEnd; row++) {
        result.push(array[row][colEnd]);
    }

    for (let col = colEnd - 1; col >= colStart; col--) {

        if (rowEnd == rowStart) break;
        result.push(array[rowEnd][col]);
    }

    for (let row = rowEnd + 1; row > rowStart; row--) {
        if (colEnd == colStart) break;
        result.push(array[row][colStart]);
    }


    fillSpiral(array, rowStart + 1, rowEnd - 1, colStart + 1, colEnd - 1, result);
}

function arrayOfProducts(array) {
    const products = new Array(array.length).fill(1);

    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
        products[i] = leftRunningProduct;
        leftRunningProduct *= array[i];
    }

    let rightRunningProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        products[i] *= rightRunningProduct;
        rightRunningProduct *= array[i];
    }

    return products;

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


function invertBinaryTree(tree) {
    if (tree === null) return false;
    swapLeftAndRight(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);

}

function swapLeftAndRight(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}


class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(isBalanced, heigth) {
        this.isBalanced = isBalanced;
        this.height = heigth;
    }
}



function heightBalancedBinaryTree(tree) {


    return getTreeInfo(tree).isBalanced;
}

function getTreeInfo(node) {
    if (node === null) return new TreeInfo(true, -1);

    const leftTreetInfo = getTreeInfo(node.left);
    const rightTreetInfo = getTreeInfo(node.right);

    const isBalanced = leftTreetInfo.isBalanced && rightTreetInfo.isBalanced && Math.abs(rightTreetInfo.height - leftTreetInfo.height) <= 1;
    const height = Math.max(leftTreetInfo.height, rightTreetInfo.height) + 1;

    return new TreeInfo(isBalanced, height)

}



function numberOfWaysToMakeChange(n, denoms) {

    const ways = Array[n + 1].fill(1);
    ways[0] = 1;
    for (let denom of denoms) {
        for (let amount = 1; amount <= n; amount++) {
            if (denom <= amount) ways[amount] += ways[amount - denom];
        }
    }
    return ways[n];
}


function minNumberOfCoinsForChange(n, denoms) {
    const numOfCoins = new Array(n + 1).fill(Infinity);
    numOfCoins[0] = 0;
    for (const denom of denoms) {
        for (let amount = 0; amount <= n; amount++) {
            numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
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
            if (str2[i - 1] === str1[j - 1]) {
                edits[i][j] = edits[i - 1][j - 1];
            } else {
                edits[i][j] = 1 + min(edits[i][j - 1], edits[i - 1][j], edits[i - 1][j - 1]);
            }
        }
    }
    return edits[str2.length][str1.length];

}

function numberOfWaysToTraverseGraph(width, height) {
    const xDistanceToCorner = width - 1;
    const yDistanceToCorner = height - 1;

    const numerator = factorial(xDistanceToCorner + yDistanceToCorner);
    const denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner);
    return Math.floor(numerator / denominator);
}

function factorial(num) {
    let result = 1;
    for (let n = 2; n < num + 1; n++) {
        result *= n;
    }
    return result;
}

function hasSingleCycle(array) {
    let numberTimesVisited = 0;
    let currentIdx = 0;
    while (numberTimesVisited < array.length) {
        if (numberTimesVisited > 0 && currentIdx === 0) return false;
        numberTimesVisited++;
        currentIdx = getNextIdx(currentIdx, array);

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
        // Write your code here.
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


function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    const depthOne = getDepth(descendantOne, topAncestor);
    const depthTwo = getDepth(descendantTwo, topAncestor);

    if (depthOne > depthTwo) {
        return backTrackAncestor(descendantOne, descendantTwo, depthOne - depthTwo);
    } else {
        return backTrackAncestor(descendantTwo, descendantOne, depthTwo - depthOne);
    }

}
// This is an input class. Do not edit.
class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getDepth(descendant, topAncestor) {
    let depth = 0
    while (topAncestor !== descendant) {
        depth++;
        descendant = descendant.ancestor;
    }
    return depth;
}

function backTrackAncestor(lowerNode, HigherNode, diff) {
    while (diff > 0) {
        diff--;
        lowerNode = lowerNode.ancestor;
    }

    while (lowerNode !== HigherNode) {
        lowerNode = lowerNode.ancestor;
        HigherNode = HigherNode.ancestor;
    }

    return lowerNode;

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

    const ele = array[idx];
    const subsets = powerset(array, idx - 1);
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
        const currentSet = array[i];
        subsets.push(currentSet.concat(ele));
    }

    return subsets;

}



function phoneNumberMnemonics(phoneNumber) {

    // Start initializing throught the array lenght filling to 0. I don't get why the of so its the longitude of the phone number...
    const currentMnemonic = new Array(phoneNumber.length).fill('0');
    const mnemonicsFound = [];
    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);
    return mnemonicsFound;
}

function phoneNumberMnemonicsHelper(idx, phoneNumber, currentMnemonic, mnemonicsFound) {

    if (idx == phoneNumber.length) {
        mnemonicsFound.push(currentMnemonic.join(''));
    } else {
        const letters = DIGIT_LETTERS[phoneNumber[idx]];
        for (const letter of letters) {
            currentMnemonic[idx] = letter;
            phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currentMnemonic, mnemonicsFound)
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