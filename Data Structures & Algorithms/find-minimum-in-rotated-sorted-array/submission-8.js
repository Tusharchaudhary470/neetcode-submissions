class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
let min = Infinity
    let left = 0
    let right = nums.length -1
    let maxIndex = 0
    if(nums[left] < nums[right]) return nums[0]

   
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        min = Math.min(min, nums[mid])
        if(nums[mid] < nums[right] ){
               if(nums[mid + 1] !== nums[mid] + 1){
                  min = Math.min(min,nums[mid - 1]? nums[mid -1] : Infinity)
               }else if(nums[mid - 1] !== nums[mid] - 1){
                    min = Math.min(min,nums[mid - 1]? nums[mid -1] : Infinity )
               }
              right = mid - 1
        }else{
            if(nums[mid - 1] !== nums[mid] - 1){
                    min = Math.min(min,nums[mid - 1]? nums[mid -1] : Infinity)
               }else if(nums[mid + 1] !== nums[mid] + 1){
                  min = Math.min(min,nums[mid - 1]? nums[mid -1] : Infinity)
               }
            left = mid + 1   
        }
    }
    return min
    }
}
