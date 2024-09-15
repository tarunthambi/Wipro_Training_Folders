// Callback Functions:

const fs = require('fs');

function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}


const filePath = './nodejs.txt';

readFile(filePath, (err, content) => {
  if (err) {
    console.error('Error reading the file:', err.message);
  } else {
    console.log('The File Content is :\n', content);
  }
});
