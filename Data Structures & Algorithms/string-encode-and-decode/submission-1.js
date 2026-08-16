class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = ""
      for(let str of strs){
          s += str.length+"#"+str
      } 
   
      return s
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let k = 0, strv = "", wstr = "", arr = [] 
    for(let i =0; i < str.length; i++){ 
    if(str[i] !== '#'){ 
     strv += str[i] 
     k = Number(strv)
    }
    
    else{
        strv = ""
        for(let z = 0; z < k; z++){
            i++
            wstr += str[i]
        }
        arr.push(wstr)
        wstr = ""
    }
    }
    return arr
    }
}
