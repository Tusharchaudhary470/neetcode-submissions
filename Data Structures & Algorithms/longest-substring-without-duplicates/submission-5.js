class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       if(s.length === 0) return 0
       let maxlength = 0
        let seen =  {}
        let l = 0

        for(let r = 0; r < s.length; r++){
         if(seen[s[r]] !== undefined){
            if(seen[s[r]] >= l){
               l = seen[s[r]] + 1
            }
            }
         seen[s[r]] = r
         maxlength = Math.max(maxlength, r + 1 - l)
        }
        return maxlength
    }
}
