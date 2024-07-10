// index not the value 


function selectionSort(arr) {

    const n = arr.length

    for (let i = 0; i < n - 1; i++) { // n-1 => last element will be sorted before it reaches it 
        let minIndex = i

        for (let j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
            
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([8, 2, 4, 7, 1, 3, 9, 6, 5]));