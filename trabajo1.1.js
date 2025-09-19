const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Ingrese el primer número: ", (num1) => {
  readline.question("Ingrese el operador (+, -, *, /): ", (operador) => {
    readline.question("Ingrese el segundo número: ", (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      let resultado;

      if (operador === "+") {
        resultado = num1 + num2;
      } else if (operador === "-") {
        resultado = num1 - num2;
      } else if (operador === "*") {
        resultado = num1 * num2;
      } else if (operador === "/") {
        resultado = num1 / num2;
      } else {
        resultado = "Operador no válido";
      }

      console.log("Resultado: " + resultado);
      readline.close();
    });
  });
});
