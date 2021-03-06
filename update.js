var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "", "secretAccessKey": ""
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {

    
    var params = {
        TableName: "products",
        Key: { "sku": 3 },
        UpdateExpression: "set brand = :Logitech",
        ExpressionAttributeValues: {
            ":Logitech": "HP",
        },
        ReturnValues: "UPDATED_NEW"

    };
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("products::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("products::update::success "+JSON.stringify(data) );
        }
    });
}

modify();