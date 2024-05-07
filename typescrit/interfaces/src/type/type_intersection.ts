// types alias conseguimos criar tipos mais poderosos do que os tipos primitivos.

type Info = {
    id: number,
    nome: string,
    descricao?: string
}

// const produtoInfo: Info = {
//     id: 123,
//     nome: "PC GAMER",
//     descricao: "PC DE ULTIMA GERAÇÃO"
// }

type Categoria = {
    slug: string,
    quantidadeProduto: number;
}

// const categoria1: Categoria = {
//     slug: "Hardware",
//     quantidadeProduto: 2,
// }


// fazendo a intercessao de dois types
type ProdutoInfo = Info & Categoria; // INTERCESSÃO

const novoProduto: ProdutoInfo = {
    id: 1234,
    nome: "Teclado RGB",
    slug: "Teclado-mecanico",
    quantidadeProduto: 10,
}

console.log(novoProduto)