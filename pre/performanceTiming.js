const nemo = ['nemo'];
const everyone = ['rafa', 'rafa','rafa','rafa', 'nemo'];
const {performance} = require('perf_hooks');


function findNemo(array){

  let t0 = performance.now();
  for(let i = 0; i< array.length; i++){
    

    if(array[i]==="nemo"){
      console.log('Found Nemo!');
    }

  }

  let t1 = performance.now();
  console.log("Call to find Nemo took "+ (t1-t0) + ' milliseconds');
}

const boxes = [1, 2, 3, 4, 5];

function printAllPossiblePairs(boxes){
  boxes.forEach(col=> {
    boxes.forEach(row =>
      {
        console.log(`${col} ${row }`);
      }
    )
  })
}

printAllPossiblePairs(boxes);




// findNemo(nemo);
// findNemo(everyone);