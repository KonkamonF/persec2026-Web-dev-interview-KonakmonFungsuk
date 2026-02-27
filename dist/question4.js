"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intToRoman = intToRoman;
exports.romanToInt = romanToInt;
function intToRoman(num) {
    const values = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];
    let result = "";
    for (const [value, symbol] of values) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}
function romanToInt(roman) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = map[roman[i]];
        const next = map[roman[i + 1]];
        if (next && current < next) {
            total += next - current;
            i++; // skip ตัวถัดไป
        }
        else {
            total += current;
        }
    }
    return total;
}
