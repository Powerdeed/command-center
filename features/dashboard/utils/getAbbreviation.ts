export const getAbbreviation = (words: string) =>
  words
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .join("");
