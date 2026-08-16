class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let maps = {}
        for(let i = 0; i < strs.length; i++ ){
            let ch = strs[i].split('').sort().join('')
            if(maps[ch] === undefined){
                maps[ch] = []
            }
            maps[ch].push(strs[i])
            
        }
        return Object.values(maps)
    }
}
