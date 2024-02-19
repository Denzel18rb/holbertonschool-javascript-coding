#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err); // If an error occurs, print the error object
  } else {
    console.log(data); // Print the content of the file
  }
});
