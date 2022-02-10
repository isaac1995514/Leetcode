# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(-1, head)
        prev, slow, fast = dummy, head, head;
        count = n;
        
        while fast:
            fast = fast.next;
            if count > 0:
                count-=1;
            else:
                prev = slow;
                slow = slow.next;
        
        
        prev.next = slow.next;
        
        return dummy.next;