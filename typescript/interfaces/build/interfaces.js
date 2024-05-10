"use strict";
const BurguerK = {
    nome: "BK",
    endereco: "Rua x",
    status: true
};
console.log(BurguerK);
// interface em funcoes
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso `);
    console.log(`Endereço ${endereco}`);
    console.log(`Status da loja: ${status}`);
}
novaLoja({ nome: "Red Burguer", endereco: "Rua do carinha", status: true });
