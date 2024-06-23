class Solution:
    def addBinary(self, a: str, b: str) -> str:
        result = []
        carry = 0

        i, j = len(a)-1,len(b)-1

        # carryし続ける --> 足しづづける
        # 今の値はどう求める？ --> 剰余
        while i >=0 or j >=0 or carry:
            total = carry

            # 値があればそれぞれ足していく
            if i >= 0:
                total += int(a[i])
                i -= 1
            if j >= 0:
                total += int(b[j])
                j -= 1

            # 値を剰余算で求める
            result.append(str(total % 2))

            carry = total // 2
        return ''.join(reversed(result))