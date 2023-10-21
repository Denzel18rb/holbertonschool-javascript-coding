#!/usr/bin/node

const fs = require('fs'); // Import the Node.js 'fs' (File System) module to work with files

const path = process.argv[2]; // Gets the third command line argument, which is the path to the file to read

fs.readFile(path, 'utf-8', (err, data) => { // Read the content of the specified file
  if (err) console.error(err); // If there is an error, display the error message in the console
  else console.log(data); // Si no hay errores, muestra el contenido del archivo en la consola
});
