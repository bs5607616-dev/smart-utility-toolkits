// fileManager.js
// File Manager using the fs module - performs CRUD file operations
// Run: node fileManager.js

const fs = require("fs");

const fileName = "test.txt";

// 1. CREATE FILE
console.log("Creating File...");
fs.writeFile(fileName, "Hello Node.js", (err) => {
  if (err) {
    console.log("Error creating file:", err.message);
    return;
  }
  console.log("File Created");

  // 2. READ FILE
  console.log("Reading File");
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err.message);
      return;
    }
    console.log(data);

    // 3. UPDATE FILE (append)
    fs.appendFile(fileName, "\nLearning FS Module", (err) => {
      if (err) {
        console.log("Error updating file:", err.message);
        return;
      }
      console.log("File Updated");
      console.log("Learning FS Module");

      // 4. DELETE FILE
      fs.unlink(fileName, (err) => {
        if (err) {
          console.log("Error deleting file:", err.message);
          return;
        }
        console.log("File Deleted");
      });
    });
  });
});
