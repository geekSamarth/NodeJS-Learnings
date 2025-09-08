// Write a 'for' loop that loops through the array [''green tea,'black tea','chai','oolong tea'] and stops the loop when it finds 'chai'.Store all teas before 'chai' in a new array named 'selectedTeas'.

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

// Write a 'for' loop that loops through the array ['London','New York','Paris','Berlin'] and skips 'paris'. Store the other cities in a new array named 'visitedCities'

const cities = ["London", "New York", "Paris", "Berlin"];
const visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "Paris" || cities[i] == "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities)

// Use a 'for-of' loop to iterate through the array [1,2,3,4,5] and stops when the number '4' is found. Store the numbers before '4' in an array named 'smallNumbers'

const nums = [1, 2, 3, 4, 5];
const smallNumbers = [];
for (const num of nums) {
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);
