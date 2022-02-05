class Solution:
    def numTeams(self, rating: List[int]) -> int:
        res = 0;
        n = len(rating);
        smaller, greater = [0] * n, [0] * n;

        for i in range(0, n):
            for j in range(0, i):
                # Check if j is greater than i
                if rating[j] > rating[i]:
                    greater[i] += 1; # The element j is greater than i
                    res += greater[j];
                
                # Check if j is smaller than i
                if rating[j] < rating[i]:
                    smaller[i] += 1;
                    res += smaller[j];
        
        return res;
        