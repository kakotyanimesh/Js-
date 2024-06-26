var maxArea = function(height) {
  let maxWine = 0
  let leftPointer = 0
  let rightPointer = height.length - 1
  
  while (leftPointer < rightPointer) {
    let newHeight = Math.min(height[leftPointer], height[rightPointer])
    let width = rightPointer - leftPointer

    let area = newHeight * width

    maxWine = Math.max(maxWine, area)

    if(height[leftPointer] < height[rightPointer]){
        leftPointer++
    } else {
        rightPointer--
    }
  }
  return maxWine
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));