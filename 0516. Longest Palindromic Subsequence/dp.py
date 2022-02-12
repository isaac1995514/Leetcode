class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        N = len(s)
        prev, curr = [0] * N, [0] * N;
        res = 0;
        
        for i in reversed(range(N)):
            for j in range(i, N):
                if i == j:
                    curr[j] = 1
                else:
                    if s[i] == s[j]:
                        if i + 1 == j:
                            curr[j] = 2;
                        else:
                            curr[j] = 2 + prev[j-1];
                    else:
                        if i + 1 == j :
                            curr[j] = 1;
                        else:
                            curr[j] = max(curr[j-1], prev[j])
                            
                res = max(res, curr[j])
            
            (prev, curr) = (curr, prev);
        
        return res;
        
                        