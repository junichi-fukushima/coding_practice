<?php
class Solution
{

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x)
    {
        // 負の数は回文ではない。
        if ($x < 0) {
            return false;
        }

        // 整数を文字列に変換。
        $str = (string)$x;

        // 一桁のものは回文とする
        if (strlen($str) === 1) {
            return true;
        }

        // 文字列の前半と後半が一致するか確認。
        $left = 0; // 文字列の開始位置。
        $right = strlen($str) - 1; // 文字列の終了位置。

        // return (string) $x === strrev($x);と同じことしてる
        while ($left < $right) {
            if ($str[$left] != $str[$right]) {
                return false;
            }
            $left++;
            $right--;
        }

        return true;
    }
}

$sol = new Solution();
print($sol->isPalindrome(121));

// https://leetcode.com/problems/palindrome-number/description/


?>