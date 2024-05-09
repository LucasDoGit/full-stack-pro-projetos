
interface NovoProduto<V extends number> {
    nome: string;
    preco: V;

    formatar(valor: V): string;
}

// type NovoProduto<V extends number | string> = {
//     nome: string,
//     preco: V;
// }

const arroz: NovoProduto<number> = {
    nome: "Arroz",
    preco: 23.90,
    formatar(valor: number): string { 
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        })
        return valorFormatado
    }
}

console.log(arroz)
console.log(arroz.formatar(23.90))

