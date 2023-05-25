// Initial solution, doesn't pass largest test case
var rotate = function(nums, k) {

    // for(let i = 0; i < k % nums.length; i++) {
    //     let last = nums.splice(nums.length-1, 1)
    //     nums.unshift(last)
    // }
    let arr = [...nums]
    for(let i = 0; i < nums.length; i++) {
        if(i - k >= 0) {
          nums[i] = arr[i - k]
        } else {

        nums[i] = arr[nums.length - (Math.abs(i-k) % nums.length)]

        }
    }

    return nums
};