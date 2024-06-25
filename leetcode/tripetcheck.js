function triplet(nums) {
    let smallest = Infinity
    let secondSmallest = Infinity

    for (const num of nums) {
        if(num <= smallest){  // each num from nums array -> check and update if matched
            smallest = num
        } else if(num <= secondSmallest){
            secondSmallest = num
        } else {
            return true
        }
    }
    return false
}

console.log(triplet([1, 0, 2, 3, 0]));

// smallest : 1 -> 0<1 -> 0 -> 
// secondsmallest : 0> 2-> 2 -> (
// -> 3 
// 0 , 2, 3 -> true