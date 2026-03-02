interface Cat {
  readonly names: string;
  age: number;
  gender: string;
  location?: string;
}

let getsCat = (cat: Cat) => {
  if (cat.location) {
    return `All info are there ${cat.names}, ${cat.age} years, ${cat.location}, ${cat.gender}`;
  }
  return `Hey! This is my info: ${cat.names}, ${cat.age} Years, ${cat.gender}`;
};

let cat: Cat = {
  names: "Nyawu",
  age: 4,
  gender: "Female",
};

cat.names = "Black";

console.log(getsCat(cat));
x;
