

var tar = require('tar'),
	fs = require('fs'),
	fstream = require("fstream"),
 	zlib = require('zlib'),
 	guzip = zlib.createGunzip(),
 	input = fs.createReadStream('./output_folder.tar.zip');


input.pipe(guzip).pipe(tar.Extract({path:'./extract'}));


