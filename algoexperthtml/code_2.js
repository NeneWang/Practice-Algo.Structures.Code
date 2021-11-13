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


// This is an input class. Do not edit.
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
    const isLeftValid = validateBstHelper(tree.left, minValue, tree.value);
    return isLeftValid && validateBstHelper(tree.right, tree.value, maxValue);
}


// --------------------------------------------------- MIN HEIGHT BST -------------------------------------------------------------------

function minHeightBst(array) {
    // Write your code here.
    return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {

    if (startIdx > endIdx) {
        return;
    }
    const midIdx = Math.floor((endIdx + startIdx) / 2);
    const valueToAdd = array[midIdx];

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
    if (tree === null) return;
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
        this.parent = null;
    }
}

function findSuccessor(tree, node) {
    if (node.right !== null) return getLeftMostChild(node.right);
    return getRightMostParent(node);
}


function getRightMostParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right == currentNode) {
        currentNode = currentNode.parent;
    }
    return currentNode.parent;
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
    const leftSubstreeInfo = getTreeInfo(node.left);
    const rightSubstreeInfo = getTreeInfo(node.right);
    const isBalanced = leftSubstreeInfo.isBalanced && rightSubstreeInfo.isBalanced && Math.abs(rightSubstreeInfo.height - leftSubstreeInfo.height) <= 1;
    const height = Math.max(leftSubstreeInfo.height, rightSubstreeInfo.height) + 1;
    return new TreeInfo(isBalanced, height);

}


function maxSubsetSumNoAdjacent(array) {
    if (!array.length) return 0;
    if (array.length === 1) return array[0];
    const maxSums = array.slice();
    maxSums[1] = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    }

    return maxSums[maxSums.length - 1];

}

function numberOfWaysToMakeChange(n, denoms) {

    const ways = new Array(n + 1).fill(0);
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
                edits[i][j] = 1 + Math.min(edits[i][j - 1], edits[i - 1][j], edits[i - 1][j - 1]);
            }
        }
    }
    return edits[str2.length][str1.length];

}

function numberOfWaysToTraverseGraph(width, height) {
    const numberOfWays = [];
    for (let i = 0; i < height + 1; i++) {
        numberOfWays.push([]);
        for (let j = 0; j < width + 1; j++) {
            numberOfWays[i].push(0);
        }
    }

    for (let widthIdx = 1; widthIdx < width + 1; widthIdx++) {
        for (let heightIdx = 1; heightIdx < height + 1; heightIdx++) {
            if (widthIdx === 1 || heightIdx === 1) {
                numberOfWays[heightIdx][widthIdx] = 1;
            } else {
                const waysLeft = numberOfWays[heightIdx][widthIdx - 1];
                const waysUp = numberOfWays[heightIdx - 1][widthIdx];
                numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp;
            }
        }
    }

    return numberOfWays[height][width];
}


