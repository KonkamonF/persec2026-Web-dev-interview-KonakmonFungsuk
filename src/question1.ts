export function isValidBracket(input: string): boolean {
  const stack: string[] = [];

  const bracketMap: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const opening = new Set(["(", "[", "{"]);

  for (const char of input) {
    if (opening.has(char)) {
      stack.push(char);
    } else {
      if (!stack.length) return false;

      const last = stack.pop();
      if (last !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}