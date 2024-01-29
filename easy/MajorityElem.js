//https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
var majorityElement = function (nums) {
    let maj = 0, count = 1;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[maj]) {
        count++
      } else {
        count--;
      }
  
      if (count === 0) {
        maj = i;
        count = 1;
      }
    }
    return nums[maj]
  };

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
