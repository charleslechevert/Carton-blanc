require("dotenv").config();

const session = require('express-session');
const express = require('express');
const router = require("./app/router");

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.urlencoded({ extended: false }))

app.use(express.static("public"));

app.use(router);
console.log("ok")

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Liistening at http://localhost:${PORT}`);
});

