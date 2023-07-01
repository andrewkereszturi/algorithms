const sorter = (a, b) => {
    return a - b;
}

var longestConsecutive = function(nums) {

    var uniqueAndSorted = [...new Set(nums)].sort(sorter) 

    if (uniqueAndSorted.length === 1) {
        return 1;
    }
    if (uniqueAndSorted.length === 0) {
        return 0;
    }
    let longest = 1;
    let temp = 0;

    for (let i = 0; i < uniqueAndSorted.length; i++) {
        if (uniqueAndSorted[i] + 1 === uniqueAndSorted[i+1]) {
            if(uniqueAndSorted[i] + 2 !== uniqueAndSorted[i+2]) {
                temp += 2
            } else {
                temp++
            }
            if (temp > longest) {
                longest = temp;
            }
        } 
        else {
            temp = 0
        }
    }
    return longest;
};