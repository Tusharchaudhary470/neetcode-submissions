class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

  
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)  ){
            this.keyStore.set(key,[])  
        }
         
        this.keyStore.get(key).push([value,timestamp])
    }

    
    get(key, timestamp) {
        let left = 0
        
        let entiries = this.keyStore.get(key)
        if(!entiries) return ""
        let right = entiries.length -1
        let result = ""
        let max = -Infinity
        while(left <= right){
            let mid = Math.floor((left + right)/ 2)
            
            if(entiries[mid][1] === timestamp){
                return entiries[mid][0]
            } else if(entiries[mid][1] < timestamp){
                   if(max < entiries[mid][1]){
                    max = entiries[mid][1]
                    result = entiries[mid][0]
                   }
                   left = mid + 1
            }else {
                right = mid - 1
            }
        }
        return result
    }
}