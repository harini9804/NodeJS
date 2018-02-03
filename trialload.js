var AWS= require("aws-sdk");
var fs=require("fs");

AWS.config.update({
  region: "ap-south-1",
  endpoint:"http://localhost:8080"
});
//GET DOCUMENT docClient
var docClient = AWS.DynamoDB.DocumentClient();

// PARSE JSON FILE
var allMovies = JSON.parse(fs.readFileSync('moviedata.json','utf8'));

//FOR EVERY OBJECT, MAP IT TO Table

allMovies.forEach(function(movie){

  var params = {
TableName: "Movies",
Item: {
    "year": movie.year,
    "title": movie.title,
      "info":movie.info
    }
  };

  docClient.put(params,function(err,data){
    if(err){
      console.error("Cannot add movie");
    }
    else{
      console.log("succeeded");mov
    }
  })


})
