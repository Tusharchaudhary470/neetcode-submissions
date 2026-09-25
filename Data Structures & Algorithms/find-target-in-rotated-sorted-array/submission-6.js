class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
 let left = 0
    let right = nums.length - 1
    while( left <= right){
        let mid = Math.floor((left + right)/2)
        console.log(nums[mid])
        if(nums[mid] === target){
            return mid
        }
        else if(nums[mid] > nums[right]){
            
            if(target === nums[right]){
                return right
                
            }else if (target > nums[right] && target < nums[mid]){
                right = mid -1
            }else{
                left = mid + 1
            }
        }else {
            if( target === nums[right] ){
                   return right 
            }else if (target < nums[right] && target > nums[mid]){
               
                 left = mid + 1 
            }else{
                right = mid -1      
            }
            
        }
        
    }
      return -1 
    }
}
