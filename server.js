//needed at top of file for user authentication
require("dotenv").config();
const passport = require("passport");
const express = require("express");
// const path = require("path");
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

app.use(passport.initialize());

// Passport config
passport.use( require("./config/jwtPassportStrategy") );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gainzz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//needed before "catch-all" route for authentication
app.use( "/api", require("./routes/authentication") );
//can add API routes here before HTML routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
});