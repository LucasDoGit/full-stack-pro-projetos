"use strict";
function login(username) {
    let message = "Bem vindo " + username;
    console.log(message);
    return true;
}
const retornoFuncao = login("Lucas Timoteo");
console.log(retornoFuncao);
let n1 = 10;
// let n2: string = "20";
let n2 = 20;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    return soma;
}
console.log(soma(n1, n2));
