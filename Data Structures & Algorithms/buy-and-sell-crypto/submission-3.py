class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        start, end = 0, 1 
        max_profit = 0
        while end < len(prices):
            if prices[start] < prices[end]:
                curr_profit = prices[end] - prices[start]
                max_profit = max(max_profit, curr_profit)
            else:
                start = end
            end = end + 1
        return max_profit
