// bubble sort => algo to write things in ascending or descending order
// [4, 1, 3, 2] => check first two elements  => 4,1 => 4 > 1 => swap 
    //      [1, 4, 3, 2]    
// [1, 4, 3, 2] => check next two => 4, 3 => 4 > 3 => swipe 
    //      [1, 3, 4, 2] => check two => 4, 2 => 4 > 2 => swipe
// [1, 3, 2, 4] => do it again 
// => 3 > 2 => swipe 
// [1, 2, 3, 4]


function bubbleSort(array) {
    let isSwap

    do {
        isSwap = false
        for(let i = 0; i < array.length; i++){
            if(array[i] && array[i+1] && array[i] > array[i+1] ){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                isSwap = true
            }
        }
    } while (isSwap);
    return array
}

console.log(bubbleSort([4,1,3,2]));