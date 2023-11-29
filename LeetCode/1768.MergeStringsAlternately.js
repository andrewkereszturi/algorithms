var mergeAlternately = function(word1, word2) {

    let merged = ''

    for(let i = 0; i < word1.length; i++) {
       merged = merged + word1[i]
       if(word2[i]) {
           merged = merged + word2[i]
       }
    }

    if(word2.length > word1.length) {
        merged = merged + word2.slice(word1.length, word2.length)
    }
    
    return merged;


    // Recursive 
    
    // let merged = ''

    // if (word1.length < 1) {
    //     return merged + word2
    // } else if (word2.length < 1) {
    //     return merged + word1
    // }

    // merged = merged + word1[0] + word2[0]

    // return merged + mergeAlternately(word1.substring(1), word2.substring(1))
    
};