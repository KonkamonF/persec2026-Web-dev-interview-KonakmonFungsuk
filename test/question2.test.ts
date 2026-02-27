import { sortCustom } from "../src/question2";

describe("sortCustom", () => {
  test.each([
    [
      ["TH19", "SG20", "TH2"],
      ["SG20", "TH2", "TH19"],
    ],
    [
      ["TH10", "TH3Netflix", "TH1", "TH7"],
      ["TH1", "TH3Netflix", "TH7", "TH10"],
    ],
  ])("input %p should return %p", (input, expected) => {
    expect(sortCustom([...input])).toEqual(expected);
  });
});