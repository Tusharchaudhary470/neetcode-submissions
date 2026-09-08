class MinStack {
    constructor(){
        this.stack = []
        this.minarr = []
        this.min = Infinity
    }

    push(val) {   
        this.min = Math.min(this.min, val)
        this.stack.push(val)
        
        this.minarr.push(this.min)
        return this.minarr
    }
  
    pop() {
        this.minarr.pop()
        this.stack.pop()
        if( this.minarr[this.minarr.length -1] === undefined){this.min = Infinity}
        else{this.min = this.minarr[this.minarr.length -1]}
    }

    top() {
          if (this.stack.length === 0) return null
        return this.stack[this.stack.length -1]
    }

    getMin() {
        if (this.stack.length === 0) return null
        return this.minarr[this.stack.length -1]
    } 
}
