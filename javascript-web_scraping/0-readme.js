#!/usr/bin/node

const fs = require('fs');

// Check if the file path is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Usage: node readfile.js <file_path>');
  process.exit(1);
}

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err); // If an error occurs, print the error object
  } else {
    console.log(data); // Print the content of the file
  }
});
