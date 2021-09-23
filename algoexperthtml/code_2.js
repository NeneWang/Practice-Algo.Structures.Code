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