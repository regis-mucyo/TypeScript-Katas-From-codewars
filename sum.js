positiveSum = function (arr) {
  return arr
    .filter(function (e) {
      return e > 0;
    })
    .reduce(function (ac, el) {
      return ac + el;
    });
};
console.log(positiveSum([1, -4, 7, 12]));
