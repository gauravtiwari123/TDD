const add = (numbers) => {
    if (numbers === "") {
      return 0;
    }
  
    let delimiterPattern = /,|\n/;
    if (numbers.startsWith("//")) {
      const delimiterInfo = numbers.split("\n", 1)[0];
      const customDelimiter = delimiterInfo.slice(2);
      delimiterPattern = new RegExp(customDelimiter);
      numbers = numbers.slice(delimiterInfo.length + 1);
    }
  
    const numList = numbers.split(delimiterPattern).map((num) => parseInt(num, 10));
    const negativeNumbers = numList.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers are not allowed: ${negativeNumbers.join(", ")}`);
    }
  
    return numList.reduce((total, num) => (isNaN(num) ? total : total + num), 0);
  };
  
  module.exports = add;
  