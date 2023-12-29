# You are given a string of consecutive natural numbers.
# Your task is to determine the smallest number that can be the first in this string.
# The string ends with an untruncated number.

# Examples
# "123456789101112131415" -> 1
# "17181920" -> 17
# "72637236" -> 72637236
# "1112" -> 11
# "91011" -> 9
# "99100" -> 99
# "431243" -> 431243, not 4312
# "577495" -> 577495, not 57749
# Size limits
# 0 < length string < 140
# 0 < smallest number < 1 000 000 000


# Solution

def find(string):
    num = int(string[0])
    ans = num
    i = 1
    test = str(num)
    while test != string:
        if test == string[:len(test)]:
            num += 1
            test += str(num)
        else:
            i += 1
            num = int(string[:i])
            ans = num
            test = str(num)

    return ans


