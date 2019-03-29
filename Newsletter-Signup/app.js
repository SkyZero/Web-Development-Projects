//jshint esversion:6

// npm init -> npm install express body-parser
const request = require("request");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public")); //uploads a local folder that allows for access to files

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
