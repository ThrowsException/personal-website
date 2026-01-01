const { Upload } = require('@aws-sdk/lib-storage');
const { S3 } = require('@aws-sdk/client-s3');

var fs = require('fs');
var glob = require('glob');
var mime = require('mime-types');
var path = require('path');

var s3 = new S3();

// Bucket names must be unique across all S3 users
var myBucket = 'oneillc.io';

uploadParams = { Bucket: myBucket };
glob('*.html', (e, files) => {
  files.forEach(async (file) => {
    uploadParams.ContentType = mime.lookup(path.extname(file));
    var fileStream = fs.createReadStream(file);
    fileStream.on('error', (err) => {
      console.log('File Error', err);
    });
    uploadParams.Body = fileStream;

    uploadParams.Key = path.basename(file);

    await new Upload({
      client: s3,
      params: uploadParams
    }).done();
  });
});
