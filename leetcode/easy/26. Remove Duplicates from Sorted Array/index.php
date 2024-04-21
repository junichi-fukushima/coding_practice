<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function removeDuplicates(&$nums)
    {
        $result = []; // 結果用配列の作成
        foreach ($nums as $num) {
            if (!in_array($num, $result)) {
                array_push($result, $num); // 修正: $nums を $num に変更
            }
        }
        var_dump($result);

        return count($result);
    }
}

?>
