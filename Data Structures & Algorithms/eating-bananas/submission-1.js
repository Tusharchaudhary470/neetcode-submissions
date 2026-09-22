class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let r = 0
    let l = 1
     let minRate = Infinity
    for(let i = 0; i < piles.length; i++)
    {
        r = Math.max(r, piles[i])
    }
    while(l <= r){
        let mid = Math.floor((l + r)/2)
        let times = 0
       
        for(let i = 0; i < piles.length; i++){
           times += Math.ceil(piles[i]/mid)
        }
        if(times <= h){
           minRate = Math.min(minRate, mid)
           r = mid - 1
        }else{
         l = mid + 1
        }
        
    }
    return minRate  
    }
}
