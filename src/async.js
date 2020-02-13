//Example 1:
//setTimeout() function takes 2 args - function to be executed & a time in miliseconds
//Output = waited the number of miliseconds & logged the string to the console
setTimeout(() => {
  console.log("Hey I waited 3 seconds ");
}, 3000);

//Example 2:
//setTimeout() runs asnychronously (while its waiting - other code in script will continue to run)
//Output = 1st & last statement will run immediately & setTimeOut function will be the last as it has to wait 2 miliseconds before logging
console.log("The code has started");
setTimeout(() => {
  console.log("Hey! I waited 3 seconds");
}, 3000);
console.log("This is the last statement in the file");

//Example 3:
//We'll use Math.random() to make setTimeout() waits a random amount of time
// Math.random() generates a random floating point number between 0 and 1
//Output = Even though there is a sequence in which we displayed the console.logs they can be randomly displayed in the console
console.log("The code has started");
const duration = Math.floor(Math.random() * 5000);
setTimeout(() => {
  console.log(`Hey! I waited ${duration} miliseconds`);
}, duration);
console.log("This is the last statement in the file");

//Example 4:
// Diagram = A1-B1-C3-D2-E3-F1
//If these tasks are executed sychronously - it'll take at least 12 sec to complete
//If they're executued asynchronously - then it'll only taks about 3 seconds (highest sec is 3 in the diagram) like so:
//Note: Each task take some random amount of time to execute but they execute asynchronously
//Output: All tasks complete in less than 5 seconds - There isno predictable pattern to which task will complete first
function doTask(name) {
  console.log(`${name} has started`);
  const duration = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log(`${name} has ended after ${duration} miliseconds`);
  }, duration);
}

doTask("A");
doTask("B");
doTask("C");
doTask("D");
doTask("E");
doTask("F");

//Using promises  ===> promises.js
