class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # 中央値をとる = 端をとると言うこと(lとr)。これをずらしていく
        l = 0
        r = len(nums) - 1
        while l <= r:
            mid = (l+r) // 2
            if nums[mid] < target:
                l = mid +1
            elif nums[mid] > target:
                r = mid -1
            else:
                return mid
        # 最後は何れにしてもlが左に来る
        # そこに入れりう
        return l
