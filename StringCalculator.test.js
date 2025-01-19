const add = require('./StringCalculator');

describe('StringCalculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number itself for a single random number', () => {
    const randomNumber = Math.floor(Math.random() * 100);
    expect(add(`${randomNumber}`)).toBe(randomNumber);
  });

  test('returns the sum for two random numbers', () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    expect(add(`${num1},${num2}`)).toBe(num1 + num2);
  });

  test('returns the sum for multiple random numbers', () => {
    const nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    const input = nums.join(",");
    const expectedSum = nums.reduce((sum, num) => sum + num, 0);
    expect(add(input)).toBe(expectedSum);
  });

  test('handles new lines as delimiters with random numbers', () => {
    const nums = Array.from({ length: 3 }, () => Math.floor(Math.random() * 100));
    const input = `${nums[0]}\n${nums[1]},${nums[2]}`;
    const expectedSum = nums.reduce((sum, num) => sum + num, 0);
    expect(add(input)).toBe(expectedSum);
  });

  test('supports custom delimiters with random numbers', () => {
    const nums = [10, 20, 30];
    const delimiter = "#";
    const input = `//${delimiter}\n${nums.join(delimiter)}`;
    const expectedSum = nums.reduce((sum, num) => sum + num, 0);
    expect(add(input)).toBe(expectedSum);
  });

  test('throws an exception for random negative numbers', () => {
    const negativeNums = Array.from({ length: 2 }, () => -Math.floor(Math.random() * 100));
    const positiveNum = Math.floor(Math.random() * 100);
    const input = `${positiveNum},${negativeNums.join(",")}`;
    expect(() => add(input)).toThrow(
      `Negative numbers are not allowed: ${negativeNums.join(", ")}`
    );
  });
});
