import { intToRoman, romanToInt } from "../src/question4";

describe("Roman Numerals", () => {
  test.each([
    [1989, "MCMLXXXIX"],
    [2000, "MM"],
    [68, "LXVIII"],
    [109, "CIX"],
  ])("intToRoman(%i)", (input, expected) => {
    expect(intToRoman(input)).toBe(expected);
  });

  test.each([
    ["MCMLXXXIX", 1989],
    ["MM", 2000],
    ["LXVIII", 68],
    ["CIX", 109],
  ])("romanToInt(%s)", (input, expected) => {
    expect(romanToInt(input)).toBe(expected);
  });
});