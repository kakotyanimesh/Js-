function maxOperators(nums, k) {
    
    let map = new Map()
    let operators = 0

    for (const num of nums) {
        let complement = k - num
        if(map.get(complement) > 0){
            operators++
            map.set(complement, map.get(complement) - 1)
        } else {
            map.set(num, (map.get(num) || 0) + 1)
        }
    }
     return operators
}

console.log(maxOperators([1, 2, 3, 4, 3], 6));