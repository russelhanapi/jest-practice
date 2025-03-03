export const calculator = {
  add(a, b) {
    validateOperands(a, b);
    return a + b;
  },
  subtract(a, b) {
    validateOperands(a, b);
    return a - b;
  },
  multiply(a, b) {
    validateOperands(a, b);
    return a * b;
  },
  divide(a, b) {
    validateOperands(a, b);
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  },
};

// Helper function for validating if operands are of type number
function validateOperands(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Operands must be numbers');
  }
}
