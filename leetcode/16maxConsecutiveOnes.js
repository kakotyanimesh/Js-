var longestOnes = function(nums, k) {
    let left = 0, right = 0, zeroCount = 0, maxLength = 0

    for(; right < nums.length; right++){
        if(nums[right] === 0) zeroCount++

        while (zeroCount > k) {
            if(nums[left] === 0) zeroCount--
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));






