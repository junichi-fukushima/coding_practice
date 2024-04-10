<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target)
    {
        for ($i = 0; $i < count($nums); $i++) {
            for ($j = $i + 1; $j < count($nums); $j++) {
                if ($nums[$i] + $nums[$j] == $target) {
                    // 直接インデックスの配列を返す
                    return [$i, $j];
                }
            }
        }
        throw new Exception("No solution found");
    }
}
// Two Sum
// https://leetcode.com/problems/two-sum/description/