//question 1
import { isValidBracket } from "./src/question1";

const testCases = [
  "()",
  "([]]",
  "([{}])",
  "([[{}]]]",
  ")",
  "(]}])",
  "([)]",
  "{"
];

console.log("Question 1: ");
for (const test of testCases) {
  console.log(`${test} => ${isValidBracket(test)}`);
}
console.log("_______________________");


//question 2
import { sortCustom } from "./src/question2";

const testCases2 = [
  ["TH19", "SG20", "TH2"],
  ["TH10", "TH3Netflix", "TH1", "TH7"],
];

console.log("Question 2: ");
for (const test of testCases2) {
  console.log(`${test} => ${sortCustom([...test])}`);
}
console.log("_______________________");


//question 3
import { autocomplete } from "./src/question3";

const result = autocomplete(
  "th",
  ["Mother", "Think", "Worthy", "Apple", "Android"],
  2
);

console.log("Question 3: ");
console.log(`${result}`);
console.log("_______________________");


//question 4
import { intToRoman, romanToInt } from "./src/question4";

console.log("Question 4:");
console.log("1989 =>", intToRoman(1989));
console.log("2000 =>", intToRoman(2000));
console.log("68 =>", intToRoman(68));
console.log("109 =>", intToRoman(109));

console.log("MCMLXXXIX =>", romanToInt("MCMLXXXIX"));
console.log("MM =>", romanToInt("MM"));
console.log("LXVIII =>", romanToInt("LXVIII"));
console.log("CIX =>", romanToInt("CIX"));
console.log("_______________________");


//question 5
import { sortDigitsDescending } from "./src/question5";
console.log("Question 5: ");
console.log("3008 =>", sortDigitsDescending(3008));
console.log("1989 =>", sortDigitsDescending(1989));
console.log("2679 =>", sortDigitsDescending(2679));
console.log("9163 =>", sortDigitsDescending(9163));
console.log("_______________________");


//question6
import { tribonacci } from "./src/question6";

console.log("Question 6:");
console.log("f([1,3,5],5) =>", tribonacci([1, 3, 5], 5));
console.log("f([2,2,2],3) =>", tribonacci([2, 2, 2], 3));
console.log("f([10,10,10],4) =>", tribonacci([10, 10, 10], 4));
console.log("f([],5) =>", tribonacci([], 5));
console.log("f([1],5) =>", tribonacci([1], 5));
console.log("_______________________");
