const sumArray = (array: number[] | null): number => {
  return (
    array
      ?.sort((a, b) => a - b)
      .slice(1, array.length - 1)
      .reduce((ac, c) => ac + c, 0) ?? 0
  );
};

console.log(sumArray([1, 6, 3, 7, 2, 88]));
