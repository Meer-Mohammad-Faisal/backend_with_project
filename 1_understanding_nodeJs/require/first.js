const sum = require("./second")


sum(3,4);
console.log("Hello I am first");


// CJS: common js module
// i need second. js code in my first.js file




// 1. JavaScript is Single-threaded

// JavaScript itself has one call stack → executes one thing at a time.

// Example:

// console.log("Task 1");
// console.log("Task 2");


// Always runs in order (synchronously).

// 🔹 2. Then how do we get Asynchronous Behavior?

// JavaScript alone can’t do async.
// 👉 The trick is: JavaScript + Runtime (Browser or Node.js) + Event Loop

// In Browser → Web APIs handle async tasks (setTimeout, fetch, DOM events).

// In Node.js → libuv handles async tasks (I/O, timers, networking, etc.).

// So, when you write:

// setTimeout(() => console.log("Async Task"), 2000);
// console.log("Sync Task");

// What happens under the hood:

// setTimeout is not part of JavaScript — it’s provided by Browser/Node.js.

// Timer starts in Web API (browser) or libuv (Node.js).

// Meanwhile, JS continues executing the next line (Sync Task).

// When the timer finishes, the callback goes to the Callback Queue.

// Event Loop checks if the Call Stack is empty → then pushes callback for execution.

// ✅ Output:

// Sync Task
// Async Task

// 🔹 3. Behaving like Multithreading

// JavaScript is still single-threaded, but because:

// Long tasks (file read, DB query, API call, timers) are delegated to background workers (libuv thread pool or browser APIs).

// Event loop brings results back later.

// 👉 So it looks like multithreading (because tasks run “in parallel”), but actually:

// Main thread = runs your JS code

// Background workers = handle async tasks

// 🔹 4. Quick Analogy

// Think of JavaScript as a chef (single-threaded) in a kitchen:

// Chef takes an order (function) and starts cooking.

// If it’s a long task (bake pizza 20 mins), the chef gives it to the oven (Web API/libuv).

// Chef continues cooking other dishes meanwhile.

// When pizza is done, the oven notifies the chef (Event Loop), and the chef serves it.

// 👉 That’s how async = delegation + event loop, not true multithreading.

// ✅ So, JavaScript = synchronous, single-threaded
// But JavaScript Runtimes (Browser, Node.js) + Event Loop + Background Workers → give async, non-blocking, “multithread-like” behavior.