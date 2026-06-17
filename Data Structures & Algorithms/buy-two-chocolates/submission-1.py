class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        lowest = float("inf")
        sec_lowest = float("inf")
        for price in prices:
            if price <= lowest:
                temp = lowest
                lowest = price
                sec_lowest = temp
            if price > lowest and price < sec_lowest:
                sec_lowest = price
        left = money - lowest - sec_lowest
        return left if left >= 0 else money

        