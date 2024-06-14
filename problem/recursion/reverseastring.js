
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





function recursiveastring(string){
    if(string === "") return string

    let reverse = recursiveastring(string.substring(0, string.length - 1))
    let result = string[string.length -1] + reverse

    return result
}

console.log(recursiveastring("animesh"));