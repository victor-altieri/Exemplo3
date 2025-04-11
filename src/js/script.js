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

//if / else

if(true){
    console.log("é verdadeiro")
}

let nome2 = "fiap"
if(nome2 == "fiap"){
    console.log("nome correto")
}
else{
    console.log("nome errado")
}

// IF encadeado ou aninhado

let idade2 = 13;
if(idade2 <= 14){
    console.log("não pode entrar.")
}
else if(idade2 > 14 && idade2 <= 18){
    console.log("pode entrar e curtir")
}
else if(idade2 > 18 && idade2 <= 50){
    console.log("perigo, seus pais estão na balada!")
}
else{
    console.log("voce deve ficar no sofá assistindo")
}

//switch case

let time = "Palmeiras"

switch(time){
    case "Palmeiras":
        console.log("Maior das Américas")

    case "São Paulo":
        console.log("tão ruim que não consegue ganhar em casa")

    case "Corinthians":
        console.log("menor time do brasil")
    
    default:
        console.log("não é válido")
}

// Ternário

let valor = 101
let resultado = valor == 100 ? "Valor Certo": "Valor Errado"
console.log(resultado)

let nota = 5
let passou = nota >= 6 ? "Passou": "Reprovou"
console.log(passou)

// ESTRUTURAS DE REPETIÇÃO

for(let i=0; i<10;i++){
    console.log("O valor de i é", i)
}

//while

let h = 0;

while(h < 10){
    console.log("O valor de h é", h)
    h++
}

// do while

let w = 0

do{
    console.log("do while", w)
    w++
} while(w<=20)

// JOGO DE ADIVINHAÇÃO

// declarando uma variável indefinida

// let palpite;

// const sorteio = Math.floor(Math.random() * 10) + 1;

// do{
//     palpite = parseInt(prompt("Escolha um número de 1 a 10"))
// }while(palpite !== sorteio)

//     alert(`Parabéns, você ganhou o jogo ${palpite}`)

// FUNÇÕES

function saudacao(){
    console.log(`Seja Bem-Vindo ${meunome}`)
}
saudacao("Victor")
