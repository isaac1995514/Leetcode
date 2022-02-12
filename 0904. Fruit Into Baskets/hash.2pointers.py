class Solution:
    def totalFruit(self, arr: List[int]) -> int:
        n = len(arr);
        freq = {}
        res = 1;
        left = 0;
        for right in range(n):
            freq[arr[right]] = 1 + freq.get(arr[right], 0);
            
            while len(freq) > 2:
                
                freq[arr[left]] = freq[arr[left]] - 1;
                
                if freq[arr[left]] == 0:
                    del freq[arr[left]]
                
                left+=1;
            
            res = max(res, right - left + 1)
                
        return res;
        