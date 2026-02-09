var createPhoneNumber = function (numbers) {
    return "(".concat(numbers.slice(0, 3).join(""), ") ").concat(numbers.slice(3, 6).join(""), "-").concat(numbers.slice(6, numbers.length - 1));
};
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
