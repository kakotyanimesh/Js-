// find pivot point index => if big , dont touch => i++ and exchange with jth 

function quickSort(array, low = 0, high = array.length - 1) {
    if(low < high){
        let pivotIndex = partition(array, low, high)

        quickSort(array, low, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, high)
    }
    return array
}

function partition(array, low, high) {
    let pivot = array[high]
    let i = low - 1

    for(let j = low; j < high; j++){   // run till high
        if(array[j] < pivot){ // compare with pivot    
            i++
            // swap 
            [array[i], array[j]] = [array[j], array[i]]
        }
    }
    // final swap => array[high] = array[j]
    [array[i+1], array[high]] = [array[high], array[i+1]]
    return i + 1
}

console.log(quickSort([8, 2, 4, 7, 1, 3, 9, 6, 5]));


// function quickSort(array, low = 0, high = array.length - 1) {
//     if(low < high){
//         let pivotPoint = partition(array, low, high)

//         quickSort(array, low, pivotPoint - 1)
//         quickSort(array, pivotPoint + 1, high)
//     }
//     return array
// }


// function partition(array, low, high) {
//     let pivot = array[high]
//     let i = low - 1

//     for(let j = low; j < high; j++){
//         if(array[j] < pivot){
//             i++
//             [array[j], array[i]] = [array[i], array[j]]
//         }
//     }
//     // array[j] = array[high]
//     [array[i+1], array[high]] = [array[high], array[i+1]]
//     return i + 1 // pivots new index
// }

// console.log(quickSort([8, 2, 4, 7, 1, 3, 9, 6, 5]));