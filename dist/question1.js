"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidBracket = isValidBracket;
function isValidBracket(input) {
    const stack = [];
    const bracketMap = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    const opening = new Set(["(", "[", "{"]);
    for (const char of input) {
        if (opening.has(char)) {
            stack.push(char);
        }
        else {
            if (!stack.length)
                return false;
            const last = stack.pop();
            if (last !== bracketMap[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
