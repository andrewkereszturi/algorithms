var majorityElement = function(nums) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        seen[nums[i]] = (seen[nums[i]] + 1) || 1
        if (seen[nums[i]] > nums.length / 2) {
            return nums[i];
        } 
    } 
};

// 3
console.log(majorityElement([3,2,3]))

// 2
console.log(majorityElement([2,2,1,1,1,2,2]))