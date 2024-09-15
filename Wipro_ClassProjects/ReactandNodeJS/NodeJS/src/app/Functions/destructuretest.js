//Destructuring from Arrays:
//Assign elements to variables in the order they appear in the array.

const numbers = [1, 2, 3];
const [first, second] = numbers;

console.log(first); // 1
console.log(second); // 2

//Skipping Elements: Use empty slots to skip unwanted elements.
const colors = ["red", "green", "blue", "yellow"];
const [firstColor, , thirdColor] = colors;  // Skips second element

console.log(firstColor);  // "red"
console.log(thirdColor); // "blue"

//Rest Operator (...): Capture remaining elements into an array.
const letters = ["a", "b", "c", "d", "e"];
const [firstLetter, ...rest] = letters;

console.log(firstLetter); // "a"
console.log(rest);        // ["b", "c", "d", "e"]

//Destructuring from Objects:
//Extract properties by name into variables.
const person = { name: "Alice", age: 30 };
const { name, age } = person;

console.log(name); // "Alice"
console.log(age);  // 30

//Default Values: Assign default values if properties don't exist.
const profile = { username: "Bob" };
const { username, location = "unknown" } = profile;

console.log(username); // "Bob"
console.log(location); // "unknown" (default value)

//Renaming Properties: Assign properties to variables with different names.
const user = { id: 123, userName: "Charlie" };
const { id: userId, userName: fullName } = user;

console.log(userId);   // 123
console.log(fullName); // "Charlie"