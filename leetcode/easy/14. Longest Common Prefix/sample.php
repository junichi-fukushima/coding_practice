<?php
class Solution {

    /**
     * @param String[] $strs
     * @return String
     */
    function longestCommonPrefix($strs) {
    $check = $strs[0]; //baab

    $res = "";
    if(count($strs)<=1 || strlen($strs[0]) == 0){
        return $strs[0];
    }

    for($i=1; $i<count($strs); $i++){ //1
        $res = "";
        for($j = 0; $j < strlen($strs[$i]); $j++){ //0 1
            if($check[$j] === $strs[$i][$j]){//b b //a a
                $res .= $strs[$i][$j];//ba
            }else{
                break;
            }
        }
        $check = $res; //aa
    }
    return $res;
    }
}