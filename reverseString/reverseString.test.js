import { reverseString } from './reverseString';

test('reverses a word', () => {
  expect(reverseString('Russel')).toBe('lessuR');
});

test('reverses a sentence', () => {
  expect(reverseString('Hi, my name is Russel')).toBe('lessuR si eman ym ,iH');
});

test('handles an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('handles a string with only one character', () => {
  expect(reverseString('R')).toBe('R');
});
