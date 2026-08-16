class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
    let prefix = []
    let suffix = []
    let product = 1
    let l = nums.length -1
    for(let i = 0; i < nums.length ; i++){
        if(nums[i-1] === undefined){
            prefix.push(1)
        }else{
        prefix.push( product *= nums[i - 1])}
    }
    product = 1
    for(let i = nums.length -1; i >= 0  ; i--){
        if(nums[i+1] === undefined){
            suffix.push(1)
        }else{
        suffix.push(product *= nums[i + 1])}
    }
     for(let i = 0; i < nums.length ; i++){
         res.push(prefix[i] * suffix[l])
         l--
     }
    return res
    }
}
