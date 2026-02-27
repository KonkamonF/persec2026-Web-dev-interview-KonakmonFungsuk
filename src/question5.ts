export function sortDigitsDescending(num: number): number {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error("Input must be a positive integer");
  }

  return Number(
    num
      .toString()
      .split("")
      .sort((a, b) => Number(b) - Number(a))
      .join("")
  );
}