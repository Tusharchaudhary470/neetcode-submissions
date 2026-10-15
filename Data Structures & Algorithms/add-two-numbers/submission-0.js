/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        
        let current1 = l1;
        let current2 = l2;
        
        let dummynode = {val: 0, next: null}
        let dummycurrent = dummynode;
        let carry = 0
        
        while(current1 !== null || current2 !== null || carry > 0){
            let val1 = current1 === null? 0: current1.val
            let val2 = current2 === null? 0: current2.val
            let sum = val1 + val2 + carry

            //dummycurrent.val = (sum % 10)
            //fixed some changes
            carry = Math.floor(sum/10)
            dummycurrent.next = {val : (sum % 10), next: null}
            dummycurrent = dummycurrent.next
            
            
            if(current1 !== null){current1 = current1.next}
            if(current2 !== null){current2 = current2.next}
            // if(carry > 0 || current1 !== null || current2 !== null){
            //     dummycurrent.next = {val: 1, next: null}
            // }
            
            // dummycurrent = dummycurrent.next

        }
        
        // return dummynode
        return dummynode.next
    }
}
