const array = ["a", "b", "c", "d", "e"];

// for (var i = 0; i < array.length; i++) {
//   console.log(i, array[i]);
// }

// for (let element of array.entries()) {
//   console.log(element[0], element[1]);
// }

// for (let [key, val] of array.entries()) {
//   console.log(key, val);
// }

// for (let element in array) {
//   console.log(element, array[element]);
// }

// let i = 0;

// while (i < array.length) {
//   console.log(i, array[i]);
//   i++;
// }

// do {
//   console.log(i, array[i]);
//   i++;
// } while (i < array.length);

const obj = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
};

const keys = Object.keys(obj);

// for (let i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   console.log(key, obj[key]);
// }

// for (let [key, val] of Object.entries(obj)) {
//   console.log(key, val);
// }

// for (let element in obj) {
//   console.log(element, obj[element]);
// }

// let i = 0;
// while (i < keys.length) {
//   const key = keys[i];
//   console.log(key, obj[key]);
//   i++;
// }

// do {
//   const key = keys[i];
//   console.log(key, obj[key]);
//   i++;
// } while (i < keys.length);

var myColor = "Blue";
switch (myColor) {
  case "Blue":
    console.log("Just like the sky!");
    break;
  case "Red":
    console.log("Just like shiraz!");
    break;
  default:
    console.log("Suit yourself then...");
}
