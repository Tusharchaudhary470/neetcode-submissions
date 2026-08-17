class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
      let l = 0, countmap =  {}, maxlength = 0, maxcount = 0
        for(let r = 0;  r < s.length; r++){
         let ch = s[r]
         countmap[ch] = (countmap[ch] || 0) + 1
         maxcount  = Math.max(maxcount, countmap[ch])
         while((r- l +1) - maxcount > k){
            let lch = s[l]
            countmap[lch]--
            l++
         }
         maxlength = Math.max(maxlength, r - l+1)
        }
        return maxlength
    }
}
