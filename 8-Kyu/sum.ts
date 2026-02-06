const positiveSum = (arr: number[]): number => {
  return arr
    .filter((e) => e > 0)
    .reduce((ac, el) => {
      return ac + el;
    });
};
console.log(positiveSum([1, -4, 7, 12]));
