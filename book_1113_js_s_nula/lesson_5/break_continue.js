let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  },
];
for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 2020) {
    if (cars[i].color === "black") {
      console.log("I have found my new car:", cars[i]);
      break;
    }
  }
}

console.log("-------------------------------------------------------");
let groups = [
  ["Martin", "Daniel", "Keith"],
  ["Margot", "Marina", "Ali"],
  ["Helen", "Jonah", "Sambikos"],
];

for (let i = 0; i < groups.length; i++) {
  let matches = 0;
  for (let j = 0; j < groups[i].length; j++) {
    if (groups[i][j].startsWith("M")) {
      matches++;
    } else {
      continue;
    }
    if (matches === 2) {
      console.log("Found a group with two names starting with an M:");
      console.log(groups[i]);
      break;
    }
  }
}

for (let group of groups) {
  for (let member of group) {
    if (member.startsWith("M")) {
      console.log("found one starting with M:", member);
      break;
    }
  }
}