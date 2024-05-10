// type ARRAY

// 1. PRIMERA FORMA DE TIPAR COMO ARRAY
let lista: number[];
let filmes: string[];
let listaFilmes: (string | number | boolean)[];

// 2. SEGUNDA FORMA DE TIPAR COMO ARRAY
let lista2: Array<number>;
let filmes2: Array<string>;
let listaFilmes2: Array<string | number>;

lista = [ 1, 2, 3, 4, 5]

console.log(lista)

lista.push(6)

// lista.push('7') // nao aceita nada que nao seja numero no array

console.log(lista)

filmes = [ 'filme1', 'filme2', 'filme3' ]

filmes.push('filme4')

console.log(filmes)

