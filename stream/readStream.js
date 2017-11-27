let fs = require('fs');
let data = '';

let reader = fs.createReadStream('input.txt');
reader.setEncoding('UTF8');

reader.on('data', function(chunk) {
	data += chunk;
});

reader.on('end', function(){
	console.log(data);
});

reader.on('err', function(err){
	console.log(err.stack);
});

