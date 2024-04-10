<?php
class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s)
    {
        // 値を格納する配列を作るか
        $symbolVal = [
            "I" => 1,
            "V" => 5,
            "X" => 10,
            "L" => 50,
            "C" => 100,
            "D" => 500,
            "M" => 1000,
        ];

        $sArray = str_split($s);

        $index = 0; // 開始位置
        $output = 0; // 最終出力
        foreach ($sArray as $index => $value) {
            $output += $symbolVal[$value];
            if ($index > 0) {
                if (($value == "V" || $value == "X") && $sArray[$index - 1] == "I") {
                    $output = $output - 1*2;
                }
                if (($value == "L" || $value == "C") && $sArray[$index - 1] == "X") {
                    $output = $output - 10*2;
                }
                if (($value == "D" || $value == "M") && $sArray[$index - 1] == "C") {
                    $output = $output - 100*2;
                }
            }
            $index++;
        }
        return $output;
    }
}
$sol = new Solution();
print($sol->romanToInt("MCMXCIV"));

// https://leetcode.com/problems/roman-to-integer/