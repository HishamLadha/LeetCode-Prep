class Solution{

    // Input = ["neet","code","love","you"]
    encode(strs){
        let result = "";

        for (let element of strs){
            result += element.length + "#" + element;
        }

        return result;
    }

    decode(input){
        let result = []
        let i = 0
        let j = 0

        while (i < input.length){
            let length = ""
            while (input[i] !== "#"){
                length += input[i]
                i += 1
            }
            i = i + 1
            j = i + parseInt(length)
            result.push(input.substring(i,j))

            i = j
        }
        return result
    }
}

module.exports = Solution;

// Encode and Decode Strings
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]
// Constraints:

// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains only UTF-8 characters.

