<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {

        // キーを返してあげる
        if (in_array($val, $nums)) {
            foreach (array_keys($nums, $val) as $key) {
                unset($nums[$key]);
            }
        }
        return count($nums);

        // 普通に削除してく
        foreach ($nums as $k => $num) {
            if ($num == $val) unset($nums[$k]);
        }
        return count($nums);

        //
        $length = count($nums);
        for ($i = 0; $i < $length; $i++) {
            if ($nums[$i] == $val) unset($nums[$i]);
        }
        return count($nums);
    }
}

?>
