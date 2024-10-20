const map = new Map();

map.set("name", "yasin");
map.set("age", 27);

const name = map.get("name");
const age = map.get("age");

const mapSize = map.size;
const has = map.has("name");
const _has = map.has("age");

// const deleteAge = map.delete("age");
// console.log(_has);
// const clear = map.clear();
// console.log(has);

// map.forEach((key, value) => console.log(value, key));

// for (const [key, value] of map.entries()) {
//   console.log(key, value);
// }

// for (const key of map.keys()) {
//   console.log(key);
// }

// for (const value of map.values()) {
//   console.log(value);
// }

const obj = {
  name: "Yasin",
  age: 27,
};
const newMap = new Map(Object.entries(obj));
// console.log(newMap.get("name"));

const newObj = Object.fromEntries(map);
// console.log(newObj);

// Set

const set = new Set();

set.add("name", "Yasin");
set.add("age", 27);

const setSize = set.size;
const _hasName = set.has("name");
const _hasAge = set.has("age");

// set.forEach((key, value) => console.log(value, key));

// WeakMap

const weakMap = new WeakMap();

weakMap.set(obj, "Yasin");

const getName = weakMap.get(obj);
const hasName = weakMap.has(obj);
// const deleteName = weakMap.delete(obj);
// console.log(deleteName);

// weakSet

const weakSet = new WeakSet();
weakSet.add(obj, "Yasin");
const hasObj = weakSet.has(obj);
// weakSet.delete(obj);
// console.log(weakSet.has(obj));
