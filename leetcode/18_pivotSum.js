/*
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
*/

function pivotSum(nums) {
    // calculate totalSum => reduce method
    const totalSum = nums.reduce((acc, num) => acc+ num, 0)

    let leftSum = 0
    for(let i = 0; i < nums.length; i++){
        // Calculate the right sum by subtracting the left sum and the current element from the total sum
        let rightSum = totalSum - leftSum - nums[i]

        if(rightSum === leftSum) return i

        // Update the left sum by adding the current element
        leftSum += nums[i]
    }
    return -1

}

console.log(pivotSum([1, 7, 3, 6, 5, 6]));