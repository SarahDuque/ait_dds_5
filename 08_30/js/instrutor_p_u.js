'use strict';

let instrutor = [
    'EMANOEL VITOR VENTURA ATANAZIO',
    'ISAAC LUCCA DE PAULA BARBARA',
    'MATHEUS SARTI BRUNELLI',
    'SARAH MONTEIRO DUQUE',
    'DEIVID GUIMARÃES GONÇALVES FILHO',
    'HELOISA RANGEL GUIMARÃES',
    'MARCO ANTÔNIO SANTOS MEDEIROS',
    'PIETRO GABRIEL HERINGER MENEZES',    
    'DANIEL KALEB DE OLIVEIRA ALVES MOREIRA',
    'AMANDA XAVIER NASCIMENTO',
    'VITOR VARGAS PARAJARA',
    'SAMARA DA SILVA RIBEIRO',
    'ANNA JULYA DOS SANTOS DA SILVA',
    'AYMAR ANTONIO SILVA',
    'JOÃO PEDRO COSTA SILVA',
    'GABRIEL DE ASSIS SPERANDIO'
];

instrutor.sort();

for(let i = 0;i<instrutor.length;i++){
    const nome = instrutor[i].split(' ');
    console.log(nome[0],nome.pop());
}



