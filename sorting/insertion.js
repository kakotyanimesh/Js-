function insertionSwap(array) {
    for(let i = 0; i < array.length; i++){
        let current = array[i]
        let j  = i - 1
        // console.log(j);

        while(j >= 0 && array[j] > current){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = current
    }
    return array
}

console.log(insertionSwap([1, 6, 7, 3, 9]));