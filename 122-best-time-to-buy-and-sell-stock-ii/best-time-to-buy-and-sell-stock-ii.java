class Solution {
    public int maxProfit(int[] prices) {
        int min = prices[0];
        int profit = 0;
        int total = 0;
        for (int i = 1; i < prices.length; i++)
        {
            if (prices[i] < prices[i-1])
            {
                min = prices[i];
                total += profit;
                profit = 0;
            }
            else if (prices[i] - min > profit)
            {
                profit = prices[i] - min;
            }
        }
        total += profit;
        return total;
    }
}