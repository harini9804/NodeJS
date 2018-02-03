//MODULES

var AWS = require('aws-sdk');
var express = require('express');

//CONFIGURATION

AWS.config.update({
  region: "ap-south-1",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

//PARAMS -  TABLE NAME - TABLE ATTRIBUTES - KEY

var params = {

  TableName: "SamgathaRegist",
  KeySchema: [
    {AttributeName: "SAMID", KeyType: "HASH"}, // what is range type
    {AttributeName: "Name", KeyType:"RANGE"}

  ],
  AttributeDefinitions: [
    {AttributeName: "SAMID", AttributeType: "S"},
    {AttributeName: "Name", AttributeType: "S"}
  ],
  ProvisionedThroughput:{
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

// CREATE TABLE FUNCTION
dynamodb.createTable(params, function(err,data){

  if(err)
  { console.log("Cannot create table, ERROR:",JSON.stringify(err,null,2));
  }
  else{
    console.log("Created table. Table description: ",JSON.stringify(data,null,2));
  }

})
