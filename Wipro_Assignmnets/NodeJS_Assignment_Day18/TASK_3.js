// Creating and using Promises:

// readFilePromise.js
const fs = require('fs');

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}


const filePath = './nodejs.txt'; 

readFilePromise(filePath)
  .then((content) => {
    console.log('The File Content is:\n', content);
  })
  .catch((err) => {
    console.error('Error reading the file:', err.message);
  });
