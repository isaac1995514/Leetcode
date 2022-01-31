class Solution {
    
    public int numDecodings(String s) {
    
        int n = s.length();
        int plusOne = 1, plusTwo = 1;
        
        for(int i = n - 1; i >= 0; i--){
            int curr = 0;
            String one = s.substring(i, i+1);
            int oneNum = Integer.parseInt(one, 10);
            
            if(oneNum >= 1 && oneNum <= 9){
                curr += plusOne;
            }
            
            if(i < n - 1){
                String two = s.substring(i, i + 2);
                int twoNum = Integer.parseInt(two, 10);
                
                if(twoNum >= 10 && twoNum <= 26){
                    curr += plusTwo;
                }
            }
            
            plusTwo = plusOne;
            plusOne = curr;
        }
        
        return plusOne;
    }
    
}