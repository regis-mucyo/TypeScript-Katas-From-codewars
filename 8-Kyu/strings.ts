function getCount(str: string): number {
  let vowels = "aeiou";
  let check = str.toLowerCase().split("");
  return check.filter((e) => vowels.includes(e)).length;
}
console.log(getCount("Regis")); // 2
