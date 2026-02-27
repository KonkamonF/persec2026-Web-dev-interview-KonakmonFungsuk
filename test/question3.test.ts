import { autocomplete } from "../src/question3";

describe("autocomplete", () => {
  test("example case", () => {
    const result = autocomplete(
      "th",
      ["Mother", "Think", "Worthy", "Apple", "Android"],
      2
    );

    expect(result).toEqual(["Think", "Mother"]);
  });

  test("ignore case", () => {
    const result = autocomplete(
      "TH",
      ["Mother", "Think", "Worthy"],
      3
    );

    expect(result).toEqual(["Think", "Mother", "Worthy"]);
  });

  test("maxResult works", () => {
    const result = autocomplete(
      "th",
      ["Mother", "Think", "Worthy"],
      1
    );

    expect(result).toEqual(["Think"]);
  });
});