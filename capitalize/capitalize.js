export function capitalize(str) {
  // If string is empty, return an empty string
  if (str.length === 0) return '';

  let firstCharIndex = 0; // will contain the index of the first character
  while (firstCharIndex < str.length && str[firstCharIndex] === ' ') {
    firstCharIndex++;
  }

  // If str contains only spaces, return it as is
  if (firstCharIndex === str.length) return str;

  return str.slice(0, firstCharIndex) + str[firstCharIndex].toUpperCase() + str.slice(firstCharIndex + 1);
}
