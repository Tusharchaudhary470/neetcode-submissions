class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        for(let r = nums.length -1; r >= 0; r--){
            if(nums[r] === target){
                return r
            }
            if(nums[l] === target){
                return l
            }
            l++
        }
        return -1
    }
}
