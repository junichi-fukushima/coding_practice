<?php
class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        if($x < 0) {
            $x = $x * -1;
        }
        return $x;
    }
}

$sol = new Solution ();
print($sol->isPalindrome(-1));

?>