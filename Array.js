const myArray = ["a", "b", "c", "d", "e"];
const push = myArray.push("f");
// console.log(push);
const pop = myArray.pop();
// console.log(pop);
const shift = myArray.shift();
// console.log(shift);
const unshift = myArray.unshift("one");
// console.log(unshift);
const slice = myArray.slice(1, myArray.length - 1);
// console.log(slice);
const splice = myArray.splice(0, myArray.length);
// console.log(splice);

const myArrays = ["a", "b", "c", "d", "e"];
const map = myArrays.map((item) => {
  //   console.log(item);
});
const forEach = myArrays.forEach((element) => {
  //   console.log(element);
});
const reduce = myArrays.reduce((val, acc) => {
  //   console.log(val);
  return acc;
});
const reduceRight = myArrays.reduceRight((val, acc) => {
  //   console.log(val);
  return acc;
});

const entries = Object.entries(myArrays);
// console.log(entries);
const keys = Object.keys(myArrays);
// console.log(keys);
const values = Object.values(myArrays);
// console.log(values);

// for (let i = 0; i < myArrays.length; i++) {
//   console.log(i, myArrays[i]);
// }

// for (let key in myArrays) {
//   console.log(key, myArrays[key]);
// }

// for (let [key, value] of Object.entries(myArrays)) {
//   console.log(key, value);
// }

let i = 0;

// while (i < myArrays.length) {
//   console.log(i, myArrays[i]);
//   i++;
// }

// do {
//   console.log(i, myArrays[i]);
//   i++;
// } while (i < myArrays.length);

const myArrays2 = ["a", "b", "c", "d", "e", "a", "b", "c"];

const filter = (val) => {
  // return myArrays2.filter((item) => item === val);
  return myArrays2.filter((item) => item !== val);
};
const find = (val) => {
  return myArrays2.find((item) => item === val);
};

const findLast = (val) => {
  return myArrays2.findLast((item) => item === val);
};
const findIndex = (val) => {
  return myArrays2.findIndex((item) => item === val);
};

const findLastIndex = (val) => {
  return myArrays2.findLastIndex((item) => item === val);
};
const indexOf = (val) => {
  return myArrays2.indexOf(val);
};

const lastIndexOf = (val) => {
  return myArrays2.lastIndexOf(val);
};

const includes = (val) => {
  return myArrays2.includes(val);
};

const some = (val) => {
  return myArrays2.some((item) => item === val);
};

// const arr = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
const every = (val) => {
  // return arr.every((item) => item === val);
  return myArrays2.every((item) => item === val);
};

const length = myArrays2.length;
const toString = myArrays2.toString();
const concat = myArrays2.concat("f");
const join = myArrays2.join("f");
const isArray = Array.isArray(myArrays2);
// const copyWithin = myArrays2.copyWithin("a", 2);
// const fill = myArrays2.fill("x", 1);
// const fill = Array(10).fill("x");
const flat = myArrays2.flat((item) => item);
const flatMap = myArrays2.flatMap((item) => item);
// const from = myArrays2.from();
const reverse = myArrays2.reverse();
const toReversed = myArrays2.toReversed();
const sort = myArrays2.sort();
const toSorted = myArrays2.toSorted();
const withArray = myArrays2.with();
