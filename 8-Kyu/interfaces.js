var getsCat = function (cat) {
    if (cat.location) {
        return "All info are there ".concat(cat.names, ", ").concat(cat.age, " years, ").concat(cat.location, ", ").concat(cat.gender);
    }
    return "Hey! This is my info: ".concat(cat.names, ", ").concat(cat.age, " Years, ").concat(cat.gender);
};
var cat = {
    names: "Nyawu",
    age: 4,
    gender: "Female",
};
cat.names = "Black";
console.log(getsCat(cat));
