class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 === 1)
            return false;
        const map = {
            "(" : ")",
            "{" : "}",
            "[" :"]"
        };
        let stack = [];
        for(let i=0 ; i < s.length; i++)
        {
            let charc = s.charAt(i);
            if(charc === "(" || charc === "{" || charc === "[")
            {
                stack.push(map[charc]);
            }
            else if(stack.pop(map[charc]) !== charc)
            {
                return false;
            }
        }
        return stack.length === 0;
    }
}
