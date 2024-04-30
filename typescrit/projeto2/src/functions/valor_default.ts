// como deixar um valor por default ou deixar ele opcional

// neste exemplo o nome e um parametro opcional e o padrao e "Aluno"
// function cadastrar(email: string, senha: string, nome = "Aluno", idade?: number): void { 
//     let data = { email, senha, nome, idade };

//     console.log(data)
// }

// cadastrar("lucas@teste.com", "lucas1234", undefined, 21);

function cadastroLoja(nome: string, email: string, status = false): boolean {
    console.log(nome)

    return status;
}

console.log(cadastroLoja("Burguer K", "bk@teste.com"));