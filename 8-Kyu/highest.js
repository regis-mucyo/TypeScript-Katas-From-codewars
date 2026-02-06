var sumArray = function (array) {
    return array === null || array === void 0 ? void 0 : array.sort(function (a, b) { return a - b; }).slice(1, array.length - 1).reduce(function (ac, c) { return ac + c; }, 0);
};
console.log(sumArray("fadfsafsdf"));
