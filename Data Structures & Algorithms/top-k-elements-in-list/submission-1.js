class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
   topKFrequent(nums, k) {
    let freq = {};

    // Count frequency
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Convert object to array of [number, frequency]
    let arr = Object.entries(freq);

    // Sort by frequency (highest first)
    arr.sort((a, b) => b[1] - a[1]);

    // Take first k elements
    let ans = [];

    for (let i = 0; i < k; i++) {
        ans.push(Number(arr[i][0]));
    }

    return ans;
}
}
