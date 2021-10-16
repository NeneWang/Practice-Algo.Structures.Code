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