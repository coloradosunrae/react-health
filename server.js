const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const path = require("path");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Add routes, both API and view
app.use(routes);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });  
}


// app.get("/", function(req, res) {
//   res.json(path.join(__dirname, "public/index.html"));
// });



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/finalproject", { useNewUrlParser: true });
app.use(passport.initialize());



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
