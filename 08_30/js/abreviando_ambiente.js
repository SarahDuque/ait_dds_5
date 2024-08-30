'use strict';

const ambientes = [
    'VTRIA-3-SALA-3004',
    'VTRIA-EXTER-EXTERNO',
    'VITRIA-5-LAB-5022'
];

for (let i = 0; i < ambientes.length; i++) {
    const salas = ambientes[i].split('-');
    salas.splice(0,2);
    let sala = salas.join('-');
    console.log(sala);

}

