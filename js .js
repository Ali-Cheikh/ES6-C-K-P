const pets = [
  { name: "max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (pet) => {
  return new Date().getFullYear() - pet.bornOn;
}


let petsWithAge = [];
pets.forEach((pet) => {
  pet.age = getAge(pet);
  petsWithAge.push(pet);
});
console.log(petsWithAge);


let dogs = [];
pets.forEach((pet) => {
  pets.filter(pets => pets.type === "dog")
  dogs.push(pet);
});
console.log(dogs);

let jasper;
pets.forEach((pet) => {
  pets.filter(pets => pets.name === "Jasper")
  jasper = pet;
});
console.log(`Jasper is ${jasper.age} years old`);


