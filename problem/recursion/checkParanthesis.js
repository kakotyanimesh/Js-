//  ["(", "(", ")", ")"]


function checkPara(arr, startIndex = 0, count = 0) {
    if(startIndex === arr.length){
        return count = 0
    }

    if(count < 0){
        return false
    }

    if(arr[startIndex] === "("){
        checkPara(arr, startIndex + 1, count +1)
    } else if(arr[startIndex] === ")"){
        checkPara(arr, startIndex + 1, count - 1)
    } else {
        return false
    }
}