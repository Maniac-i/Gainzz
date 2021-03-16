const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//can add API routes here before HTML routes

//HTML routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
});