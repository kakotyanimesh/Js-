// notes in copy


function minCount(coins, amount, memo = {}) {
    if(amount in memo) return memo[amount]

    if(amount === 0) return 0
    if(amount < 0) return -1

    let minCoinCount = Infinity

    for (const coin of coins) {
        const result = minCount(coins, amount - coin, memo)  // 0 : -1
        if(result !== -1){
            minCoinCount = Math.min(minCoinCount, result + 1)
        }
    }

    memo[amount] = minCoinCount === Infinity ? -1 : minCoinCount

    return memo[amount]
    
}

console.log(minCount([4,6,10], 15));