class Calculadora {
  
  sumar(num1: number, num2: number): number {
      return num1 + num2;
  }

  
  restar(num1: number, num2: number): number {
      return num1 - num2;
  }

  
  multiplicar(num1: number, num2: number): number {
      return num1 * num2;
  }

 
  dividir(num1: number, num2: number): number {
      if (num2 !== 0) {
          return num1 / num2;
      } else {
          console.error("No se puede dividir por cero.");
          return NaN;
      }
  }

  
  potencia(base: number, exponente: number): number {
      return Math.pow(base, exponente);
  }

 
  factorial(num: number): number {
      if (num < 0) {
          console.error("No se puede calcular el factorial de un número negativo.");
          return NaN;
      } else if (num === 0 || num === 1) {
          return 1;
      } else {
          let resultado = 1;
          for (let i = 2; i <= num; i++) {
              resultado *= i;
          }
          return resultado;
      }
  }
}


const miCalculadora = new Calculadora();

console.log("Suma:", miCalculadora.sumar(5, 3));
console.log("Resta:", miCalculadora.restar(8, 2));
console.log("Multiplicación:", miCalculadora.multiplicar(4, 6));
console.log("División:", miCalculadora.dividir(9, 3));
console.log("Potencia:", miCalculadora.potencia(2, 4));
console.log("Factorial:", miCalculadora.factorial(5));
