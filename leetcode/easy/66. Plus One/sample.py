class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        # reversedで後ろから実行してくれる
        for i in reversed(range(len(digits))):
            # 9ジャない場合は1をたす
            # んでもって終了。。。
            # 9だったら次のブロックに1を足せば良いだけ。
            if digits[i] != 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        # 全部9だったら1を足してあげる
        # ケースを、全部9。一部9。9がない場合って分けて考えるべきだったなぁ
        return [1] + digits