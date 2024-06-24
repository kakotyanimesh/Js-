function reverseWords(s) {
    let result = [] // array to store reverse words
    let length = s.length

    let word= "" // temp to store words

    for (let i = 0; i < length; i++) {
        if(s[i] !== " "){
            word += s[i]
        } else if(word.length > 0){
            result.unshift(word)
            word = ""
        }
    }
    

    // last word who's next index is not space
    if (word.length > 0) {
        result.unshift(word)
    }
    
    return result.join(" ")
}

s = "the sky is blue"
console.log(reverseWords(s))





function reverse(s) {
    let result = []
    let length = s.length
    let word = ""

    for (let i = 0; i < length; i++) {
        if(s[i] !== " "){
            word += s[i]
        } else if(word.length > 0){
            result.unshift(word)
            word = ""
        }    
    }

    if(word.length > 0){
        result.unshift(word)
    }

    return result.join(" ")
    
}

console.log(reverse("animesh kakty"));