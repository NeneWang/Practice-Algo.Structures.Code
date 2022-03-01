
var maxProfit = function(prices) {
    let min_sofar=Infinity;
    let max_profit = 0;
    for(let i =0; i<prices.length; i++){
        if(prices[i] < min_sofar){
            min_sofar= prices[i];
        }
        let temp_profit = prices[i] - min_sofar;
        if(temp_profit > max_profit){
            max_profit = temp_profit;
        }
    }
    return max_profit;
};

// I guess another way to solv it is by asking how many took to solve the previous one? so for that to happen

// memorize it on a map, and then figure out the previous one. and add the how many times and multiply them with the new ays?
let memo = [];
var climbStairs = function(n) {
    memo = Array(n+1);
    return climbHelp(n);
}

var climbHelp = function(n){
    if(n<=2){
        return n;
    }    
    else if(memo[n]){
        return memo[n]
    }
    else{
        memo[n] = climbHelp(n-1) + climbHelp(n-2)
        return memo[n];
    }
}