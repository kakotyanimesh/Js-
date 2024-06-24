function productWithouti(nums) {
    let length = nums.length
    let leftArray = new Array(length).fill(1)
    let rightArray = new Array(length).fill(1)

    let answer = new Array(length)

    // left array fill
    for (let i = 1; i < length; i++) {
        leftArray[i] = nums[i-1] * leftArray[i-1]
        
    }

    // right array
    for (let i = length-2; i >= 0; i--) {
        rightArray[i] = nums[i+1] * rightArray[i+1]
        
    }

    // new array

    for (let i = 0; i < length; i++) {
        answer[i] = leftArray[i] * rightArray[i]        
    }

    return answer
    
}

console.log(productWithouti([1,2,3,4]));