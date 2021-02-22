var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "", "secretAccessKey": ""
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var params = {
        TableName: "vehicles",
        Item:  {
            'licensePlate': 'ADS321',
            'brand': 'Chevrolet',
            'model': 2016,
            'typeVehicle': 'car'
        }
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("vehicles::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("vehicles::save::success" + JSON.stringify(data, null, 2));                      
        }
    });
}

save();