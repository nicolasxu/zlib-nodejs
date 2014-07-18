/**
 * zlib module can only compress individual data file, but zipping folder requires retaining the folder structure for unzpipping, 
 * which nodejs zlib does not provide. 
 * The common solution is 1) tar the folder and then 2) zip the tar file. That's why it is called tar-zip. Run the following
 * command to install tar:
 * 
 * 		npm install tar fstream --save
 * 		
 * You can find the source code here https://github.com/isaacs/node-tar
 * Run target folder to tar, then gzip, and finally output. You will end up with a tar zip.
 * 
 * Source: 
 * http://stackoverflow.com/questions/15530435/node-js-zip-unzip-a-folder
 */


var tar = require('tar'),
	fs = require('fs'),
	fstream = require("fstream"),
 	zlib = require('zlib'),
 	gzip = zlib.createGzip(),
 	output = fs.createWriteStream('./output_folder.tar.zip');


fstream.Reader({path:'./target_folder', type:'Directory'})
	.pipe(tar.Pack({noProprietary: true}))
	.pipe(gzip)
	.pipe(output);

