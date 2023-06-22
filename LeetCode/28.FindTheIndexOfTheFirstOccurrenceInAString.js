var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        let checkNeedle = haystack.slice(i, i + needle.length)
        if (needle === checkNeedle) {
            return i;
        } 
    }
    return -1
};
// 0
console.log(strStr("sadbutsad", "sad"));