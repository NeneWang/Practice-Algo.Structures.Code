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
  