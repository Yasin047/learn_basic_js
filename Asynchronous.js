// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     console.log("hello world");
//   }, 2000);
// });

const done = false;

const promise = new Promise((resolve, reject) => {
  if (done) {
    resolve("Done!");
  } else {
    reject("Error!");
  }
});

const result = () => {
  promise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
result();

const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("I did something"), 3000);
  });
};
const doSomething = async () => {
  console.log(await doSomethingAsync());
};
console.log("Before");
doSomething();
console.log("After");

const aFunction = async () => {
  return "test";
};
aFunction().then((res) => console.log(res));

const aFunctions = () => {
  return Promise.resolve("test");
};
aFunction().then((res) => console.log(res));

const promiseToDoSomething = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("I did something"), 10000);
  });
};

const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething();
  return something + " and I watched";
};
const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething();
  return something + " and I watched as well";
};
watchOverSomeoneWatchingSomeoneDoingSomething().then((res) => {
  console.log(res);
});
