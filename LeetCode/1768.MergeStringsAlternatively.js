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
};