// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let map = new Map();
        let current = head;
        map.set(null,null)
        while (current !== null) {
        
        let copy = {val: current.val, next : null, random: null}
        map.set(current, copy)
        current = current.next
        }
        current = head
        while(current !== null){
            let copy = map.get(current)
            copy.next = map.get(current.next)
            copy.random = map.get(current.random)
            current = current.next
        }
        return map.get(head)
    }
}
