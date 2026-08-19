class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let compareMaps = (map1, map2)=>{
            if(map1.size > map2.size) return false

              for(let [key, value] of map1){
                if(map2.get(key) !== value) {
                return false
               }
           }
        return true
        }
        let freq = new Map();
        for(let char of s1){
            freq.set(char, (freq.get(char) || 0) + 1)
        }
        let window = new Map()
        let l = 0
        for(let r = 0; r < s2.length; r++){
            let char = s2[r]
            window.set(char, (window.get(char) || 0) + 1)
            if(r - l + 1 > s1.length){
             let remove = s2[l];

            window.set(remove, window.get(remove) - 1);

            if (window.get(remove) === 0) {
            window.delete(remove);
            }

            l++;
            }
            if(compareMaps(freq, window)){
                return true
            }
        }
        

        return false
    }
}
