function sum(a,b){
    console.log(a+b);
    
}

export default sum;







// What is Node.js?

// Node.js is a runtime environment that lets you run JavaScript outside the browser.

// Normally, JavaScript runs only in browsers (like Chrome, Firefox, etc.) to make web pages interactive.

// With Node.js, you can use JavaScript for server-side programming (APIs, backend apps, etc.).

// 👉 In short: Node.js = JavaScript on the server.

// 🔹 What is the V8 Engine?

// V8 is Google’s JavaScript engine, originally made for Chrome.

// It’s written in C++.

// It takes your JavaScript code and compiles it directly into machine code (instead of interpreting line by line), making it very fast.

// 👉 In short: V8 = the engine that executes JavaScript code.

// 🔹 How Node.js and V8 are Related

// Node.js itself doesn’t “run JavaScript” — instead, it uses the V8 engine to execute JavaScript.

// Node.js adds extra features (like fs for file system, http for creating servers, etc.) on top of V8.

// So you can think of it like this:

// JavaScript Code  --->  V8 Engine (executes code)  
//                     + Node.js APIs (fs, http, events, etc.)


// ✅ Example:
// If you write this code in Node.js:

// console.log("Hello, Faisal!");


// console.log is provided by Node.js,

// Node.js sends the JS code to the V8 engine,

// V8 compiles & executes it as machine code,

// The result is printed on your terminal.

// 👉 So, Node.js = V8 Engine + Node.js APIs (C++ bindings + libraries).