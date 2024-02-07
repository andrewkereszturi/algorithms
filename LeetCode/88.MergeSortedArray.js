var merge = function(nums1, m, nums2, n) {
    nums1.unshift(...nums2)
    nums1.splice(m+n, n)
    nums1.sort((a, b) => a - b)
};