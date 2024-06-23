function mergeString(word1, word2) {
    let merge = ""
    let i = 0
    let j = 0

    while (i < word1.length && j < word2.length) {
        merge += word1[i]
        merge += word2[j]
        i++
        j++
    }

    // add reminder

    while(i < word1.length){
        merge += word1[i]
        i++
    }
    while(j < word2.length){
        merge += word2[j]
        j++
    }

    return merge
}

console.log(mergeString("animesh", "kakoty"));