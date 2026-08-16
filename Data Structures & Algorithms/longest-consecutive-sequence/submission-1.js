class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    let count = 0, set = new Set(), s = 0
    for(let i = 0; i < nums.length; i++){
        if(!set.has(nums[i])){
           set.add(nums[i])
        }   
    }
    for(let n of nums){
        if(!set.has(n-1)){
            let length = 0
            while(set.has(n+length)){
                length += 1
                count = Math.max(count, length)
            }
        }
    }
    return count
    }
}
