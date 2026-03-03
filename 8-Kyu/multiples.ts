export class Challenge {
  static solution(num: number) {
    let array: number[] = [];
    for (let i: number = 1; i < num; i++) {
      array.push(i);
    }
    if (num === 0) return 0;
    return array
      .filter((e) => e % 3 === 0 || e % 5 === 0)
      .reduce((ac, ele) => ac + ele, 0);
  }
}
console.log(Challenge.solution(10)); // Output 23
