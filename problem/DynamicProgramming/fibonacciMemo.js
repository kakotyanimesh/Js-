function fiboMemo(n, memo = {}) {
    
    if(n in memo) return memo[n]  // base case for memo

    if(n <= 1) return n

    memo[n] = fiboMemo(n-1, memo) + fiboMemo(n-2, memo)

    return memo[n]
}

// console.log(fiboMemo(7));


// tabulation 


function tabulation(n) {
    if(n <= 1) return n

    const table = Array(n+1).fill(0)

    table[1] = 1

    for(let i = 2; i<= n; i++){
        table[i] = table[i -1] + table[i - 2]

    }

    return table[n]
    
}

console.log(tabulation(7));