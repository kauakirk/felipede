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