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