var AWS = require('aws-sdk');

AWS.config.update({
  region:"ap-south-1",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "SamgathaRegist",
  Item: {
    "Name": "Siddharth",
    "SAMID":"COE16B027",
    "Info": {
    "Email":"siddie@gmail.com",
    "Events Registered":["Singing"],
  "College": "IIIT DM K"
}
  }
};

docClient.put(params, function(err,data){
  if(err){
    console.log("Cannot add item: ",params.Item.Name," Error: ",JSON.stringify(err,null,2));

  }
  else {
    console.log("successfully added item: ", params.Item.Name);
  }

});
