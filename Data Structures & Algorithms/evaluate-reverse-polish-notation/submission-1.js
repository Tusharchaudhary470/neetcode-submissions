class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    let stack = []
    let result = 0
    for(let r = 0; r < tokens.length; r++){
       
       switch (tokens[r]){
       
        case '+':
        result = stack[stack.length -2] + stack[stack.length -1] 
        stack.pop()
        stack.pop()
        stack.push(result)
        break;

        case '-':
        result = stack[stack.length -2] - stack[stack.length -1] 
        stack.pop()
        stack.pop()
        stack.push(result)
        break;
        
        case '*':
        result = stack[stack.length -2] * stack[stack.length -1] 
        stack.pop()
        stack.pop()
        stack.push(result)
        break;
        
        case '/':
        result = Math.trunc(stack[stack.length -2] / stack[stack.length -1] )
        stack.pop()
        stack.pop()
        stack.push(result)
        break;  
        default:
        stack.push(Number(tokens[r]))

       }
        
    }
    return stack[stack.length-1]
    }
}
