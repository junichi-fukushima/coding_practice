# おせえ 39ms
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        # 空白で区切った形で配列を作成
        str_array = [word for word in s.split(' ') if word != '']

        # 以下の書き方でもOK
        # str_array = s.split(' ')

        # filterd_array = []
        # for word in str_array:
        #     if word != '':
        #         filterd_array.append(word)
        return len(str_array[len(str_array) - 1])

# 模範解答 32ms
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        length = 0
        i = len(s) - 1
        # 最後の要素のlenghを返す、後ろから要素を探索する考え
        while i >= 0 and s[i] == ' ':
            i -= 1
        while i >= 0 and s[i] != ' ':
            length += 1
            i -= 1
        return length

