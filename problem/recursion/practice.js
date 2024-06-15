// fibonacci 

function recursiveFibonacci(index) {
    
    if(index <= 1){
        return index
    }

    return (recursiveFibonacci(index-1) + recursiveFibonacci(index-2))
    // fn = fn-1 + fn-2
}

console.log(recursiveFibonacci(5));


function itterativefibonacci(index) {
    let n0 = 0
    let n1 = 1

    for(let i = 0; i < index; i++){
        temp = n0 + n1
        n0 = n1
        n1 = temp
    }

    return n0
}

console.log(itterativefibonacci(5));