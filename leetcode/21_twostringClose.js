/*
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
*/

/*
 algorithim
    => length compare
    => map create
    => charcter & value of word => add to map 
    => set method
    => size of keys in map check 
    => values check 
    => sorting


*/

function twoString(word1, word2){
    if(word1.length !== word2.length) return false

    const frequencyMap1 = new Map()
    const frequencyMap2 = new Map()

    for (const character of word1) {
        frequencyMap1.set(character, (frequencyMap1.get(character) || 0) + 1)
    }

    for (const character of word2) {
        frequencyMap2.set(character, (frequencyMap2.get(character) || 0) + 1)
    }

    const character1 = new Set(frequencyMap1.keys())
    const character2 = new Set(frequencyMap2.keys())

    if(character1.size !== character2.size) return false

    const hasSimilarChar = [...character1].every(char => character2.has(char))

    if(!hasSimilarChar) {
        return false
    }

    const sortedFrequency1 = Array.from(frequencyMap1.values()).sort((a, b) => a - b)
    const sortedFrequency2 = Array.from(frequencyMap2.values()).sort((a, b) => a - b)

    const identicalFrequency = sortedFrequency1 === sortedFrequency2

    if(!identicalFrequency) return false

    return true
}

console.log(twoString("abcde", "aecdb"));