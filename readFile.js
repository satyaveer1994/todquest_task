const fs = require('fs');

// Define the directory path
const directoryPath = './';

// Read the directory and get all the files
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 

  // List all the files
  files.forEach(function (file) {
    console.log(file);
  });
});

