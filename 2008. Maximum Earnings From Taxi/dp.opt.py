class Solution:
    def maxTaxiEarnings(self, n: int, rides: List[List[int]]) -> int:
        map = {};
        for ride in rides:
            [start, end, tip] = ride;
            if(end not in map):
                map[end] = []
            map[end].append(ride)
            
        dp = [0] * (n+1);
        
        for i in range(n+1):
            # No ride ends at i
            if i not in map:
                dp[i] = dp[i-1];
            else:
                currMax = 0
                for ride in map[i]:
                    currCost = ride[1] - ride[0] + ride[2]
                    currMax = max(
                        currMax,
                        currCost + dp[ride[0]]
                    )
                
                dp[i] = max(
                    dp[i-1],
                    currMax
                )
        return dp[n]
            