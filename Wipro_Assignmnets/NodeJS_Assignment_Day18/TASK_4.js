//  Async-Await:

const fs = require('fs').promises; 

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('The File Content is :\n', data);
  } catch (err) {
    console.error('Error reading the file :', err.message);
  }
}


const filePath = './nodejs.txt'; 

readFileAsync(filePath);
