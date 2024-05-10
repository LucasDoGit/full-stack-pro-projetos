
interface CadastroProps {
    nome: string;
    email: string;
    status?: boolean; // torna o status opcional
}

const novoUsuario: CadastroProps = {
    nome: "Lucas",
    email: "lucas@teste.com",
    // status: true, // nao acusa erro mesmo nao declarando
}

// console.log(novoUsuario)

function novoUser({ nome, email, status }: CadastroProps) {
    console.log(status) // -> retorna undefined
}

function novoUser2(propriedades: CadastroProps) {
    console.log(propriedades.status) // -> retorna undefined
}

novoUser2({ nome: "lucas", email: "lucas@teste.com" })