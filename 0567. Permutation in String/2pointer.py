class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        freq = [0] * 26;
        
        for ch in s1:
            code = ord(ch) - ord('a')
            freq[code] += 1;
            
        k = len(s1)

        def isValid():
            for i in range(26):
                if freq[i] > 0 or freq[i] < 0:
                    return False;
            
            return True;
        
        
        l = 0;
        for r in range(len(s2)):
            code = ord(s2[r]) - ord('a')
            freq[code] -= 1;
            
            if r - l + 1 > k:
                leftCode = ord(s2[l]) - ord('a')
                freq[leftCode] += 1;
                l+=1;
            
            if isValid():
                return True
        
        return False;
            
            
            
        