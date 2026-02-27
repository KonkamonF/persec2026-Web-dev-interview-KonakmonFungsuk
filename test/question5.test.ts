import { sortDigitsDescending } from "../src/question5";

describe("sortDigitsDescending", () => {
  test.each([
    [3008, 8300],
    [1989, 9981],
    [2679, 9762],
    [9163, 9631],
  ])("sortDigitsDescending(%i)", (input, expected) => {
    expect(sortDigitsDescending(input)).toBe(expected);
  });

  test("should throw error for negative number", () => {
    expect(() => sortDigitsDescending(-123)).toThrow();
  });
});