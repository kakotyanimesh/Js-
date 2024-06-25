function moveZeros(nums) {
    let writeIndex = 0

    for(let readIndex = 0; readIndex < nums.length; readIndex++){
        if(nums[readIndex] !== 0){
            nums[writeIndex] = nums[readIndex]
            writeIndex++
        }
    }

    // moves zeros to end

    for(; writeIndex < nums.length; writeIndex++){
        nums[writeIndex] = 0
    }

    return nums
    
}

console.log(moveZeros([0, 1, 0, 3, 13]));


