class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        res = total = 0;
        freq = {}
        freq[0] = 1;
        
        for num in nums:
            total += num;
            diff = total - k;
            
            if diff in freq:
                res += freq[diff];
            
            freq[total] = freq.get(total, 0) + 1;
        
        return res;
            