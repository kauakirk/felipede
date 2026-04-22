const name = "Jhon"
const age = 30
const city = "New York"

console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`)


const numero = [1, 2, 3, 4, 5]

//const primeio = numero[0];
//const secundo = numero[1];
//const terceiro = numero[2];
//const quarto = numero[3];
//const quinto = numero[4];

const[primeiro, segundo, terceiro, quarto, quinto] = numero


console.log(`Os números são: ${primeiro}, ${segundo}, ${terceiro}, ${quarto} e ${quinto}.`)


let a = 1;
let b = 2;
[a, b] = [b, a]
console.log(`O valor de a é ${a} e o valor de b é ${b}.`) 

const numeros2 = [1, 2, 3, 4]

const numerosDif = [...numeros2, 5, 6, 7]

const usuario = {
    primeiroNome: "João",
    sobreNome: "Silva",
    idade: 25
};

const {primeiroNome, sobreNome, idade} = usuario;

const {novoA, novoB, ...rest} = {a: 10, b: 20, c: 30, d: 40}


const numeros = [1, 2, 3, 4, 5]

const  [primeiroNumero, segundoNumero, segundoNumero2, terceiroNumero, quartoNumero] = numeros
console.log(primeiroNumero, segundoNumero, segundoNumero2, terceiroNumero, quartoNumero)


let c = 5
let f = 20
[c, f] = [f, c]


const series = ["Breaking Bad", "Game of Thrones", "Stranger Things"]
const series2 = [...series, "The Crown", "The Mandalorian"]


const viking = {
    familia: "Ragnarsson",
    idade: 35,
    tamanho: "grande"
};

const {familia, novaIdade, tamanho} = viking

console.log(familia, novaIdade, tamanho)