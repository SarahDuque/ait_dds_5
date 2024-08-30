'use strict'; 

let municipios = ['Serra','Cariacica','Vila Velha','Viana','Vitória','Guarapari'];
console.log(municipios[0].toUpperCase());

console.log(municipios);

//removendo dois elementos apartir do elemento 1
municipios.splice(1,2);
console.log(municipios);

//removendo dois elementos no final
municipios.splice(-2,1);
console.log(municipios);

//para juntar um array usamos o join e podemos definir um separador
let texto = municipios.join('-');

console.log(texto);