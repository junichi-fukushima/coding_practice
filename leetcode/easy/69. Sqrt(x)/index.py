class Solution:
    def mySqrt(self, x: int) -> int:
        left = 0
        right = x
        while left <= right:
            mid = (left + right) // 2
            if mid * mid < x:
                # 左の矢印を右にずらす
                left = mid + 1
            elif mid * mid > x:
                # 右の矢印を左にずらす(midから右は見る必要ないので)
                right = mid -1
            else:
                return mid
        # 振り返りメモ
        # まずは逐次実行でどのように要素満たすか自分で試算してみるべき
        return right