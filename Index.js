require("dotenv").config();

const session = require('express-session');
const express = require('express');
const path = require('path');
const router = require("./app/router");


const app = express();

app.use(session({
  secret: 'test',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/app/views'));

app.use(express.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'));

app.use(router);
console.log("ok")

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Liiiiistening at http://localhost:${PORT}`);
});

