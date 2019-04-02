//jshint esversion:6

// npm init -> npm install express body-parser
const request = require("request");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public")); //uploads a local folder that allows for access to files
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName
        }
      }//mailchimp format
    ]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/de4c72d2d5", // orginally 'https://usX.api.mailchimp.com/3.0/lists/205d96e6b4'
    method: "POST",
    headers: {
      "Authorization": "Edward1 d8dd0ad0c3e40592e393b08efc33a7ac-us20" //mailchimp's Authorizationusing api guidelines
    },
    body: jsonData
  };

  request(options, function(error, response, body){
    if(error){
      res.sendFile(__dirname + "/failure.html"); //to redirect to page
    }else{
      if(response.statusCode === 200){
        res.sendFile(__dirname + "/success.html");
      } else{
        res.sendFile(__dirname + "/failure.html");
      }
    }
  });

});

app.post("/failure", function(req, res){ //posting on /failure site
  res.redirect("/"); //redirects failure site back to home site
});

app.listen(process.env.PORT || 3000, function(){ //dynamic port that heroku uses "process.env.PORT"
  console.log("Server is running on port 3000.");
});

//d8dd0ad0c3e40592e393b08efc33a7ac-us20 mailchimp api key for my account usX to us20

//de4c72d2d5 unique id for firstlist for mailchimp after lists in url


//in Procfile, tell heroku to open procfile and run the text within that file
//follow heroku guide
