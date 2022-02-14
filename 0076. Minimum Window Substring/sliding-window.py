class Solution:
    def minWindow(self, s: str, t: str) -> str:
        res = None
        freq = {}
        
        if len(t) > len(s) or len(t) == 0:
            return "";
        
        for ch in t:
            freq[ch] = freq.get(ch, 0) + 1;
            
        validCh = 0;
        l = 0;

        for r in range(len(s)):
            ch = s[r]
            if ch in freq:
                freq[ch] -= 1;
                if freq[ch] == 0:
                    validCh += 1;
                
            # Check if the window is greater or equal to len(t)
            # Check if validCh == len(freq)
            while r - l + 1 >= len(t) and validCh == len(freq):
                if res == None or r - l + 1 < len(res):
                    res = s[l:r+1];
                
                leftChar = s[l];
                
                if leftChar in freq:
                    freq[leftChar] += 1;
                    
                    if freq[leftChar] == 1:
                        validCh -= 1;
                l+=1
                        
        return res if res != None else ""
            
            
        
        
