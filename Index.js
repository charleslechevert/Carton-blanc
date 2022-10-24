require("dotenv").config();

const express = require('express');
const router = require("./app/router");

const app = express();


app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.urlencoded({ extended: false }))

app.use(express.static("public"));

app.use(router);
console.log("ok")

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

