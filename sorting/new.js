// merge sort



function mergeSort(array) {
    // recursive one

    if (array.length === 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle) // middle is excluded as a rule by slice
    const right = array.slice(middle)  // till last index so no endindex

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

console.log(mergeSort([1, 6, 7, 8, 3, 4, 10 ]));