<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $n = count($nums);
        $a = [];
        for($i=0;$i<$n;$i++){
            $v = $target - $nums[$i];
            if(isset($a[$v])) {
                return [$i, $a[$v]];
            }
            $a[$nums[$i]] = $i;
        }
    }
}

// https://leetcode.com/problems/two-sum/submissions/1181467036/