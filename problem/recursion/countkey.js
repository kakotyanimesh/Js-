// count how many times the given key appears in array


function countIt(arr, key) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === key){
            count ++
        }
        
    }

    return count
}

console.log(countIt([1,2,2,2,3,4], 2));


// recursive

function recursiveCount(arr, key, index = 0) {
    if(index >= arr.length){
        return 0
    }

    return (arr[index] === key ? 1:0) + recursiveCount(arr, key, index + 1)
}

console.log(recursiveCount([1,2,2,2,3,4], 2, 0));