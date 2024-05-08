
type DadosConta = {
    nome: string,
    numero: string,
    endereco: string,
}

abstract class ContaBanco {
    abstract abrirConta(dados: DadosConta): boolean; // nao pode ter regras ao usar o abastract
}

// const conta = new ContaBanco(); // nao pode ser utilizada pois é abastrata

class PessoaFisica extends ContaBanco {
    abrirConta(dados: DadosConta): boolean {
        console.log(`nova conta fisica criada com sucesso ${dados.nome}`)
        return true;
    }
}

const pessoaFisica = new PessoaFisica();

pessoaFisica.abrirConta({
    nome: "Lucas",
    endereco: "Rua das Flores",
    numero: "1234"
})

class PessoaJuridica extends ContaBanco {
    abrirConta(dados: DadosConta): boolean {
        console.log(`nova conta juridica criada com sucesso ${dados.nome}`)
        return true;
    }
}

const pessoaJuridica = new PessoaFisica();

pessoaJuridica.abrirConta({
    nome: "Thiago",
    endereco: "Rua das Tartarugas",
    numero: "24453"
})
