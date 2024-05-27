class Solution(object):
    def removeDuplicates(self, nums):
        replace = 1
        for i in range(1, len(nums)):
            # replaceを配列の2個目にセット
            # 2個目以降から実施。すぐ後ろの要素と比較していくreplaceをずらす
            if nums[i-1] != nums[i]:
                nums[replace] = nums[i]
                replace += 1
        return replace