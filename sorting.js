// Sorting Numbers in Ascending Order
const numbersAscending = [4, 2, 7, 1, 5];
numbersAscending.sort((a, b) => a - b);
console.log("Numbers in Ascending Order:", numbersAscending);

// Sorting Numbers in Descending Order
const numbersDescending = [4, 2, 7, 1, 5];
numbersDescending.sort((a, b) => b - a);
console.log("Numbers in Descending Order:", numbersDescending);

// Sorting Strings in Alphabetical Order
const fruits = ["apple", "banana", "cherry", "date", "blueberry"];
fruits.sort();
console.log("Fruits in Alphabetical Order:", fruits);

// Sorting Objects by a Property
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

people.sort((a, b) => a.age - b.age);
console.log("People sorted by Age:", people);

// Sorting with a Custom Comparator
const words = ["apple", "banana", "cherry", "date", "blueberry"];
words.sort((a, b) => a.length - b.length);
console.log("Words sorted by Length:", words);

// Reverse Sorting
const numbersToReverse = [1, 2, 3, 4, 5];
numbersToReverse.reverse();
console.log("Reversed Numbers:", numbersToReverse);
