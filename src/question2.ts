export function sortCustom(input: string[]): string[] {
  return input.sort((a, b) => {
    const regex = /^([A-Za-z]+)(\d+)/;

    const matchA = a.match(regex);
    const matchB = b.match(regex);

    if (!matchA || !matchB) return 0;

    const prefixA = matchA[1];
    const prefixB = matchB[1];

    const numberA = parseInt(matchA[2], 10);
    const numberB = parseInt(matchB[2], 10);

    if (prefixA !== prefixB) {
      return prefixA.localeCompare(prefixB);
    }

    return numberA - numberB;
  });
}