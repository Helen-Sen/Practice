let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

let arrKeys = Object.keys(car);
console.log(arrKeys);

for (key of arrKeys) {
    console.log(key);
};

for (let key of Object.values(car)) {
  console.log(key);
};

let arrKeys1 = Object.keys(car);
for (let i = 0; i < arrKeys.length; i++) {
  console.log(arrKeys1[i] + ": " + car[arrKeys1[i]]);
};

let arrEntries = Object.entries(car);
console.log(arrEntries);
for (const [key, value] of Object.entries(car)) {
  console.log(key, ":", value);
}

