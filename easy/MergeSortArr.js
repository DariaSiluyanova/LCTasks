//https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1; 

    while(j >= 0) {
        if(i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        } else {
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([0], 0, [1], 1))
console.log(merge([2,0], 1, [1], 1))

