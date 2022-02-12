class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        n = len(arr)
        
        if n < 2:
            return n;
        
        l = 0
        res = 1;
        for r in range(1, n):
            if arr[r] == arr[r-1]:
                l = r;
            else:
                if r > 1:
                    up = arr[r] < arr[r-1] and arr[r-2] < arr[r-1]
                    down = arr[r] > arr[r-1] and arr[r-2] > arr[r-1];
                    
                    if not up and not down:
                        l = r - 1;
                    
                res = max(res, r - l + 1)
        
        return res;
                