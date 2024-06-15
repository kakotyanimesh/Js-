// arr =[1,2,3,4,6]
// finme = 4
// current index = 0

// we have to find first occurance 4 -> if present -> true otherwise false

// current index is to set from where the loop will look after for that findMe


function recursiveFirstOcc(arr, findMe, currentIndex) {

    if(arr.length == currentIndex){
        return -1
    }

    if (arr[currentIndex] === findMe) {
        return currentIndex
    }


    return recursiveFirstOcc(arr, findMe, currentIndex + 1)
    
}

console.log(recursiveFirstOcc([1,2,3,3,2,4], 2, 0));



// simpleone

function ittreatefirstOcc(arr, findMe, currentIndex) {
    
    while (currentIndex < arr.length) {
        if (arr[currentIndex] === findMe) {
            return currentIndex
        }

        currentIndex += 1
    }
    return -1
}

console.log(ittreatefirstOcc([1,2,3,3,2,4], 2, 0));