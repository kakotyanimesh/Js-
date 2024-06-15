// find sum till nth position


function getSum(n) {
    
    if (n === 1) {
        return n
    }

    return n + getSum(n-1)
}

console.log(getSum(5));