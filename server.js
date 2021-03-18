const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes');
const mongoose = require('mongoose');

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

//can add API routes here before HTML routes
app.use(routes);

//HTML routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
});