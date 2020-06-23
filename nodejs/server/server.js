let path = require('path');
let fs = require('fs');


let chirpsPath = path.join(__dirname, '../chirps.json');

// Reads the content of the chirps file
let readChirps = fs.readFileSync(chirpsPath);
// Parses the raw buffer back into readable JSON
console.log(JSON.parse(readChirps));