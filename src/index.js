require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes"));
console.log(process.env.NODE_ENV);
module.exports = app;
