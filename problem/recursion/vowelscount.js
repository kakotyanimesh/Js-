function isVowels(char) {
    let lowerchar = char.toLowerCase()
    let vowels = "aeiou"

    if(vowels.indexOf(lowerchar) !== -1){
        return true
    } else {
        return false
    }
    
}


function recursiveCountVowel(string, stringLength) {
    if(stringLength == 1){
        return Number(isVowels(string[0])) 
        // check if the 0th index is vowel or not -> true -> 1 / false -> 0 as use of Number()

    }

    return recursiveCountVowel(string, stringLength - 1) + isVowels(string[stringLength - 1])
    
}


let str = "animesh"

console.log(recursiveCountVowel(str, str.length));



function countVowels(string) {
    let count = 0

    for (let i = 0; i < string.length; i++) {
        if(isVowels(string[i])){
            count += 1
        }
        

    }
    return count
}

console.log(countVowels("animesh"));