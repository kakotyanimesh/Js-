// 0, 1
// 0, 1, 1(0+1)
// 0, 1, 1, 2(1+1)
// 0, 1, 1, 2, 3(1+2)  
// 0, 1, 1, 2, 3, 5(2+3)
// 0, 1, 1, 2, 3, 5, 8(3+5)

// Fn = Fn-1 + Fn-2

// find fibo value at given index (value)

// itterative

function itterativefibonacci(index) {
    let n0 = 0
    let n1 = 1

    for(let i = 0; i< index; i++){
        temp = n0 + n1
        n0 = n1
        n1 = temp
    }
    return n0

    // returning n0 because it holds the 5th index value and the n1 holds 6th index value
}

console.log(itterativefibonacci(5));


// recursive
// Fn = Fn-1 + Fn-2

function recursiveFibonacci(index) {

//  fib(0) = 0 and fib(1) = 1 , so its the base case
    if (index <= 1) {
        return index
    }

    return (recursiveFibonacci(index-1) + recursiveFibonacci(index -2))
    
}

console.log(recursiveFibonacci(5));