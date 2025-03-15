const Solution = require('./longest_window.js');

describe('No Replacement', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution()
    })

    test('should return the correct length of the longestSubstring', () => {
        const input = "abcbdefg";
        const expected = 6;
        expect(solution.lengthOfLongestSubstring(input)).toEqual(expected);
    })
    test('should return the correct length of the longestSubstring', () => {
        const input = "zxyzxyz";
        const expected = 3;
        expect(solution.lengthOfLongestSubstring(input)).toEqual(expected);
    })

    test('should return 0 for an empty input string', () => {
        const input = "";
        const expected = 0;
        expect(solution.lengthOfLongestSubstring(input)).toEqual(expected);
    })
    test('should return 1 for input string with 1 char', () => {
        const input = "a";
        const expected = 1;
        expect(solution.lengthOfLongestSubstring(input)).toEqual(expected);
    })

})

describe('With Replacement', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution()
    })

    test('should work for any string', () => {
        const input = "AAABABB"
        const k = 1
        const expected = 5
        expect(solution.withReplacement(input, k)).toEqual(expected)
    })


})