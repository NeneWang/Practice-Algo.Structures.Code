 function twoNumberSum(array: number[], targetSum: number) {
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
  
   function isValidSubsequence(array: number[], sequence: number[]) : boolean{
    if(sequence.length == 0){
        return true;
    }

    let indexOfCurrentSequence = array.indexOf(sequence[0]);
    if(indexOfCurrentSequence>=0){
        return isValidSubsequence(array.slice(indexOfCurrentSequence+1), sequence.slice(1))

    }else{
        
    return false;
    }

  }