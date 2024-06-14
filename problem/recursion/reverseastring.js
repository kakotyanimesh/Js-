
// function reverseaString(string){
//     let reverse =""
//     let length = string.length -1

//     while(length >= 0){
//         reverse += string[length]
//         length = length -1
//     }

//     return reverse
// }

// console.log(reverseaString("animesh"));




let recursivereversestring = (string) => {
    if(string === '') return string

    let reverse = recursivereversestring(string.substring(0, string.length - 1))
    let result = string[string.length -1] + reverse

    console.log(`Reversing: Last char: ${string[string.length- 1]} added in front of ${reverse} to form a result: ${result}`)
    return result
}

console.log(recursivereversestring("animesh"));



let ittreateREVSERSE = (string) => {
    let reverse = ""
    let length = string.length - 1

    while (length >= 0) {
        reverse += string[length]
        length = length -1
    }
    return reverse
}

console.log(ittreateREVSERSE("kakoty"));


function recursive(string) {
    if (string === "") {
        return string
    }

    let reverse = recursive(string.substring(0, string.length-1))
    let result = string[string.length - 1] + reverse

    return result
}

console.log(recursive("popopop"));