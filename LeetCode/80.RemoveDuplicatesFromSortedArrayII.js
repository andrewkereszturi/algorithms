var removeDuplicates = function(nums) {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        if (!seen[nums[i]]) {
            seen[nums[i]] = 1
        } else if (seen[nums[i]] === 1) {
            seen[nums[i]]++
        } else {
            nums.splice(i,1)
            i--
        }
    }
    return nums.length;
};