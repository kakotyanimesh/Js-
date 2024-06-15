
// remove tabs and spaces from the string

// base case -> 
    // check till nth index and if length of string became 0 unwind it 
// algo => 
    // extract firstCharacter and restString
    // check if firstCharacter is tab or space -> recursively return the restString
    // if not add firstcharacter with reststring and run recursively 

function recursiveRemoveTabsandSpaces(inputString){
    // base case 
    if(inputString.length === 0){
        return ""
    }

    let firstChar = inputString[0]
    let restString = inputString.slice(1)

    // 
    if(firstChar === " " || firstChar === "\t"){
        return recursiveRemoveTabsandSpaces(restString)
    }

    return firstChar + recursiveRemoveTabsandSpaces(restString)
}







// itterative


function itterativeRTAS(inputString) {
    let result = ""

    for (let i = 0; i < inputString.length; i++) {
        let charter = inputString[i]

        if(charter !== " " && charter !== "\t"){
            result += charter
        }
        
    }

    return result
}

console.log(itterativeRTAS("animesh   kakoty"));