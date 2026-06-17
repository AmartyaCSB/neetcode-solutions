class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        for start in range(len(prices)):
            end = start + 1
            while end < len(prices):
                    buy_price = prices[start]
                    sell_price = prices[end]
                    curr_profit = sell_price - buy_price
                    if curr_profit > max_profit:
                        max_profit = curr_profit
                    else:
                        end = end + 1
        return max_profit
