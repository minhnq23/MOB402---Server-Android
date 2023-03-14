exports.AddNumber = (a, b, operator) => {
  let result;

  // Tính toán kết quả phép tính dựa trên operator
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = null;
  }

  return result;
};
