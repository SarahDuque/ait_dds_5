'use strict'; // Impede uso de variaveis não declaradas

let nome = 'sarah';
let sobrenome = 'monteiro';

console.log(sobrenome);

const instrutor = 'EDUARDO LUIZ FERREIRA SILVA'

const pieces = instrutor.split(' ');/*split separa uma string em um array de 
strings com o separador escolido*/

//console.log(pieces[0],pieces[pieces.length-1]);

console.log(pieces[0],pieces.pop());/*pop remove e retorna o último elemento*/

let array = [1,2,3,4,5,6];
console.log(array);
let numero = array.pop();
console.log(numero);
console.log(array);

array.push(7);/*push empurra ao final do array*/
console.log(array)

console.log(array.shift());/*remove e retorna o primeiro elemento*/
array.unshift(0);/*unshift adiciona na primeira posição do array*/
console.log(array)

let cores = ['azul','verde','roxo','vermelho','preto'];

for(let i = 0;i<cores.length;i++){
    console.log(cores[i])
}

console.log('for simplificado');

for(let cor of cores){
    console.log(cor);
}

