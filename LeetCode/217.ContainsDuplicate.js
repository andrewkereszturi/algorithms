var containsDuplicate = function(nums) {
    let seen = {}
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]] === true) {
            return true
        } else {
            seen[nums[i]] = true
        }
    }
    return false
};

// One line solution using set
// var containsDuplicate = function(nums) {
//     return new Set(nums).size !== nums.length;
// };