export function tribonacci(signature: number[], n: number): number[] {
  if (n === 0) return [];

  const result = [...signature];

  if (result.length >= n) {
    return result.slice(0, n);
  }

  while (result.length < n) {
    const lastThree = result.slice(-3);
    const sum = lastThree.reduce((acc, curr) => acc + curr, 0);
    result.push(sum);
  }

  return result;
}