class Solution {
    public int countSubstrings(String s) {
       
        int res = 0;
        int N = s.length();
        boolean[][] dp = new boolean[N][N];

        for(int i = N - 1; i >= 0; i--){
            for(int j = i; j < N; j++){
                if(i == j){
                    dp[i][j] = true;
                }else{
                    if(s.charAt(i) == s.charAt(j)){
                        dp[i][j] = (i + 1 == j) ? true : dp[i+1][j-1];
                    }else{
                        dp[i][j] = false;
                    }
                }
                if(dp[i][j]) res++;
            }
        }
        return res; 
    }
}