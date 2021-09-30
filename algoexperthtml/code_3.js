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


function productSum(array, multiplier=1 ) {
    // Write your code here.
    
    let sum=0;
    for(const element of array){
        if(Array.isArray(element)){
            sum+=productSum(element, multiplier+1);
        }
        else{
            sum+=element;
        }
    }
    return sum*multiplier;

}