"use strict";
// TIPO DESCONHECIDO
// quando vc nao sabe que tipo vai receber
let total;
total = 100;
total = "250";
total = {
    total: 100
};
let idPedido = 123;
let totalPedido = 15;
let entregador = idPedido;
// let totalEntrega: number = totalPedido; // valor do tipo unknown so pode ser atribuido a tipos unknown ou any
let totalEntrega = totalPedido;
console.log(entregador);
console.log(totalEntrega);
