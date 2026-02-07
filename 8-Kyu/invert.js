function invert(array) {
    var _a;
    return (_a = array === null || array === void 0 ? void 0 : array.map(function (n) { return n * -1; })) !== null && _a !== void 0 ? _a : [];
}
console.log(invert([1, 2, -2, 5, -55, 2]));
