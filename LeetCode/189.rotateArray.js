// Initial solution, doesn't pass largest test case
var rotate = function(nums, k) {

    for(let i = 0; i < k % nums.length; i++) {
        let last = nums.splice(nums.length-1, 1)
        nums.unshift(last)
    }

    return nums
};