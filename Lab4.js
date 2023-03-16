var express = require("express");
const app = express();
const expresshbs = require("express-handlebars");
app.listen(3000);
app.engine(
  ".hbs",
  expresshbs.engine({
    extname: "hbs",
    defaultLayout: false,
    layoutsDir: "views/",
  })
);
app.set("view engine", "hbs");

app.get("/hand", (req, res) => {
  res.render("index");
});
