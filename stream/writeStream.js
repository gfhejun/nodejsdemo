let fs = require('fs');
let data = 'write onlyforhebe';

let writer = fs.createWriteStream('output.txt');
writer.write(data, 'UTF8');
writer.end();

writer.on('finish', function() {
	console.log('finish writing');
});

writer.on('error', function(err){
	console.log(err.stack);
});