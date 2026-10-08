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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let head2 = slow.next;
        slow.next = null;
        let prev = null;
        let current = head2;
        while (current !== null) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        let res = head;
        while (prev !== null && res !== null) {
            let temp = res.next;
            let prev2 = prev.next;
            res.next = prev;
            prev.next = temp;
            res = temp;
            prev = prev2;
        }
        return head;
    }
}
