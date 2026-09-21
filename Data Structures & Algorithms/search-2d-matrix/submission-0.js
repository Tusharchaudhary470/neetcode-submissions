class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0
        let right = matrix.length -1 
        while(left <= right ){
            let midOfMatrix = Math.floor((left + right)/2)
            let first = matrix[midOfMatrix][0]
            let last = matrix[midOfMatrix][matrix[0].length -1]
            let l = 0
            let r = matrix[0].length -1 
            let nums = matrix[midOfMatrix]
            if(target >= first && target <= last ){
                while(l <= r){
                    let mid = Math.floor((l + r)/2)
                    if(target > nums[mid]){
                        l = mid + 1
                    }
                    else if(target < nums[mid]){
                        r = mid - 1
                    }
                    else{
                        return true
                    }
                }
                return false
            }
            else if(target > last){
              left = midOfMatrix + 1
            }
            else if(target < first){
                right = midOfMatrix - 1
            }
            else {
                return false
            }
        }
        return false
    }
}
