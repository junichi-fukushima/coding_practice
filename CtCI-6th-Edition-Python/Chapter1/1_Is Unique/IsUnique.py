import unittest

def unique(strings: str):
    # max値を定義しておく
    if len(strings) > 128:
        return False

    # ハッシュテーブルを用意する
    stringHash = {}
    isUnique = True

    for string in strings:
        if string not in stringHash:
            stringHash[string] = None
        else:
            isUnique = False
            break
    return isUnique


class Test(unittest.TestCase):
    dataT = [('abcd'), ('s4fad'), ('')]
    dataF = [('23ds2'), ('hb 627jh=j ()')]

    def test_unique(self):
        # true check
        for test_string in self.dataT:
            actual = unique(test_string)
            self.assertTrue(actual)
        # false check
        for test_string in self.dataF:
            actual = unique(test_string)
            self.assertFalse(actual)

if __name__ == "__main__":
    unittest.main()