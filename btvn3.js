const express = require("express");
const app = express();
const port = 3000;
const pheptinh = require("./pheptinh.js");

// Middleware để xử lý các request dạng form data
app.use(express.urlencoded({ extended: true }));

// Route để trả về form
app.get("/", (req, res) => {
  res.send(`
    <form id="calculator" method="POST">
      <label for="a">Enter a:</label>
      <input type="number" id="a" name="a" /><br /><br />

      <label for="b">Enter b:</label>
      <input type="number" id="b" name="b" /><br /><br />

      <label for="operator">Select an operator:</label>
      <select id="operator" name="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select><br /><br />

      <input type="submit" value="Calculate" />
    </form>
  `);
});

// Route để xử lý submit form
app.post("/", (req, res) => {
  const { a, b, operator } = req.body;
  let result = pheptinh.AddNumber(a, b, operator);

  //   switch (operator) {
  //     case "+":
  //       result = Number(a) + Number(b);
  //       break;
  //     case "-":
  //       result = Number(a) - Number(b);
  //       break;
  //     case "*":
  //       result = Number(a) * Number(b);
  //       break;
  //     case "/":
  //       result = Number(a) / Number(b);
  //       break;
  //     default:
  //       result = "Invalid operator";
  //   }

  res.send(`<script>alert('Result: ${result}')</script>`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
