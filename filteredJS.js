var fs = require('fs');
var path = require('path');

var filepath = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(filepath, callback);

function callback(err, list)
{
	if(err != 1)
	{
		for (var i = 0; i < list.length; i++) 
		{
			if(path.extname(list[i]) == ext)
			{
				console.log(list[i]);
			}

		};
	}
}