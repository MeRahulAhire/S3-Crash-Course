const AWS = require('aws-sdk');
const s3 = new AWS.S3();

var params = {
	Bucket: 'website-bucket'
};
s3.getBucketPolicyStatus(params, function(err, data) {
	if (err)
		console.log(err, err.stack); // an error occurred
	else console.log(data); // successful response
});
