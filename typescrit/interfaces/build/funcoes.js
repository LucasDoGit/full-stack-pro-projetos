"use strict";
function mostraPromocao(preco) {
    console.log(`promoção do curso, por apenas: ${preco}`);
}
const novoCurso = {
    id: '1',
    nome: 'Curso Typescript',
    preco: 129.00,
    promocao: mostraPromocao
};
console.log(novoCurso);
console.log(novoCurso.promocao(119));
let somaNumeros = (valor1, valor2) => {
    console.log('Resultado:', valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(15, 10);
console.log('resultado da variavel: ', resultado);
