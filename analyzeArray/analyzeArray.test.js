import { analyzeArray } from './analyzeArray';

describe('analyzeArray', () => {
  test('analyzes an array of numbers', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test('throws an error for an empty array', () => {
    expect(() => analyzeArray([])).toThrow('Error: Empty array!');
  });

  test('handles an array with a single number', () => {
    expect(analyzeArray([10])).toEqual({
      average: 10,
      min: 10,
      max: 10,
      length: 1,
    });
  });

  test('ignores non-number elements', () => {
    expect(analyzeArray([1, 'a', null, 5, undefined, 10])).toEqual({
      average: 5.333333333333333, // (1 + 5 + 10) / 3
      min: 1,
      max: 10,
      length: 3,
    });
  });

  test('returns undefined for min and max when all elements are non-numbers', () => {
    expect(analyzeArray(['a', null, undefined, {}])).toEqual({
      average: 0, // No numbers, so sum is 0
      min: undefined,
      max: undefined,
      length: 0,
    });
  });

  test('handles negative numbers', () => {
    expect(analyzeArray([-10, -5, -2, -8])).toEqual({
      average: -6.25,
      min: -10,
      max: -2,
      length: 4,
    });
  });

  test('handles mixed positive and negative numbers', () => {
    expect(analyzeArray([-5, 10, -3, 8, 0])).toEqual({
      average: 2,
      min: -5,
      max: 10,
      length: 5,
    });
  });

  test('handles large numbers', () => {
    expect(analyzeArray([1000000, 500000, 2000000])).toEqual({
      average: 1166666.6666666667,
      min: 500000,
      max: 2000000,
      length: 3,
    });
  });
});
