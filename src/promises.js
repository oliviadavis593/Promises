//Example 1: Creating a promise
// Call the constructor of the Promise object with a function that includes the args resolve & reject
//p1 is now a Promise object to which handlers may be attached
//resolve & reject params are functions that are called when code succeeds or fails respectively
const p1 = new Promise((resolve, reject) => {
  //YOUR ASYNCHRONOUS CODE GOES HERE
});

//Example 2: Attaching handlers (success)
//To attach a success handler to a Promise use the then() method
//To attach a failure handler to a Promise use the catch() method
//Note: function provided to the then() method only executes after Promise is resolved
const p2 = new Promise((resolve, reject) => {
  console.log("Running the asynchronous code here");
  const duration = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log("About to resolve");
    resolve();
  }, duration);
});

p2.then(() => {
  console.log("The promise was completed successfully ");
});

//Example 3: Attaching handler (failure)
//then() us never called
//When a promise is rejects - it looks for a catch handler & ignores the then()
const p3 = new Promise((resolve, reject) => {
  console.log("Running the asynchronous code here");
  const duration = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log("About to fail");
    reject(); //fail!
  }, duration);
});

p3.then(() => {
  console.log("The promise completed successfully");
}).catch(() => {
  console.log("The promise has failed");
});

//Example 4: Attaching handler (fail debug message)
//It's possible to send a value along with the fail - maybe with a reason to help debug the problem
const p4 = new Promise((resolve, reject) => {
  console.log("The asynchronous code here");
  const duration = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log("About to fail");
    reject("Error 42: Life has no meaning"); //fail with a message
  }, duration);
});

p4.then(() => {
  console.log("The promise completed successfully");
}).catch(err => {
  //Notice the parameter here
  console.log("The promise has failed with the following message:");
  console.log(err);
});

//Example 5: Attaching handler (resolving with a value)

const p5 = new Promise((resolve, reject) => {
  console.log("Running the asynchronous code here");
  const duration = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log("About to resolve");
    resolve(42); //succeed with a value
  }, duration);
});

p5.then(value => {
  //Notice the param here
  console.log("The promise completed successfully with the following value");
  console.log(value);
}).catch(err => {
  console.log("The promise has failed with the following message");
  console.log(err);
});

//Example 6: modifying task runner function (from async.js)
//We can return a Promise ovject
//We can wrap the entire bodt of the function in a promise & resolve when setTimeout() triggers
//When function is called it returns a Promise object
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

//The promise is in pending state because it may not have been resolved yet
//We can see what type of value is returned by this function
//The value returned = a pending promise (A has started - Promise {<pending>})
const p6 = doTask("A");
console.log(p6);

//It's now possible to attach a handler to this promise object
//... because its the final value of the promise that we want

doTask("A").then(result => {
  console.log(result);
});

doTask("B").then(result => {
  console.log(result);
});

doTask("C").then(result => {
  console.log(result);
});

doTask("D").then(result => {
  console.log(result);
});

doTask("E").then(result => {
  console.log(result);
});

doTask("F").then(result => {
  console.log(result);
});

//Final:
// When running this code (Example 6) - code behaves similarly to the previous code
//The tasks run simultaneously & there is no predictable order for their completing
//Except now we're using Promises
//If we wanted to arrange these tasks to run in a particular order = we can use chaning (inside chaining.js)
