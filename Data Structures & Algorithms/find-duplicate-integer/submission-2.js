class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
    let slow = nums[0]
    let fast = nums[nums[0]]

    while(slow !== fast ){
        slow = nums[slow] 
        fast = nums[nums[fast]]
       
    }
    let newP = 0
    while(slow !== newP){
        slow = nums[slow]
        newP = nums[newP]
    }
    return newP
    }
}
