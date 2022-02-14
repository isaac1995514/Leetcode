# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy = ListNode(-1, head);
        prev = dummy
        curr = head;
        c = 1;
        while c < left:
            prev = curr;
            curr = curr.next;
            c+=1;
        
        def reverse(r, idx):
            if idx == right:
                return (r, r.next);
            
            newHead = reverse(r.next, idx+1)
            r.next.next = r;
            r.next = None;
            
            return newHead;a
        
        (newHead, remain) = reverse(curr, c)
        
        prev.next = newHead;
        curr.next = remain;
        
        return dummy.next;
                