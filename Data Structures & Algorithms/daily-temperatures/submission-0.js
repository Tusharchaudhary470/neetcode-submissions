class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
         let stack = []
    let res = Array(temperatures.length).fill(0);

    for(let t = 0; t < temperatures.length; t++){
        
        while(temperatures[t] > temperatures[stack[stack.length -1]] && stack.length !== 0){
            let popedidnex = stack[stack.length -1 ]
            stack.pop()
            res[popedidnex] = t - popedidnex
        }
        stack.push(t)
    }
    
    return res
    }
}
