//jshint esversion:6
//npm init -> npm install express -> npm install body-parser

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); //uses express and body-parser to use req.body / extended allows to post nested objects

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html"); //__dirname is the current file's location
});

app.post("/", function(req, res){ //takes in post data
  var num1 = Number(req.body.num1);//req.body = form data /req.body.num1 = first number inputted  comes back as string
  var num2 = Number(req.body.num2); //Number() changes var into numbers //num1 and num2 is the name given in index.html

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);  
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
