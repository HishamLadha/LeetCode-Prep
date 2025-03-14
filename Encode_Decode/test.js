const Solution = require('./encode_decode.js');

describe('Solution', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution()
    })

    test('should encode strings correctly', () => {
        const input = ["neet","code","love","you"];
        const expected = "4#neet4#code4#love3#you";
        expect(solution.encode(input)).toEqual(expected);
    })

    test('should return the empty string for an empty input array', () => {
        const input = [];
        const expected = "";
        expect(solution.encode(input)).toEqual(expected);
    })

    test('should  decode strings correctly', () => {
        const input = "4#neet4#code4#love3#you";
        const expected = ["neet","code","love","you"];
        expect(solution.decode(input)).toEqual(expected);
    })



})