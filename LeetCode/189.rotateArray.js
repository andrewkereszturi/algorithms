var rotate = function(nums, k) {

    if(nums.length === 1) {
        return nums
    }

    let arr = [...nums]

    if (k > nums.length) {
        k = k % nums.length
    }

    for(let i = 0; i < nums.length; i++) {
        if(i - k >= 0) {
          nums[i] = arr[i - k]
        } else {
          nums[i] = arr[nums.length + (i - k)]
        }
    }
};
