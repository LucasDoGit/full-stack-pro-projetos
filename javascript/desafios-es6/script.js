/* 1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que 
recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. 
A função deve retornar uma string indicando o resultado. */

let numero = 1;

function verificarNumero(numero) {
    if (numero === 0) {
        console.log("O Numero recebido é zero");
    } else if (numero > 0) {
        console.log("O numero digitado é positivo");
    } else if (numero < 0) {
        console.log("O numero digitado é negativo");
    }
}

verificarNumero(numero)

/* 2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar 
receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um 
numero que deseja conferir se esse numero existe dentro do array e com isso você deve 
mostrar o resultado se esse numero que colocou existe dentro do seu array de números.  */

let numeros = [1, 89, 34, 745, 25];
let numeroBusca = 1;

function buscarNumero(numeros, numeroBusca) {
    let resultado = numeros.includes(numeroBusca);

    if(!resultado) {
        return console.log(`O número ${numeroBusca} não está presente na lista`);
    }

    return console.log(`O número ${numeroBusca} está presente na lista`);
}

buscarNumero(numeros, numeroBusca);

/*
3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com 
Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:​

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];
​3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?
*/

const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];

function buscarPreco(produtos, valorBusca){
   let result = produtos.filter((item) => item.price === valorBusca);

   if(result.length === 0){
        return console.log("Nenhum produto encontrado com o valor específicado")
   }

   return console.log(result);
}

buscarPreco(products, 20);

function filtrarMenorValor(produtos, valorFiltro){
    let result = produtos.filter((item) => item.price <= valorFiltro);
 
    if(result.length === 0){
         return console.log("Nenhum produto encontrado com o valor específicado")
    }
 
    return console.log(result);
 }
 
 filtrarMenorValor(products, 2);