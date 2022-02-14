/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    
    let remain = null;
    
    let c = 1;
    let dummy = new ListNode(-1, head)
    let curr = head, prev = dummy;
    while(c < left){
        prev = curr
        curr = curr.next;
        c++
    }
    
    const reverse = (r, idx) => {
        if(idx === right){
            remain = r.next;
            return r;
        }
        
        const newHead = reverse(r.next, idx+1);
        r.next.next = r;
        r.next = null;
        return newHead;
    }
    
    const newHead = reverse(curr, c);
    
    prev.next = newHead;
    curr.next = remain;
    
    return dummy.next;
    
};