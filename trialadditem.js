//GET aws
var AWS = require("aws-sdk");


//CONFIG UPDATE aws
AWS.config.update({
  region: "ap-south-1",
  endpoint: "http://localhost:8000"
});

//docClient
var docClient = new AWS.DynamoDB.DocumentClient();
//Table name
var table = "Movies";
//GET YEAR, TITLE, info
var year =1957;
var title = "12 Angry Men";

var params = {
  TableName: table,
  Item:{
    "year":year,
    "title":title,
    "info":{
        "plot":"A discussion among 12 jurors about a court case",
        "rating":9.6
      }

  }
};

//PUT IT INTO PARAMS


//CALL docClientFUNCTIONS WITH ERROR HANDLING
docClient.put(params,function(err,data) {
if(err){
  console.error("unable to add item",JSON.stringify(err,null,2));
}
else {
  console.log("added item successfully",JSON.stringify(err,null,2));
}

});
