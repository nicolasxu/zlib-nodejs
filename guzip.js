var zlib = require('zlib');
var gzip = zlib.createGunzip();
var fs = require('fs');
var input = fs.createReadStream('./output.txt.gz');
var output = fs.createWriteStream('./input_unzipped.txt');

input.pipe(gzip).pipe(output);