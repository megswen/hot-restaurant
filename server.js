//depend

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3004;
//hand data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  // basic routes 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });


  // Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data

  var waitlistData = [];

  app.post("/tables", function(req, res) {
    console.log(req.body);
    waitlistData.push(req.body)
    res.json(waitlistData);

    // console.log(res);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });