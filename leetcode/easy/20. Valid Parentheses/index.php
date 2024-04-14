<?php
// Your code here!
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isValid($s) {
        $blacket = [
            "(" => ")",
            "{" => "}",
            "[" => "]"
        ];
        if (strlen($s) < 1 ) return false;
        $isNextresult = false;
        $isBackresult = false;
        for ($i=0; $i < strlen($s); $i){
            // 隣り合わせ文字の比較をする
            $next = $i +1;

            // 二で割って、あまりの数だけ実施。どちらでもok

            // 偶数
            // 奇数

            if ($s[$i] === "(" && $s[$next] === ")" || $s[$i] === "{" && $s[$next] === "}" || $s[$i] === "[" && $s[$next] === "]"){
                $isNextresult = true;
            } else {
                $isNextresult = false;

            }



            // 先頭と最後の文字を比較する
            $back = strlen($s) - $i - 1;
            if ($s[$i] === "(" && $s[$back] === ")" || $s[$i] === "{" && $s[$back] === "}" || $s[$i] === "[" && $s[$back] === "]"){
                $isBackresult = true;

            } else {
                $isBackresult = false;

            }
            var_dump($isBackresult);

            if(!$isNextresult && !$isBackresult){

                return false;
            }
        }
        return true;
    }
}
$a = new Solution();
$a->isValid("()");
?>
