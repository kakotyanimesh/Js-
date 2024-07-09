// // merge sort



// function mergeSort(array) {
//     // recursive one

//     if (array.length === 1) {
//         return array
//     }

//     const middle = Math.floor(array.length / 2)
//     const left = array.slice(0, middle) // middle is excluded as a rule by slice
//     const right = array.slice(middle)  // till last index so no endindex

//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right){
//     let result = []
//     let leftIndex = 0
//     let rightIndex = 0

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex] < right[rightIndex]){
//             result.push(left[leftIndex])
//             leftIndex++
//         } else {
//             result.push(right[rightIndex])
//             rightIndex++
//         }
//     }
//     return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
// }

// console.log(mergeSort([1, 6, 7, 8, 3, 4, 10 ]));



// // bubble sort => swap => temp
// // i , i + 1


// function bubbleSort(array) {
//     let isSwap
//     do {
//         isSwap = false
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] && array[i+1] && array[i] > array[i+1]) {
//                 // both array[i] and array[i+1] can be used as temporary node
//                 let temp = array[i+1]
//                 array[i+1] = array[i]
//                 array[i] = temp
//                 isSwap = true
//             }
            
//         }
//     } while (isSwap);
//     return array
// }


// console.log(bubbleSort([4, 1, 6, 3]));



// function insertionSwap(array) {
//     for(let i = 1; i < array.length; i++){
//         let current = array[i]
//         let j = i - 1
//         while (j >=0 && array[j] > current) {
//             array[j+1] = array[j]
//             j--
//         }
//         array[j+1] = current
//     }
//     return array
// }

// console.log(insertionSwap([3, 1, 10, 9, 11]));



function mergeSort(array) {
    if(array.length === 1) return array

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right){
    let result = []
    let leftBox = 0
    let rightBox = 0

    while(leftBox < left.length && rightBox < right.length){
        if (left[leftBox] < right[rightBox]) {
            result.push(left[leftBox])
            leftBox++
        } else {
            result.push(right[rightBox])
            rightBox++
        }
    }
    return [...result, ...left.slice(leftBox), ...right.slice(rightBox)]
}

console.log(mergeSort([1, 6, 7, 8, 4, 2, 3]));


function insertionSwa(array) {
    for (let i = 0; i < array.length; i++) {
        let current = array[i]
        let j = i -1

        while(j >=0 && array[j] > current){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = current
    }
    return array
}

console.log(insertionSwa([4, 2, 1, 7, 9, 6]));


function bubbleSorrtt(array) {
    let isSwap;
    do {
        isSwap = false
        for (let i = 0; i < array.length; i++) {
            if(array[i] && array[i+1] && array[i+1] < array[i]){
                let temp = array[i+1]
                array[i+1] = array[i]
                array[i] = temp
                isSwap = true
            }
            
        }
    } while (isSwap);
    return array
}

console.log(bubbleSorrtt([3, 1, 4, 5, 2, 10]));