class Solution {
    public int sumSubarrayMins(int[] arr) {
        
        int N = arr.length;
        int[] dp = new int[N];
        Arrays.fill(dp, 0);
        Deque<Integer> stack = new ArrayDeque<>();
        int total = 0;
        int mod = (int)(Math.pow(10, 9) + 7);
        
        for(int i = 0; i < N; i++){
            // Find the position of the last smaller number
            while(!stack.isEmpty() && arr[stack.peek()] >= arr[i]) stack.pop();
            
            if(stack.size() == 0){
                int len = i + 1;
                dp[i] = (arr[i] * len) % mod;
            }else{
                
                int lastSmaller = stack.peek();
                dp[i] = (dp[lastSmaller] + (arr[i] * (i - lastSmaller))) % mod;
            }
            
            
            total += dp[i] % mod;
            stack.push(i);
        }
        
        return total % mod;
    }
}