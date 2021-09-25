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

function nodeDepths(root, depth = 0) {
    // Write your code here.
    if (root === null) return 0;
    return depth + nodeDepths(root.right, 1) + nodeDepths(root.left, depth + 1);

}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}