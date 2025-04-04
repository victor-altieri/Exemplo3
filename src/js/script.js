// declaração de variáveis

var nome = "Fiap";
console.log(nome)

let idade = 10
console.log(idade)

const sobrenome = "Fiapinho"
console.log(sobrenome)

//undefined

let exemplo;
console.log(exemplo)

//null

let exemplo2 = null;
console.log(exemplo2)

// tipos de variáveis

let ex1 = "Fiap";
console.log(typeof ex1)

let ex2 = 25;
console.log(typeof ex2)

let ex3 = true
console.log(typeof ex3)

let ex4 = {}
console.log(typeof ex4)

let ex5 = []
console.log(typeof ex5)

//CONVERSÕES

//FLOAT => STRING

let numFloat = 123.456;
console.log(numFloat.toString())

//String => Float

let numString = "12.962";
console.log(parseFloat(numString))

//INT => STRING

let numInt = 55;
console.log(numInt.toString())

//STRING => INT

let numString2 = "666";
console.log(parseInt(numString2))

//METODOS

//METODO LENGTH - VERIFICA O TAMANHO DA STRING

let frase = "O mundo da tecnologia";
console.log(frase.length)

//METODO indeof/lastIndexOf -RETORNA UM TRECHO DO SEU CÓDIGO

let texto = "Programação Sustentável ão";
console.log(texto.lastIndexOf("ão"))

//METODO slice - RETORNA PARTE DE UM TEXTO PASSANDO INICIO E FINAL
let info = "Programação de ponta";
console.log(info.slice(14,20))

//OPERADORES ARITMÉTICOS

const a = 10;
const b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// OPERADORES LÓGICOS

const c = 20;
const d = 30;

console.log(c > d);
console.log(c > d && c > 10);
console.log(c > d || d > c);
//console.log(c = d || d <= c);

// OPERADORES DE COMPARAÇÃO

const e = '30';
const f = '30';

console.log(e == f);
console.log(e === f);
console.log(e != f);

// CONDICIONAIS
