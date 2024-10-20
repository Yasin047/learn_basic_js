const obj = {
  name: "Yasin",
  age: 27,
  working() {
    return `${this.name} is learing Javascipt.`;
  },
};
const res = obj.working();
const dynamicWay = obj["name"];

obj.skills = ["html", "css", "javascript"];
obj.task = task = () => {
  return `${obj.name}'s next task is learing backend`;
};

const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i], obj[keys[i]]);
// }

// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// for (const [key, values] of Object.entries(obj)) {
//   console.log(key, values);
// }
let i = 0;
// while (i < keys.length) {
//   console.log(keys[i], obj[keys[i]]);
//   i++;
// }

// do {
//   console.log(keys[i], obj[keys[i]]);
//   i++;
// } while (i < keys.length);

const deletedProperty = delete obj.age;
const deletedMethod = delete obj.working;

const cloneObj = { ...obj, age: 27 };

const objOne = {
  name: "One",
  roll: 1,
};
const objTwo = {
  name: "Two",
  roll: 2,
};

const compareObject = objOne === objTwo;

const car = new Object();
car.name = "Yasin";

const carTwo = Object.create(null);
carTwo.name = "Mahmud";

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
const myCar = new Car("Ford", "Fiesta");

// console.log(myCar.brand, myCar.model);
