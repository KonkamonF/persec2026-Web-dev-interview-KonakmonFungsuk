import { isValidBracket } from "../src/question1";

describe("isValidBracket", () => {
  test.each([
    ["()", true],
    ["([]]", false],
    ["([{}])", true],
    ["([[{}]]]", false],
    [")", false],
    ["(]}])", false],
    ["([)]", false],
    ["{", false],
  ])("input %s should return %s", (input, expected) => {
    expect(isValidBracket(input)).toBe(expected);
  });
});