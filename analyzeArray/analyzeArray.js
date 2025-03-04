export function analyzeArray(arr) {
  if (arr.length === 0) throw new Error('Error: Empty array!');

  const average = computeAverage(arr);
  const min = computeMin(arr);
  const max = computeMax(arr);
  const length = computeLength(arr);

  // Helper function that removes non-number in an array
  function removeNonNumbers(arr) {
    return arr.filter((item) => typeof item === 'number');
  }

  // Average Computation
  function computeAverage(arr) {
    const array = removeNonNumbers(arr);
    if (array.length === 0) return 0; // Prevent division by zero
    const sum = array.reduce((accumulator, number) => accumulator + number, 0);
    return sum / array.length;
  }

  // Min Computation
  function computeMin(arr) {
    const array = removeNonNumbers(arr);
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, number) => (number < accumulator ? number : accumulator), array[0]);
  }

  // Max Computation
  function computeMax(arr) {
    const array = removeNonNumbers(arr);
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, number) => (number > accumulator ? number : accumulator), array[0]);
  }

  // Length Computation
  function computeLength(arr) {
    const array = removeNonNumbers(arr);
    return array.length;
  }

  return {
    average,
    min,
    max,
    length,
  };
}
