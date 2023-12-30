const fs = require("fs");
const path = require("path");

const filePath = path.resolve("welcome.txt");


fs.writeFile(filePath, "Hello Node!", (err) => {
  if (err)  throw err;
 
  console.log("File has been created successfully");
});


fs.readFile (filePath,{encoding : "utf8"}, (err, data) => {
  if (err) throw err;
  
  console.log( data);
})