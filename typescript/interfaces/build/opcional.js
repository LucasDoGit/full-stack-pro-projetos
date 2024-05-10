"use strict";
const novoUsuario = {
    nome: "Lucas",
    email: "lucas@teste.com",
    // status: true, // nao acusa erro mesmo nao declarando
};
// console.log(novoUsuario)
function novoUser({ nome, email, status }) {
    console.log(status); // -> retorna undefined
}
function novoUser2(propriedades) {
    console.log(propriedades.status); // -> retorna undefined
}
novoUser2({ nome: "lucas", email: "lucas@teste.com" });
