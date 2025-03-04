import { caesarCipher } from './ceasarCipher';

test('shifts a letter forward by a given number', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('wraps around the alphabet correctly (lowercase)', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('wraps around the alphabet correctly (uppercase)', () => {
  expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('maintains case sensitivity', () => {
  expect(caesarCipher('Hello', 5)).toBe('Mjqqt');
});

test('keeps non-alphabetic characters unchanged', () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

test('works with a shift of 0 (returns original text)', () => {
  expect(caesarCipher('No Change', 0)).toBe('No Change');
});

test('works with negative shifts (shifts backward)', () => {
  expect(caesarCipher('def', -3)).toBe('abc');
});

test('handles large shifts (mod 26)', () => {
  expect(caesarCipher('abc', 29)).toBe('def'); // 29 % 26 = 3
});

test('handles negative large shifts (mod 26)', () => {
  expect(caesarCipher('xyz', -29)).toBe('uvw'); // -29 % 26 = -3
});
