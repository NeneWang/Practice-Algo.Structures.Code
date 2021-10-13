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
    encodedCharacters.push(string[string.length-1]);
    return encodedCharacters.join('');

}