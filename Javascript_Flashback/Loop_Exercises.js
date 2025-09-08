// 1- Write a 'for' loop that loops through the array [''green tea,'black tea','chai','oolong tea'] and stops the loop when it finds 'chai'.Store all teas before 'chai' in a new array named 'selectedTeas'.

const teas = ["green tea", "black tea", "chai", "oolong tea"];
const selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] == "chai") {
    break;
  } else {
    selectedTeas[i] = teas[i];
    // selectedTeas.push(teas[i])
  }
}
// console.log(selectedTeas);

// 2- Write a 'for' loop that loops through the array ['London','New York','Paris','Berlin'] and skips 'paris'. Store the other cities in a new array named 'visitedCities'

const cities = ["London", "New York", "Paris", "Berlin"];
const visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "Paris" || cities[i] == "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities)

// 3- Use a 'for-of' loop to iterate through the array [1,2,3,4,5] and stops when the number '4' is found. Store the numbers before '4' in an array named 'smallNumbers'

const nums = [1, 2, 3, 4, 5];
const smallNumbers = [];
for (const num of nums) {
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

// 4- Use a 'for-of' loop to iterate through the array ['chai','grren tea','herbal tea','blacktea'] and skip 'herbal tea'. Store the other teas in an array named 'preferredTeas'.

const chais = ["chai", "grren tea", "herbal tea", "blacktea"];
const preferredTeas = [];

for (const chai of chais) {
  if (chai == "herbal tea") {
    continue;
  }
  preferredTeas.push(chai);
}
// console.log(preferredTeas);

// 5- Use a 'for-in' loop to loop through an object containing city populations. Stop the loop when the population of 'Berlin' is found and store all previous cities populations in a new object named 'cityPopulations'

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulations = {};

for (let city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityPopulations[city] = citiesPopulation[city];
}
// console.log(cityPopulations);

//  6- Use a 'for-in' loop to loop through an object containing city populations. Skip any city with a population below 3 million and store the rest in a new object named 'largeCities'

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};
for (let city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
// console.log(largeCities);

// 7- Write a 'forEach' loop that iterates through the array ['earl grey','green tea','chai','oolong tea'].Stop the loop when 'chai' is found, and store all previous tea types in an array named 'availableTeas'.

const teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
const availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea == "chai" || tea == "Chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

// 8- Write a 'forEach' loop that iterates through the array ['Berlin','Tokyo','Sydney','Paris']. Skip 'Sydney' and store the other cities in a new array named 'traveledCities'.

const diffCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
const remainingCities = [];

diffCities.forEach((city) => {
  if (city == "Sydney") {
    return;
  }
  remainingCities.push(city);
});
// console.log(remainingCities);

// 9- Write a 'for' loop that iterates through the array [2,5,7,9]. Skip the value '7' and multiply the rest by 2. Store the results in a new array named 'doubledNumbers'.

const numbers = [2, 5, 7, 9];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 7) {
    continue;
  }
  doubledNumbers.push(numbers[i] * 2);
}
// console.log(doubledNumbers);

// 10- Use a 'for-of' loop to iterate through the array ['chai','green tea','black tea','jasmine tea','herbal tea'] and stop when the length of the current tea name is greater than 10. Store the teas iterated over in an array named 'shortTeas'.

const availableChais = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];
const shortTeas = [];
for (let chai of availableChais) {
  if (chai.length > 10) {
    break;
  }
  shortTeas.push(chai);
}
console.log(shortTeas);
