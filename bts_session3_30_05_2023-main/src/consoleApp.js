//Read the file helloWorld.js and extract the data from function
const helloWorldFunction = require("./helloWorld");
//Call invoke the function
const response = helloWorldFunction();
//Log the response in my console
const text = JSON.stringify(response)
console.log(text);
