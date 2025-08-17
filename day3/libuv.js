// 🔹 What is libuv?

// libuv is a C library that Node.js uses under the hood.

// Its job is to provide asynchronous, non-blocking I/O operations (like file system, networking, timers).

// It gives Node.js its “magic” of handling async tasks while JavaScript itself is single-threaded.

// 👉 Without libuv, Node.js would just be JavaScript + V8 (synchronous only).

// 🔹 Main Features of libuv

// Event Loop → Heart of libuv, manages tasks.

// Thread Pool → For expensive tasks (e.g., file I/O, DNS lookup, crypto).

// Async I/O → Non-blocking operations for network and file system.

// Cross-platform support → Works on Linux, Windows, macOS.

// 🔹 libuv Architecture (simplified)
// Your JavaScript Code
//         │
//         ▼
//    V8 Engine (executes JS)
//         │
//         ▼
// Node.js Core APIs (fs, net, http, crypto, timers, etc.)
//         │
//         ▼
//        libuv
//    ┌───────────────┐
//    │  Event Loop   │
//    │   (1 thread)  │
//    └───────────────┘
//      │         │
//      ▼         ▼
//  OS async APIs  Thread Pool (4 threads by default)

// 🔹 Event Loop in libuv

// The event loop is a cycle with different phases:

// Timers → Executes setTimeout and setInterval.

// Pending Callbacks → I/O callbacks waiting to run.

// Idle/Prepare → Internal use.

// Poll → Waits for new I/O events (network, files).

// Check → Executes setImmediate callbacks.

// Close Callbacks → Runs cleanup tasks (like socket close).

// This loop runs continuously until no tasks remain.

// 🔹 Thread Pool in libuv

// Not everything can be async at OS level (e.g., file system operations).

// libuv uses a thread pool (default size = 4) for such tasks.

// Example: fs.readFile() runs in libuv’s thread pool.

// 👉 That’s why CPU-intensive tasks (like hashing with crypto) also go to the thread pool.

//🔹 Example with libuv in action
const fs = require('fs');

console.log("Start");

// File read (goes to libuv thread pool)
fs.readFile("./data.json", "utf8", (err, res) => {
  console.log("fs content:", res); // this will give data of "data.json" file 
});

setTimeout(() => {
  console.log("Timer done");
}, 0); // run after console.log("End") althoug it is 0 second...

console.log("End");

// Execution Flow:

// JS runs "Start" → V8 executes.

// fs.readFile → delegated to libuv thread pool.

// setTimeout → handled by libuv timers.

// JS runs "End".

// After main stack empty → event loop picks finished tasks → logs “Timer done” and file content.

// ✅ Output:

// Start
// End
// Timer done
// File content: ...

// 🔹 In short:

// JavaScript → writes code.

// V8 → executes JS synchronously.

// libuv → provides async power with Event Loop + Thread Pool.

// Node.js → glues them together.