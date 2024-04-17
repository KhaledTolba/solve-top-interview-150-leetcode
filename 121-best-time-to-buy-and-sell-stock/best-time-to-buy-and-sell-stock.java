class Solution {
    public int maxProfit(int[] prices) {
        int min = prices[0];
        int max = min;
        int profit = 0;
        for(int i = 1; i < prices.length; i++)
        {
            if(prices[i] < min)
                min = max = prices[i];            
            else if(prices[i] > max && prices[i] > min)
                max = prices[i];
            if (max - min > profit)
                profit = max - min;
        }
        return profit;
    }
}