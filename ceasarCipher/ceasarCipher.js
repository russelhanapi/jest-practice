export function caesarCipher(str, shift) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // charCodeAt -> Converts a Character to a Number based on ASCII
    let code = str.charCodeAt(i);

    // Uppercase letters (A-Z)
    if (code >= 65 && code <= 90) {
      // fromCharCode -> Converts an ASCII to a character
      // Shift the character and wrap around if necessary using modular arithmetic
      result += String.fromCharCode(((((code - 65 + shift) % 26) + 26) % 26) + 65);

      // Lowercase letters (a-z)
    } else if (code >= 97 && code <= 122) {
      // Shift the character and wrap around if necessary
      result += String.fromCharCode(((((code - 97 + shift) % 26) + 26) % 26) + 97);

      // Non-alphabet characters (e.g., space, punctuation)
    } else {
      // Keep it unchanged
      result += char;
    }
  }

  return result;
}
