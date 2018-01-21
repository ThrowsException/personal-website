var AWS = require('aws-sdk');
var fs = require('fs');
var glob = require('glob');
var mime = require('mime-types');
var path = require('path');

var s3 = new AWS.S3();

// Bucket names must be unique across all S3 users
var myBucket = 'oneillc.io'

uploadParams = { Bucket: myBucket };
glob('*.html', (e, files) => {
	files.forEach((file) => {
		uploadParams.ContentType = mime.lookup(path.extname(file));
		var fileStream = fs.createReadStream(file);
		fileStream.on('error', (err) => {
			console.log('File Error', err);
		});
		uploadParams.Body = fileStream;

		uploadParams.Key = path.basename(file);

		// call S3 to retrieve upload file to specified bucket
		s3.upload (uploadParams, (err, data) => {
			if (err) {
				console.log("Error", err);
			} if (data) {
				console.log("Upload Success", data.Location);
			}
		});
	});
});
