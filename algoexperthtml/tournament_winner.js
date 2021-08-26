coins = [5,7,1,1,2,3,22]

console.log(nonConstructibleChange(coins));

function nonConstructibleChange(coins) {
    // Write your code here.
    var currentChange = 0;
    coins.sort((a,b) => a-b)
    coins.forEach(coin => {
        // console.log(coin);
        
        if(coin>currentChange+1){
            return currentChange+1
        }
        currentChange+=coin;
    })
    return currentChange+1;
  }
