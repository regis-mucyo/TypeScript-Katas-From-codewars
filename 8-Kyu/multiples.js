"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (num) {
        var array = [];
        for (var i = 1; i < num; i++) {
            array.push(i);
        }
        if (num === 0)
            return 0;
        return array
            .filter(function (e) { return e % 3 === 0 || e % 5 === 0; })
            .reduce(function (ac, ele) { return ac + ele; }, 0);
    };
    return Challenge;
}());
exports.Challenge = Challenge;
console.log(Challenge.solution(0));
