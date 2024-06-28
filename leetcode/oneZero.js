function longestSubarray(nums) {
    let left = 0, right = 0, zeroCount = 0, maxLength = 0

    for(; right < nums.length; right++){
        if(nums[right] === 0) zeroCount++

        while(zeroCount > 1){      // only include 1 zero 
            if(nums[left] === 0 ) zeroCount--
            left++
        }

        if(zeroCount = 1){
            maxLength = Math.max(maxLength, right - left) 
        }
    }
    return maxLength
}

console.log(longestSubarray([0,1,1,1,0,1,1,1, 1,  0, 0, 1, 1, 0, 1]));