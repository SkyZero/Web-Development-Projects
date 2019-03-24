//jshint esversion:6
//npm install -g nodemon to install auto refresh website
//nodemon server.js to start auto refresh

const express = require("express");
const app = express(); //app is best for using express()

app.get("/", function(req, res){ // "/" is the home root (localhost:3000)/req for request and res for response
  res.send("<h1>Hello</h1>"); //
});

app.get("/contact", function(req, res){ // /contact = webpage/contact
  res.send("Contact me at: EdwardChao@live.com");
});

app.get("/about", function(req, res){
  res.send("My name is Edward and I love dogs and code.");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Dogs</li><li>Code</li><li>Water</li></ul>");
});

app.listen(3000, function(){ //starts server on port 3000
  console.log("Server started on port 3000");
});
