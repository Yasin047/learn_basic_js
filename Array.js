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

const find = (val) => {
  return myArrays.find((item) => {
    item === val;
  });
};

console.log(find("a"));
