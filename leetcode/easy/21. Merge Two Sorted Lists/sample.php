
<?php
 class ListNode {
      public $val = 0;
      public $next = null;
      function __construct($val = 0, $next = null) {
          $this->val = $val;
          $this->next = $next;
      }
  }
class Solution {

    function mergeTwoLists($list1, $list2) {
        // ダミーノードが先頭になる
        $dummy = new ListNode();
        $current = $dummy; // currentが常に最後のノードになる（つまりは$dummy->nextが$currentになる）

        while ($list1 !== null && $list2 !== null) {
            // Compare values of the two lists and add the smaller one to the merged list
            if ($list1->val < $list2->val) {
                // 1回目: currentのnextにそのまま全部打ち込む。それをcurrentに代入する。
                // 2回目: 1回目に代入したcurrentのnextにlist2を入れる
                $current->next = $list1;
                $list1 = $list1->next;
            } else {
                $current->next = $list2;
                $list2 = $list2->next;
            }

            // currentは上書きするようである。dummyにするとdummy全体が上書きされる
            // nextを更新し続けることでdummy->nextも更新され続ける
            $current = $current->next;
        }

        // Append the remaining nodes from either list (if any)
        if ($list1 !== null) {
            $current->next = $list1;
        } elseif ($list2 !== null) {
            $current->next = $list2;
        }

        // ダミーノードから次を全て返す
        return $dummy->next;
    }
}


?>