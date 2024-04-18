<?php
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $list1
     * @param ListNode $list2
     * @return ListNode
     */
    function mergeTwoLists($list1, $list2) {

        // 結果を入れる配列
        $result = [];

        // listがからである場合処理-------
        // list1がから
        // list2がnullの場合
        // どちらもnull 何もしない
        // if(!isset($list1)){

        // }

        // if(!isset($list1)){

        // }

        // $list1と$list2どちらも存在する時のみ実施
        while(isset($list1) || isset($list2)){
            // valの比較処理-------
            // 1回目の処理
            // 2回目の処理
            $val1 = $list1->val;
            $val2 = $list2->val;
            if($val1 >= $val2){
                // $val1の方が大きいなら
                array_push($result, $val2, $val1);
            } else {
                // $val2の方が大きいなら
                array_push($result, $val1, $val2);
            }

            // nextを取得する処理-------
            $list1 = $list1->next;
            $list2 = $list2->next;
        }
        return $result;
    }
}
?>

<!-- 123
12

11
[] -->
