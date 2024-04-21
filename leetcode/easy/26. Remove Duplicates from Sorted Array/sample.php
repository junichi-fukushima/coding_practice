<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        // solution #1
        $nums = array_unique($nums);
        return count($nums);

        // solution #2
        $numsLenght = count($nums);
        $lastUniqueElement = $nums[0];

        for ($i = 1; $i < $numsLenght; $i++) {
            if ($nums[$i] !== $lastUniqueElement) $lastUniqueElement = $nums[$i];
            else unset($nums[$i]);
        }
        return count($nums);
    }
}

class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        $count = count($nums);
        $writeIndex = 1;

        for ($i = 1; $i < $count; $i++) {
            if ($nums[$i] !== $nums[$i - 1]) {
                $nums[$writeIndex] = $nums[$i];
                $writeIndex++;
            }
        }

        return $writeIndex;
    }
}



?>