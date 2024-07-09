// merge sort => break it then merge it 

//     [6, 5, 3, 1, 8, 7, 2, 4] 
//     => [6, 5, 3, 1]                 ||||  [8, 7, 2, 4] 
//     => [6, 5] | [3, 1]             ||||   [8, 7] | [2, 4]
//     =>  [6] |  [5] |  [3] |  [1]  ||||    [8] |  [7] |  [2] |  [4] 
//     => breaking done as array.length === 1
//     => merging start => comparing <
//     => 5 < 6 => [5, 6] ||||||  1 < 3 => [1, 3]   
//     => 7 < 8 => [7, 8] ||||||  2 < 4  => [2, 4]
//     => [5, 6] | [1, 3] /////   [7, 8] | [2, 4]
//     => 1 < 3 < 5 < 6 => [1, 3, 5, 6]
//     => 2 < 4 < 7 < 8 => [2, 4, 7, 8]
//     => 1 < 2 < 3 < 4 < 5 < 6 < 7 < 8 
//     => [1, 2, 3, 4, 5, 6, 7, 8]

// boxes needs in interview


function mergeSort(array) {
    // base case single word in array
    if(array.length === 1){
        return array
    }

    const middle = Math.floor(array.length / 2)
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}


function merge(leftArray, rightArray) {
    let result = []
    let leftIArrayndex =  0
    let rightArrayIndex =  0

    while(leftIArrayndex < leftArray.length && rightArrayIndex < rightArray.length){
        if(leftArray[leftIArrayndex] < rightArray[rightArrayIndex]){
            result.push(leftArray[leftIArrayndex])
            leftIArrayndex++
        } else {
            result.push(rightArray[rightArrayIndex])
            rightArrayIndex++
        }
    }
    return [...result, ...leftArray.slice(leftIArrayndex), ...rightArray.slice(rightArrayIndex)]


}


console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4] ));

