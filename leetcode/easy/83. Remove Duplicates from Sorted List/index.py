# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # 結果用ノードの作成
        dummy = ListNode()
        # 新しいノードを追加するためと一旦覚えとく
        # これないと先頭ノードが空でない場合みたいな処理が必要になる
        current = dummy

        # nodeがなくなるまでwhile文の処理を実施する
        while head and head.next:
            if head.val == head.next.val:
                head = head.next
            else:
                current.next = head
                current = current.next
                head = head.next

        # 一番最後のヘッドがなくなった場合の時の処理をするべき
        # while head and head.nextとしているので
        current.next = head
        return dummy.next


        