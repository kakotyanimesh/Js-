function removeStar(s) {
    let stack  = []

    for (const char of s) {
        if(char === "*"){
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    
    return stack.join("")
    
}

console.log(removeStar("leet**cod*e"));