// fibonacci 

// function recursiveFibonacci(index) {
    
//     if(index <= 1){
//         return index
//     }

//     return (recursiveFibonacci(index-1) + recursiveFibonacci(index-2))
//     // fn = fn-1 + fn-2
// }

console.log(recursiveFibonacci(5));

function recursiveFibonacci(index) {

    if(index <= 1){
        return index
    }

    return (recursiveFibonacci(index - 1) + recursiveFibonacci(index - 2))
    
}


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



// function recursiveRemoveTabsandSpaces(inputString) {
//     if(inputString.length === 0){
//         return ""
//     }

//     let firstChar = inputString[0]
//     let reststring = inputString.slice(1)

//     if(firstChar === " " || firstChar === "\t"){
//         return recursiveRemoveTabsandSpaces(reststring)
//     }




//     return firstChar + recursiveRemoveTabsandSpaces(reststring)
// }

// console.log(recursiveRemoveTabsandSpaces("aneimas          adasdsad"));


function rats(inputstring) {
   
    if(inputstring.length === 0){
        return ""
    }
    
    let firstchar = inputstring[0]
    let reststring = inputstring.slice(1)

    if(firstchar === " " || firstchar === "\t"){
        return rats(reststring)
    }

    return firstchar + rats(reststring)
}

console.log(rats("a b   c"));


function recurLength(string) {
    if(string === "") return 0

    return 1 + recurLength(string.substring(1))
}

console.log(recurLength("animesh"));


function palindrome(string) {
    if(string.length <= 1) return true

    if(string[0] === string[string.length-1]){
        return palindrome(string.substring(1, string.length-1))
    }

    return false
}

console.log(palindrome("madam"));






// implement .length 

function implementLength(string) {
    if(string === ""){
        return 0
    }


    return 1 + implementLength(string.substring(1))
}

console.log(implementLength("abc"));