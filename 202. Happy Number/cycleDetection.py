# Problem is interesting because it uses
# fast and slow (pointer) for detecting cycles
# which could be apply to different graph, tree
# cycle detection algorithm
class Solution:
    def isHappy(self, n: int) -> bool:
        def calc(num):
            res = 0;
            for ch in str(num):
                res += (int(ch) ** 2)
            
            return res;
        
        slow, fast = n, calc(n);
        
        while fast != 1:
            slow = calc(slow);
            fast = calc(calc(fast))
            
            if slow == fast:
                return False;
        
        return True;
        