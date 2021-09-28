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
            pairSpeed = Math.max(redShirtSpeeds[i], blueShirtSpeeds[size - i-1]);
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
    let currentNode = currentNode.next;
    while(currentNode !== null){
        let nextDistictNode = currentNode.next;
        while(nextDistictNode !== null && nextDistictNode.value === currentNode.value){
            nextDistictNode = nextDistictNode.next;
        }
        currentNode.next = nextDistictNode;
        currentNode = nextDistictNode;
    }

    return linkedList;
  }
  