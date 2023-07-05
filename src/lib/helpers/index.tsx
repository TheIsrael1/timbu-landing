export function capitalizeFirstLetter(
  str: string,
  capitalizeWords: boolean = false
): string {
  if (str.length === 0) {
    return str;
  }

  if (!capitalizeWords) {
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfTheString = str.slice(1);
    return firstLetter + restOfTheString;
  }

  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfTheWord = word.slice(1);
    return firstLetter + restOfTheWord;
  });

  return capitalizedWords.join(" ");
}
