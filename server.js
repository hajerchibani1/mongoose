const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(express.json());
const dbconnect = require("./model/dbconnect");
dbconnect();
app.get("/", function (req, res) {
  res.end("Hello hello");
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("server running");
});
