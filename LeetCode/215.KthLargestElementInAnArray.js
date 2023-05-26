var findKthLargest = function(nums, k) {
    let sorted = nums.sort((a, b) => a - b)
    return sorted[sorted.length - k]
};