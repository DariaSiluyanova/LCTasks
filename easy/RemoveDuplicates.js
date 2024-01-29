/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var seen = {};
    return nums.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    })
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
