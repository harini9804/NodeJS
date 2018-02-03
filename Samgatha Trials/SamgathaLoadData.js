var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
  region: "ap-south-1",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log('Loading data..');

var allData = JSON.parse(fs.readFileSync('sampledata.json','utf-8'));

allData.forEach(function(person){
  var params = {
    TableName: "SamgathaRegist",
    Item:{
      "SAMID": person.SAMID,
      "Name": person.Name,
      "Info": person.Info
    }
  };


  docClient.put(params,function(err,data){
    if(err)
    {
      console.log("Unable to add person: ", person.Name," .Error JSON:", JSON.stringify(err,null,2));
    }
    else {
      console.log("Added person: ",person.Name);
    }
  });
});
