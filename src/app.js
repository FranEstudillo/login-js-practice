const express = require("express");
const { engine } = require("express-handlebars");
const myConnection = require("express-myconnection");
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
app.set("port", 4000);

app.set("views", __dirname + "/views");
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(
  myConnection(mysql, {
    host: "localhost",
    user: "root",
    password: "fran",
    port: 3306,
    database: "ccf",
  })
);

app.listen(app.get("port"), () => {
  console.log("listenning on port ", app.get("port"));
});

app.get("/", (req, res) => {
  res.render("home");
});
