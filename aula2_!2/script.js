//Exercício1
var number = 2;

if (number < 0) {
  console.log("O número é negativo");
} else if ((number = 0)) {
  console.log("O númeor é zero");
} else {
  console.log("O número é positivo");
}

//Exercício 2
let number1 = 0;
let number2 = 2;

let result = number1 == number2 ? "São Iguais" : "São diferentes";
console.log(result);

//Exercício 3
let number4 = 1;
let result2 = number4 % 2 == 0 ? "Par" : "Impar";
console.log(result2);

//Exercício 4
let letra = "d";
const vogais = ["a", "e", "i", "o", "u"];

let result3 = vogais.includes(letra) ? "Vogal" : "Consoante";
console.log(result3);

//Exercicio 5
let n = [1, 7, 3, 3];
let nMax = n[0];
for (let i = 0; i < 4; i++) {
  if (n[i] > nMax) {
    nMax = n[i];
  }
  console.log(n[i]);
}

console.log("O maior valor é " + nMax);

//Exercício 6
let number5 = 8;
let cont = 0;
let isPrime = true;
for (let i = number5 - 1; i >= 2; i--) {
  if (number5 % i == 0) {
    isPrime = false;
  }
}
if (isPrime == true) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}
