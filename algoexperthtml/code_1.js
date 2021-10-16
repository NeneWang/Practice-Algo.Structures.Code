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