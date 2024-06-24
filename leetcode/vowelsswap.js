function swapvowels(string) {
    const vowels = "aeiouAEIOU"
    const character = string.split('')

    let left = 0
    let right = string.length - 1

    while (left < right) {
        
        while (left < right && vowels.indexOf(character[left]) === -1) {
            left++
        }
        while (left < right && vowels.indexOf(character[right]) === -1) {
            right--
        }

        // swap
         let temp = character[right]
        character[right] = character[left]
        character[left] = temp

        left++
        right--
    }

    return character.join("")
}
console.log(swapvowels("ANIMESH"));