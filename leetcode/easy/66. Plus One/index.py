class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        sum = 0
        index = len(digits) - 1
        increment = 1
        # 合計値を出力
        while index >= 0:
            # 一番後ろの要素の時は+1をしておく
            if(index == len(digits) - 1):
                sum += digits[index]*increment+1
            else:
                sum += digits[index]*increment
            # 次のくらいにいく時には10倍しておく 
            increment = increment*10
            # 次のindexを捜査
            index -= 1
            # 新しい配列に格納
        result = []
        # ここが書けなかった
        # intをstringにしてそれをfor文でやる
        result = [int(digit) for digit in str(sum)]
        return result


        