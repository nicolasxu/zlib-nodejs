var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var input = fs.createReadStream('./input.txt');
var output = fs.createWriteStream('./output.txt.gz');


input.pipe(gzip).pipe(output);