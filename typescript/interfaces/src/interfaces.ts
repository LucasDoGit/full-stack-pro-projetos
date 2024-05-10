
// interface em objetos
interface LojaProps {
    nome: string;
    endereco: string;
    status: boolean;
}

const BurguerK: LojaProps = {
    nome: "BK",
    endereco: "Rua x",
    status: true

}

console.log(BurguerK)

// interface em funcoes
function novaLoja({nome, endereco, status}: LojaProps): void {
    console.log(`Loja ${nome} criada com sucesso `);
    console.log(`Endereço ${endereco}`);
    console.log(`Status da loja: ${status}`);
}

novaLoja({ nome: "Red Burguer", endereco: "Rua do carinha", status: true });