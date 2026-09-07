class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
            const pairs = { ')': '(', '}': '{', ']': '[' };
    const stack = [];

    for (let b of s) {
        if (b === '(' || b === '{' || b === '[') {
            stack.push(b);
        } else {
            if (stack.pop() !== pairs[b]) return false;
        }
    }

    return stack.length === 0;
    }
}
//my version
//   function isValid(s){
//     if(s.length < 1) return false
//     let match = (b1, b2)=>{
//         if(b1 === '(' && b2 === ')'){return true }
//         else if(b1 === '{' && b2 === '}'){return true }
//         else if(b1 === '[' && b2 === ']'){return true }
//         else {return false}
//     }
//     let isOpen = (bracket)=>{
//         if(bracket === '('){return true}
//         else if(bracket === '{'){return true}
//         else if (bracket === '['){return true}
//         else{return false}
//     }
//     let stack = []
//     for(let b of s){
//       stack.push(b)
//       if(!isOpen(b)){
//         if(match(stack[stack.length -2], b)){
//             stack.pop()
//             stack.pop()
//         }else{
//             return false
//         }
//       }
//     }
//     if(stack.length === 0) {return true}
//     else{return false}
// }