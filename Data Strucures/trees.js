class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
  
      let isInserted = false;
      let newNode = new Node(value);
  
      let comparableNode = this.root;
      if (this.root == null) {
        this.root = newNode;
        isInserted = true;
      }
  
      while (!isInserted) {
        if (newNode.value > comparableNode.value) {
          if (comparableNode.right == null) {
            comparableNode.right = newNode;
            isInserted = true;
          } else {
            comparableNode = comparableNode.right;
          }
        } else {
          if (comparableNode.left == null) {
            comparableNode.left = newNode;
            isInserted = true;
          } else {
            comparableNode = comparableNode.left;
          }
        }
      }
  
    }
  
  
    lookup(value) {
      let comparableNode = this.root;
      
      while (true) {
         if(comparableNode ==null){
          return false;
        }else if (comparableNode.value == value) {
          return comparableNode;
        }
        if (value > comparableNode.value) {
          comparableNode = comparableNode.right;
        } else {
          comparableNode = comparableNode.left;
        }
        
  
      }
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  
  JSON.stringify(traverse(tree.root))
  console.log(
    tree.lookup(20))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  