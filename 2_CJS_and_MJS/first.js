const {sum, sub, mul} = require("./calculate/index");

// sum
sum(2,5);
// sub
sub(4,5);
// mul
mul(3,4);

console.log("HEY...");



// 1. Difference between CJS (require) and MJS (import/export)
// CJS → CommonJS (Older system)

// Uses: require and module.exports

// Default in Node.js (before ES Modules came).

// Loads modules synchronously (line by line).

// File extension: .js (by default considered CommonJS in Node.js unless told otherwise).

// 👉 Example:

// // math.js
// const add = (a, b) => a + b;
// module.exports = add;

// // main.js
// const add = require("./math");
// console.log(add(2, 3)); // 5

// MJS → ES Modules (Modern system)

// Uses: import and export

// Introduced in ES6 (2015), now supported in Node.js.

// Loads modules asynchronously (non-blocking).

// File extension: .mjs OR use "type": "module" in package.json.

// 👉 Example:

// // math.mjs
// export const add = (a, b) => a + b;

// // main.mjs
// import { add } from "./math.mjs";
// console.log(add(2, 3)); // 5

// ✅ Summary Table
// Feature	CJS (require)	MJS (import/export)
// Syntax	require, module.exports	import, export
// Default in Node.js	Yes (old)	No (need .mjs or "type":"module")
// Loading	Synchronous	Asynchronous
// Browser support	❌ No (without bundler)	✅ Yes
// 🔹 2. About index.js Auto-loading

// When you create a folder structure in Node.js, Node has a special behavior:

// 👉 If you require a folder without specifying a file, Node will automatically look for an index.js inside that folder.

// Example:
// project/
//  ┣ math/
//  ┃ ┣ add.js
//  ┃ ┣ sub.js
//  ┃ ┗ index.js
//  ┣ main.js


// index.js:

// const add = require("./add");
// const sub = require("./sub");

// module.exports = { add, sub };


// main.js:

// const math = require("./math"); // Node automatically loads index.js
// console.log(math.add(5, 3)); // 8
// console.log(math.sub(5, 3)); // 2


// ✅ So yes, if you gather everything inside index.js, then when you require("./folder"), Node.js will automatically pick up index.js.

// 👉 To sum up:

// CJS vs MJS = old vs modern module systems.

// index.js = entry point shortcut so you don’t have to import multiple files separately.





