<?php
class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        //paso#1
        $revertido=0;
        $aux = $x;

        while($aux>0){
            // あまりの値をセットすることで最後の桁をセットを取得
            $val = $aux %10;
            // 10倍することでバイする事で後ろに値を追加できる
            // 1回目5
            // 2回目50 + val
            $revertido = $val + ($revertido * 10) ;
            // 最後の桁をリセット
            $aux = floor($aux/10);
        }

        //paso#5
        if($revertido == $x) return true;
        else return false;

    }
}
// return (string) $x === strrev($x);


$sol = new Solution ();
print($sol->isPalindrome(121));

// https://leetcode.com/problems/palindrome-number/description/


?>
