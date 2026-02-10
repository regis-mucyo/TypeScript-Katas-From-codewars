const noBoringZeros = (n: number): any => {
  let nu: string = n.toString().split("").reverse().join("");
  return nu.split;
};

console.log(noBoringZeros(450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(0));
