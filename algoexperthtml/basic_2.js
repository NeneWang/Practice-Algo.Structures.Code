function twoNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const sum = array[left] + array[right];
        if (sum == targetSum) {
            return [array[left], array[right]];
        } else if (sum < targetSum) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let countSequence = 0;

    for (const value of array) {
        if (value == sequence[countSequence]) {
            countSequence++;
        }
    }

    if (countSequence == sequence.length) {
        return true;
    } else {
        return false;
    }
}

function sortedSquaredArray(array) {
    // Write your code here.
    return array.map(n => n*n).sort((a,b)=> a-b);
  }
  

  function tournamentWinner(competitions, results) {
    // Write your code here.
  // 	Create a hashmap with the winners and return the best
      const winningHash = {};
      let currentLargest = "";
      winningHash[currentLargest] = 0;
      
      for(const result of results){
          
          const [homeTeam, awayTeam]  = competitions.shift();
          const winningTeam = result ==1?homeTeam:awayTeam;
          
          winningHash[winningTeam] = winningHash[winningTeam] == null? 3: winningHash[winningTeam]+3;
          currentLargest = winningHash[currentLargest]>winningHash[winningTeam]?currentLargest:winningTeam;
          
      }
    return currentLargest;
  }

  function nonConstructibleChange(coins) {
	coins.sort((a,b)=>a-b);
	let maxChange = 0;
	for(const coin of coins){
		if(coin>maxChange+1){
			return maxChange+1;
		}
		maxChange += coin;
	}
	return maxChange+1;
}

function findClosestValueInBst(tree, target) {
    // Write your code here.
      return findHelper(tree, target, tree.value)
      
  }
  
  function findHelper(tree, target, closest){
      while(tree!==null){
          const nodeDistance = Math.abs(tree.value-target);
          closest = Math.abs(closest-target) > nodeDistance ? tree.value: closest;	
          if(tree.value == target){
              return closest;
          }
          if(target > tree.value){
              tree = tree.right;
          }else{
              tree = tree.left;
          }
      }
      return closest;	
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      const sums = []
      helper(root, 0, sums);
      return sums;
  }
  
  function helper(root, runningSum, sums){
  // 	Go to right and left and return the variables
      if(root == null){
          return;
      }
      
      runningSum+=root.value;
      if(!root.right && !root.left){
          sums.push(runningSum)
      }
      
      let sumLeft = helper(root.left, runningSum, sums);
      let sumRight = helper(root.right, runningSum, sums);
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  