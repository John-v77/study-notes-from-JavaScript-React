# 387. First Unique Character in a String

# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

# Example 1:

# Input: s = "leetcode"
# Output: 0
# Example 2:

# Input: s = "loveleetcode"
# Output: 2
# Example 3:

# Input: s = "aabb"
# Output: -1
 

# Constraints:

# 1 <= s.length <= 105
# s consists of only lowercase English letters.

# << Solution >>

class Solution:
    def firstUniqChar(self, s: str) -> int:
        hashMap = {}
        for char in s:
            if char in hashMap:
                hashMap[char] += 1
            else:
                hashMap[char] = 1

        for key in hashMap:
            if(hashMap[key] == 1):
                return s.index(key)
        
        return -1