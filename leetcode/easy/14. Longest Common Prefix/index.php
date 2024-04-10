<?php
class Solution {

    /**
     * @param String[] $strs
     * @return String
     */
    function longestCommonPrefix($strs) {

        $output = "";
        for ($i=0; $i < strlen($strs[0]); $i++) { // 1個目の文字を主軸にぐるぐる
            for ($j=1; $j < count($strs) ; $j++) { // 配列の数分比較を実施
                // 比較対象$jの値がなければ処理を終了する
                if (strlen($strs[$j]) < $i){
                    return $output;
                }
                // 1個目の文字と $j=2個目以降の文字を比較する
                if ($strs[0][$i] != $strs[$j][$i]){
                    return $output;
                }
            }
            $output .= $strs[0][$i];
        }
        return $output;
    }
}
// https://leetcode.com/problems/longest-common-prefix/
// TODO: 解説を見る