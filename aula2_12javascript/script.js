//Exercício1 - Verifica se é positivo, negativo ou zero
var number = 2;

if (number < 0) {
  console.log("O número é negativo");
} else if ((number = 0)) {
  console.log("O númeor é zero");
} else {
  console.log("O número é positivo");
}

//Exercício 2 - Igualdade entre números
let number1 = 0;
let number2 = 2;

let result = number1 == number2 ? "São Iguais" : "São diferentes";
console.log(result);

//Exercício 3 - Verifica se é par ou impar
let number4 = 1;
let result2 = number4 % 2 == 0 ? "Par" : "Impar";
console.log(result2);

//Exercício 4 - Verifica se é vogal ou consoante
let letra = "d";
const vogais = ["a", "e", "i", "o", "u"];

let result3 = vogais.includes(letra) ? "Vogal" : "Consoante";
console.log(result3);

//Exercicio 5 - Devolve o maior
let n = [1, 7, 3, 3];
let nMax = n[0];
for (let i = 0; i < 4; i++) {
  if (n[i] > nMax) {
    nMax = n[i];
  }
  console.log(n[i]);
}

console.log("O maior valor é " + nMax);

//Exercício 6 - Verifica se é Primo
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

//Exercício 7 - Verifica se é ou não número perfeito
let number6 = 28;
let numberCount = 0;
for (let i = number6 - 1; i > 0; i--) {
  if (number6 % i == 0) {
    numberCount += i;
  }
}
let result4 =
  numberCount == number6 ? "Número Perfeito" : "Não é número perfeito";
console.log(result4);

//Exercício 8 - Verifica se é número de Armstrong
let number7 = 153;
let digits = number7.toString();
let numLen = digits.length;

let sum = 0;

for (let i = 0; i < numLen; i++) {
  sum += digits[i] ** numLen;
}

let result5 =
  number7 == sum ? "É Número de Armstrong" : "Não é Número de Armstrong";

console.log(result5);

//Exercicio 9 - Capicua
let number8 = 2332;
let digits2 = number8.toString();

let reversed = digits2.split("").reverse().join("");

let result6 = digits2 === reversed ? "Capicua" : "Não Capicua";

console.log(result6);

//Exercicio 10 - Número Feliz
let number9 = 10;

while (true) {
  let sum2 = 0;
  let digits3 = number9.toString();

  for (let i = 0; i < digits3.length; i++) {
    let digit = Number(digits3[i]);
    sum2 += digit ** 2;
  }

  if (sum2 === 1) {
    console.log("Número Feliz");
    break;
  }

  if (sum2 === 4) {
    console.log("Não é um Número Feliz");
    break;
  }

  number9 = sum2;
}
