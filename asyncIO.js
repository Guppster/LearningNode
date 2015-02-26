var fs = require('fs');

var filepath = process.argv[2];

fs.readFile(filepath, 'utf8', callback);

function callback(err, data)
{
	if(err != 1)
	{
		console.log(data.split('\n').length - 1);
	}
}