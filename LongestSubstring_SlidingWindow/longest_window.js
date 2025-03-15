class Solution{

    lengthOfLongestSubstring(str){
        let length = 0;
        let characters = new Set();

        let left = 0;
        let right = 0;

        while (right < str.length){
            while(characters.has(str[right])){
                characters.delete(str[left]);
                left += 1;
            }
            characters.add(str[right]);
            length = Math.max(length, right-left + 1);
            right += 1;
        }

        return length;

    }

    withReplacement(str){

    }

}

module.exports = Solution;


// LengthOfLongestSubstring()
// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: s = "zxyzxyz"

// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.

// Example 2:

// Input: s = "xxxx"

// Output: 1
// Constraints:

// 0 <= s.length <= 1000
// s may consist of printable ASCII characters.

// WithReplacement
// Longest Repeating Character Replacement

// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Example 1:

// Input: s = "XYYX", k = 2

// Output: 4
// Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

// Example 2:

// Input: s = "AAABABB", k = 1

// Output: 5
// Constraints:

// 1 <= s.length <= 1000
// 0 <= k <= s.length
