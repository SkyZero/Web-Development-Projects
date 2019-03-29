//jshint esversion:6

// npm init -> npm install express body-parser
const request = require("request");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
var crypto = req.body.crypto; //take info from dropdown menu
var fiat = req.body.fiat;
var amount = req.body.amount;

//console.log(req.body.crypto);

var options = {
  url: "https://apiv2.bitcoinaverage.com/convert/global",
  method: "GET",
  qs: {
    from: crypto,
    to: fiat,
    amount: amount
  }
};

request(options, function(error, response, body){
  var data = JSON.parse(body);//changes json object into js object
  var price = data.price;

  console.log(price);
  //res.send("<h1>The current price of " + crypto + " is " + price + " " + fiat + "</h1>"); //can only send once

  var currentDate = data.time;
  res.write("<p>The current date is " + currentDate + "</p>");
  res.write("<h1>" + amount + " " + crypto + " is currently worth " + price + " " + fiat + "</h1>");
  res.send(); //hitting the send button

  console.log(price);
});

});


app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
