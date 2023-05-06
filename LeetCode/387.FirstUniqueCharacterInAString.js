var firstUniqChar = function(s) {
    // let seen = {}

    // for(let i = 0; i < s.length; i++) {
    //     seen[s[i]] = (seen[s[i]]+1) || 1 ;
    // }

    const seen = letters.reduce((seen, letter) => {
        seen[letter] = (seen[letter] + 1) || 1
        return seen
    }, {});


    for(letter in seen ) {
        if (seen[letter] === 1) {
            return s.indexOf(letter);
        }
    }
    
    return -1;
};

// 0
console.log(firstUniqChar("leetcode"));

// 2
console.log(firstUniqChar("loveleetcode"));

// -1
console.log(firstUniqChar("aabb"));
