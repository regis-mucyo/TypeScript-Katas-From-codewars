function invert(array: number[]): number[] {
  return array?.map((n) => n * -1) ?? [];
}
console.log(invert([]));
