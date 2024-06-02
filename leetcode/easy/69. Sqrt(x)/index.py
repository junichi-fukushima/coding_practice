class Solution:
    def mySqrt(self, x: int) -> int:
        left = 0
        right = x
        while left <= right:
            mid = (left+right)
             # 左の矢印を右にずらす
            if mid * mid < x:
                left = mid + 1
            # 右の矢印を左にずらす(midから右は見る必要ないので)
            elif mid * mid > x:
                right = mid -1
            else:
                return mid
        return right
# 振り返りメモ
# まずは逐次実行でどのように要素満たすか自分で試算してみるべき