//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
var removeDuplicates = function(nums) {
    let length = nums.length;
    
    if (length == 0) return 0;
    let pre = nums[0];
    let flag = false;
    let count = 0;
    // index for updating
    let o = 1;
    for (let i = 1; i < length; i++) {
        let curr = nums[i];
        if (curr == pre) {
            if (!flag) {
                flag = true;
                nums[o++] = curr;
                continue;
            }  
            else {
                count++;
            }
        } 
        else {
            pre = curr;
            nums[o++] = curr;
            flag = false;
        }
    }
    return nums.length - count;
}

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
