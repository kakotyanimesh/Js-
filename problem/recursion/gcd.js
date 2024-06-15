// base case = > num1 === num2 

// its a math formula
//          m/n if m === n
//          m-n, n  if m> n
//          m, n-m  if n>m
// check notes


function gcd(num1, num2) {
    if(num1 === num2) return num1


    if(num1 > num2){
        return gcd(num1-num2, num2)
    } else {
        return gcd(num1, num2-num1)
    }
}

console.log(gcd(42, 56));