function kadanesAlgorithm(array) {
    // Write your code here.
    let maxSoFar = array[0];
    let maxEndingHere = array[0];

    for (let i = 1; i < array.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + array[i], array[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}



function hasSingleCycle(array) {
    let numElementVisited = 0;
    let currentIdx = 0;
    while (numElementVisited < array.length) {
        if (numElementVisited > 0 && currentIdx === 0) return false;
        currentIdx = getNextIdx(currentIdx, array);
        numElementVisited++;
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
        descendant = descendant.ancestor;
        depth++;
    }

    return depth;
}

function backtrackAncestralTree(lowerDescendant, higherDescendant, diff) {

    while (diff > 0) {
        lowerDescendant = lowerDescendant.ancestor;
        diff--;
    }
    while (lowerDescendant !== higherDescendant) {
        lowerDescendant = lowerDescendant.ancestor;
        higherDescendant = higherDescendant.ancestor;
    }
    return lowerDescendant;
}


function cycleInGraph(edges) {
    // Write your code here.
    const numberNodes = edges.length;
    const isInStack = Array(numberNodes).fill(false);
    const visited = Array(numberNodes).fill(false);

    for (let nodeNumber = 0; nodeNumber < numberNodes; nodeNumber++) {
        if (visited[nodeNumber]) continue;

        const isInCircle = isNodeInCycle(nodeNumber, edges, visited, isInStack);
        if (isInCircle) return true;
    }


    return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
    visited[node] = true;
    currentlyInStack[node] = true;

    for (const edge of edges[node]) {
        if (!visited[edge]) {
            const inCircle = isNodeInCycle(edge, edges, visited, currentlyInStack);
            if (inCircle) return true;
        } else if (currentlyInStack[edge]) {
            return true;
        }
    }

    currentlyInStack[node] = false;
    return false;
}


// __________________ Minimum Passess of the Matrix ______________________________

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

    while (nextPassQueue.length > 0) {
        const currentQueue = nextPassQueue;
        nextPassQueue = [];

        while (currentQueue.length > 0) {
            const [currentRow, currentCol] = currentQueue.shift();
            const adjacentNodes = getAdjancentPositions(currentRow, currentCol, matrix);
            for (const adjacentNode of adjacentNodes) {
                const [row, col] = adjacentNode;
                if (matrix[row][col] < 0) {
                    matrix[row][col] *= -1;
                    nextPassQueue.push(matrix[row][col]);
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

// Do not edit the line below.

function taskAssignment(k, tasks) {
    const pairedTasks = [];
    // Convert reverses the key and values of the tasks, so you would have time->mapping to the task id.

    // console.log(sortedTasks);I dont really get why it then becomes htat the a is smaller, so it means that when is false, then is good?

    // Sort the tasks based on te larger to smaller
    // For each starting from larger you get the idx less than the amoun of tasks (for each worker)
    // the task  duration = sorted tasks indices with task durations by the indexes and then you get the first index equals the indices of the task duration 1 popping while on the other one youget the task lenght -1 -idx and get the duration starting from the half and duration being tae tasks (the last two,half and then get the task durtation to indeces and then ,  we push this tasks)

    // The sorted tasks would contain the values in sorted manner
    // While the taskDurationToIndices getting based on the duration woul return the indices. and get the first one and pop them to pair with the speeds. and then

    // the task sorted would always grab the lenght-1
    const taskDurationToIndices = getTaskDurationToIndices(tasks);

    const sortedTasks = [...tasks].sort((a, b) => a - b);
    for (let idx = 0; idx < k; idx++) {
        const task1Duration = sortedTasks[idx];
        const task1Index = taskDurationToIndices[task1Duration].pop();

        const task2DurationIndex = task.length - 1 - idx;
        const task2Duration = sortedTasks[task2DurationIndex];
        const task2Index = taskDurationToIndices[task2Duration].pop();

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


// Valid City

function validStartingCity(distances, fuel, mpg) {
    const numberOfCities = distances.length;
    let milesRemaining = 0;

    let indexOfStartingCityCandidate = 0;
    let milesRemainingStartingCityCandidate = 0;

    // For each city index starting from 1, and the number of cities
    for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
        const distanceFromPreviousCity = distances[cityIdx - 1];
        const fuelFromPreviousCity = fuel[cityIdx - 1];

        milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;
        if (milesRemaining < milesRemainingStartingCityCandidate) {
            milesRemainingStartingCityCandidate = milesRemaining
            // Yeah because the indexes are starting from 0 and the city from 1.
            indexOfStartingCityCandidate = cityIdx;
        }
    }

    return indexOfStartingCityCandidate;

}

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
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let swapIdx;

            if (childTwoIdx != -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                swapIdx = childTwoIdx;
            } else {
                swapIdx = childOneIdx;
            }

            if (heap[swapIdx] < heap[currentIdx]) {
                this.swap(swapIdx, currentIdx, heap);
                currentIdx = swapIdx;
                childOneIdx = currentIdx * 2 + 1;
                // The children the first children of the current index
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

        // IF the node was actually the head, then make the insert node the head, otherwise, if not hthe head then make the node. previous next to derigite towards nodeToInsert
        if (node.prev === null) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }

    insertAfter(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;

        if (node.next == null) {
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
        while (node !== null && node.value !== value) value = node.next;
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

function removeKthNodeFromEnd(head, k) {
    let counter = 1;
    let first = head;
    let second = head;
    // Move the second ahed
    while (counter <= k) {
        second = second.next;
        counter++;
    }

    // Now if the case where it is already null
    if (second.value == null) {
        head.value = head.next.value;
        head.next = head.next.next;
    }

    // Now move them all together
    while (second.value !== null) {
        second = second.next;
        first = first.next;
    }

    first.next = first.next.next;
}

// This is an input class. Do not edit.
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
        const value1 = nodeOne !== null ? nodeOne.value : 0;
        const value2 = nodeTwo !== null ? nodeTwo.value : 0;


        // Add the values.  and getting the newValue = getting the new nodes, and also the next is also the next and the current = newNode why the current and next are all newNode??? oh so it targets the node and as next? and then have it change every following? Like pushing
        const sumValues = carry + value1 + value2;
        const newLinkedValue = new LinkedList(sumValues % 10)
        currentNode.next = newLinkedValue;
        currentNode = newLinkedValue;

        // Carry and getting the following nodes.
        carry = Math.floor(sumValues / 10);
        nodeOne = nodeOne == null ? null : nodeOne.next;
        nodeTwo = nodeTwo == null ? null : nodeTwo.next;

    }

    return newLinkedListHeadPointer.next;
}

function getPermutations(array) {
    const permutation = [];
    permutationHelper(array, [], permutation);
    return permutation;
}

function permutationHelper(i, array, permutations) {
    if (i === array.length - 1) {
        permutations.push(array.slice());
    } else {
        for (let j = i; j < array.length; j++){
            swap(i, j, array);
            permutationHelper(i+1, array, permutations)
            swap(i, j, array);
        }
    }
}

function swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}