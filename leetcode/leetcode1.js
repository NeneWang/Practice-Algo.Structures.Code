
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