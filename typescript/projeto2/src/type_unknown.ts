// TIPO DESCONHECIDO

// quando vc nao sabe que tipo vai receber
let total: unknown;

total = 100;

total = "250";

total = {
    total: 100
}

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;
// let totalEntrega: number = totalPedido; // valor do tipo unknown so pode ser atribuido a tipos unknown ou any
let totalEntrega: any = totalPedido;

console.log(entregador)
console.log(totalEntrega)
