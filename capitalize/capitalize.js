export function capitalize(str) {
  if (str.length === 0) return '';

  let firstNonSpaceIndex = 0;
  while (firstNonSpaceIndex < str.length && str[firstNonSpaceIndex] === ' ') {
    firstNonSpaceIndex++;
  }

  if (firstNonSpaceIndex === str.length) return str;

  return str.slice(0, firstNonSpaceIndex) + str[firstNonSpaceIndex].toUpperCase() + str.slice(firstNonSpaceIndex + 1);
}
