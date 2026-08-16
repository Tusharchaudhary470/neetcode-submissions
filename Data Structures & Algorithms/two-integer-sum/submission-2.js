class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map(); // stores value -> index

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            // If we've already seen the complement, we found our pair!
            if (seen.has(complement)) {
                return [seen.get(complement), i];
            }

            // Otherwise, store the current number and its index
            seen.set(nums[i], i);
        }
        return [];
        
        
    }
}
