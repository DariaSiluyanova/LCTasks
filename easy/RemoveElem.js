//https://leetcode.com/problems/remove-element/submissions/1155330144/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = (nums, val) => {
    return nums.filter((num) => num !== val)
};

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))
