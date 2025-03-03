import { calculator } from './calculator';

describe('Calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(10, 3)).toBe(7);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 5)).toBe(20);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
  });

  test('throws an error when operands are not a number', () => {
    expect(() => calculator.add('a', 2)).toThrow('Operands must be numbers');
    expect(() => calculator.subtract(3, null)).toThrow('Operands must be numbers');
    expect(() => calculator.multiply(undefined, 5)).toThrow('Operands must be numbers');
    expect(() => calculator.divide({}, 2)).toThrow('Operands must be numbers');
  });
});
