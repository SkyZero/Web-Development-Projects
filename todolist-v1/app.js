//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs'); //tell express to use ejs as view engine must be below app

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "MissingDate";
      break;
  }
  res.render("list", {
    kindOfDay: day //ejs marker
  }); //must have views folder with list.ejs
  res.sendFile(__dirname + "/weekday.html");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
