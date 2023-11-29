var uniqueOccurrences = function(arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        if(!map[arr[i]]) {
           map[arr[i]] = 1 
        } else {
           map[arr[i]]++
        }
    }  
    let occurences = Object.values(map)
     occurences = occurences.sort()
     for (let i = 0; i < occurences.length; i++) {
        if (occurences[i] === occurences[i+1]) {
           return false;
        }
     }
     return true
};