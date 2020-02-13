//Example 1: Chaining
//Suppose we wanted the code to behave just as it does
//Except task C should only start after task B is completed
//We can chain those two tasks
function doTask(name) {
  const p = new Promise((resolve, reject) => {
    console.log(`${name} has started`);
    const duration = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve(`${name} has ended after ${duration} miliseconds`);
    }, duration);
  });
  return p;
}

//In the then() function for task B we can start task C
// Each then() returns a new promise = means we can attach another then() to it
doTask("B")
  .then(result => {
    console.log(result);
    return doTask("C");
  })
  .then(result => {
    console.log(result);
  });

//Example 2: Promise.all()
//We have some tasks that may occur asynchronously & we don't care which order they're done
//But task D must wait for all of them to be done before it can start
//We can use Promise.all() to run several async operations in parallell
//Promise.all() accepts an array of Promises & ensures that all are resolved before invoking the then() method

Promise.all([p1, p2, p3]).then(arr => {
  // arr is an array [result1, result2, reuslt3]
});

//Example 2 Pt II: Promise.all()
//We can modify the code to run taks A, B, and C in parallell - then run task D
Promise.all([doTask("A"), doTask("B"), doTask("C")])
  .then(results => {
    //1st console.log the result
    results.forEach(result => console.log(result));
    return doTask("D");
  })
  .then(result => {
    console.log(result);
  });

//The output from this program shows that the 1st three tasks are completed before task D is started
/*
  A has started
  B has started
  C has started
  A has ended after 4137 milliseconds
  B has ended after 3820 milliseconds
  C has ended after 3275 milliseconds
  D has started
  D has ended after 3091 milliseconds
  */
