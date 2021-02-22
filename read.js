var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIARWFB7FHXC3LEPKX2", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "vehicles",
        Key: {
            "licensePlate": "ABC123"
        }
    };

    docClient.get(params, function (err, data) {
        console.log('this is data', JSON.stringify(data));
        if (err) {
            console.log("vehicles::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("vehicles::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();
        