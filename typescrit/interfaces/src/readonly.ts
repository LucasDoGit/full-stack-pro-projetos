
interface ProdutoProps {
    readonly id: string,
    nome: string,
    descricao: string;
}

let produto1: ProdutoProps = {
    id: '1',
    nome: 'Cadeira',
    descricao: 'Uma cadeira, feita para sentar'
}

// produto1.id = '2' // erro no console, devido ao readonly

console.log(produto1)