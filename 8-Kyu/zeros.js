var noBoringZeros = function (n) {
    if (n < 0) {
        var negative = Number(Math.abs(n).toString().split("").reverse().join(""));
        return -Math.abs(Number(negative.toString().split("").reverse().join("")));
    }
    else {
        return Number(Number(n.toString().split("").reverse().join(""))
            .toString()
            .split("")
            .reverse()
            .join(""));
    }
};
console.log(noBoringZeros(450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(0));
