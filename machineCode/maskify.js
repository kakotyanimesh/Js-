/*

console.log(maskify('5512103073210694')); 
// 5###########0694
console.log(maskify('4556-3646-0793-5616')); 
// 4###-####-####-5616
console.log(maskify('')); 
// ''
console.log(maskify('paypalisgreat')); 
// paypalisgreat

*/


function maskify(cardNumber) {
    if (typeof cardNumber === 'number') {
        // converting to string => loop use => typeof chck
        cardNumber = cardNumber.toString()
    }

    if(cardNumber.length <= 6){
        return cardNumber
        // optional edge case
    }

    
    const firstNumber = cardNumber[0]
    console.log(firstNumber);
    const lastFourNumber = cardNumber.slice(-4)
    //cardNumber.length - 4
    // (-) => slicing will start from last index => last 4 number


    let maskedNumber = ""

    for (let i = 1; i < cardNumber.length - 4; i++) {
        const char = cardNumber[i]
        maskedNumber += isNaN(char) ? char : "#"
        // if char => number => add # instead of char / if not => add that char like - 
        
        
    }
    return firstNumber + maskedNumber + lastFourNumber
}

console.log(maskify("123-456-1212126788"));
// give value in string



// masify the string

function masifyString(para) {
    if(typeof para !== "string"){
        return "give me string"
    }

    let maskedvalue = ""
    const fourthIndex = para.slice(-4)
    console.log(fourthIndex);

    for (let i = 0; i < para.length - 4; i++) {
        const char = para[i]
        maskedvalue += isNaN(char) ? char  : "#"
        
    }

    return maskedvalue + fourthIndex

}

console.log(masifyString("123adasdadasdsa232asdasd"));



function animeh(string) {
    let number = ""
    let stringff = ""

    for (let i = string.length - 1; i >= 0; i--) {
        const char = string[i]

        if(!isNaN(char)){
            number += char 
        } else {
            stringff += char 
        }
        
       
        
    }
    return number + stringff
}


console.log(animeh("123absaasas12112"));