<?php
class Solution
{
    private $romanToValue = [
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000
    ];

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        $ans = 0;
        $prev = PHP_INT_MAX;

        for ($i = 0; $i < strlen($s); $i++) {
            $c = $s[$i];
            $val = $this->romanToValue[$c];
            // ローマ数字は大きい順から並んでいる
            // $prevの方が大きければIVみたいなケースがあるということかな
            if ($val <= $prev) {
                $ans += $val;
            } else {
                $ans += $val;
                $ans -= 2 * $prev;
            }
            $prev = $val;
        }

        return $ans;
    }
}
$sol = new Solution();
print($sol->romanToInt("MCMXCIV"));

// https://leetcode.com/problems/roman-to-integer/