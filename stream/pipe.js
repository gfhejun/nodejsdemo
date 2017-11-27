let fs = require('fs');

let reader = fs.createReadStream('input.txt');
let writer = fs.createWriteStream('output.txt');

reader.pipe(writer);