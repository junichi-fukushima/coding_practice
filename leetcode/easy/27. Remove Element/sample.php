<?php


class Solution {

    function removeDuplicates(&$nums) {
        $count = count($nums);
        $writeIndex = 1;

        for ($i = 1; $i < $count; $i++) {
            if ($nums[$i] !== $nums[$i - 1]) {
                $nums[$writeIndex] = $nums[$i];
                $writeIndex++;
            }
        }

        var_dump($writeIndex);
        return $writeIndex;
    }
}




?>