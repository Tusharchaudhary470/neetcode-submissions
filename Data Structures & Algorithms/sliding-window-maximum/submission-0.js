class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
    let l = 0
   let list = []
   let res = []
   for(let r = 0; r < nums.length; r++){
    
    while(r-l+1 > k){
      l++
    }
    while(nums[list[list.length - 1]] < nums[r]){
      list.pop()
    }
    
    while(list[0] < l ){
      list.shift()
    }
    list.push(r)
    if(r - l + 1 === k){
      res.push(nums[list[0]])
    }
   } 
   return res
    }
}
