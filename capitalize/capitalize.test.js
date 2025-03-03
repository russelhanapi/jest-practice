import { capitalize } from './capitalize';

test('capitalizes the first letter of a single word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalizes the first letter of a sentence', () => {
  expect(capitalize('this is a test')).toBe('This is a test');
});

test('handles an already capitalized word', () => {
  expect(capitalize('JavaScript')).toBe('JavaScript');
});

test('handles an empty string', () => {
  expect(capitalize('')).toBe('');
});

test('handles a string with only one letter', () => {
  expect(capitalize('a')).toBe('A');
});

test('handles spaces only string', () => {
  expect(capitalize('     ')).toBe('     ');
});

test('handles a string with leading spaces', () => {
  expect(capitalize('  leading space')).toBe('  Leading space');
});

test('handles special characters at the beginning', () => {
  expect(capitalize('!hello')).toBe('!hello');
});

test('handles a string with numbers at the beginning', () => {
  expect(capitalize('123abc')).toBe('123abc');
});
