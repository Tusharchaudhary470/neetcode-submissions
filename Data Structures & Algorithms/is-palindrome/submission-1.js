class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length <= 1) return true
        
        let reversedStr = ""
        let newStr = ""
        for(let i = 0; i < s.length; i++){
            if(/[a-zA-Z0-9]/.test(s[i])){
                newStr += s[i].toLowerCase()
            }
        }
        for(let r = s.length -1; r>=0; r--){
            if(/[a-zA-Z0-9]/.test(s[r])){
                reversedStr += s[r].toLowerCase()
            }
        }
   return (newStr === reversedStr)
    }
}
