import { tribonacci } from "../src/question6";

describe("tribonacci", () => {
  test.each([
    [[1, 3, 5], 5, [1, 3, 5, 9, 17]],
    [[2, 2, 2], 3, [2, 2, 2]],
    [[10, 10, 10], 4, [10, 10, 10, 30]],
    [[], 0, []],
  ])("tribonacci(%j, %i)", (signature, n, expected) => {
    expect(tribonacci(signature, n)).toEqual(expected);
  });
});