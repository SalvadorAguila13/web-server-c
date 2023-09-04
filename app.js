const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const port = process.env.PORT || 4000;
const app = express();

// todo: handlebars
app.set("view engine", "hbs");

// todo: parciales de handlebars
hbs.registerPartials(__dirname + "/views/partials");

// todo: Servicio estatico:
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Ulices Salvador",
    title: "Node",
  });
});

app.get("/generic", (req, res) => {
    res.render("generic", {
      name: "Ulices Salvador",
      title: "Node",
    });
  });

app.get("/elements", (req, res) => {
    res.render("elements", {
      name: "Ulices Salvador",
      title: "Node",
    });
  });

app.get("*", (req, res) => {
  res.send("Error 404");
});

app.listen(port, () => {
  console.log(`Ejecutando un http://localhost:${port}`);
});
