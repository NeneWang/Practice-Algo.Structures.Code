export function twoNumberSum(array: number[], targetSum: number) {
    // Write your code here.
      let keys : number[];
      keys = [];
      array.every( element => 
                                   {
          let searchThis = targetSum-element;
          if(searchThis != element && array.includes(searchThis)){
              keys = [element, searchThis]
              return false;
          }
          return true;
          
      }
                                  )
    return keys;
  }
  

  export function isValidSubsequence(array: number[], sequence: number[]) : boolean{
    // Write your code here.
    if(array.length == 0){
        return true;
    }

    if(array.includes(sequence[0])){
        // Then slice the array and the last sequence
        let indexOfCurrentSequence = array.indexOf(sequence[0]);
        return isValidSubsequence(array.slice(indexOfCurrentSequence), sequence.slice(1))

    }

    return false;
  }
  