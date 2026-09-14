class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
         let carsTimes = [] 
        for(let t = 0; t < position.length; t++){
            let time = (target - position[t])/speed[t]
            carsTimes.push([position[t],time])
        }
        carsTimes.sort(([x,y],[w,z])=> w - x)
        let stack = []
        for(let i = 0; i < position.length; i++){
            stack.push(carsTimes[i])
            if(stack.length > 1 && carsTimes[i][1] <= stack[stack.length -2][1]){
                stack.pop()
            }
            
        }
        return stack.length
        
    }
}
